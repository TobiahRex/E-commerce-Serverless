/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import uuid from 'uuid';
import { Promise as bbPromise } from 'bluebird';
import db from '../../connection';
import User from '../user';
import Email from '../email';
import MarketHero from '../marketHero';
import Sagawa from '../sagawa';
import Product from '../product';
import transactionSchema from '../../schemas/transactionSchema';
import {
  composeAmount as ComposeAmount,
  getSquareToken as GetSquareToken,
  getSquareLocation as GetSquareLocation,
  handleSquareErrors as HandleSquareErrors,
} from './helpers';
import {
  getMhTransactionTagsMongo as GetMhTransactionTagsMongo,
  getMhTransactionTagsApi as GetMhTransactionTagsApi,
} from '../marketHero/helpers';
import {
  zipArrays as ZipArrays,
} from '../sagawa/helpers';

require('dotenv').load({ silent: true });
/**
* Function: "fetchSquareLocation":
* Queries the Square API for the location respective to this application. Once successfully fetched, verifies the location can handle CC processing.  If verified, returns the locationId to the invoking function.
*
* @param {string} country - The country for Square account which the query will be executed..
*
* @return {string} locationId.
*/
transactionSchema.statics.fetchSquareLocation = country =>
new Promise((resolve, reject) => {
  console.log('@fetchSquareLocation');

  axios({
    method: 'get',
    url: 'https://connect.squareup.com/v2/locations',
    headers: { Authorization: `Bearer ${GetSquareToken(country)}` },
  })
  .then((response) => {
    console.log('SUCCEEDED: Fetch Square Location: ', response.data);

    const locations = response.data.locations.filter(({ name }) => name === GetSquareLocation(country));

    if (locations.length) {
      const newLocation = { ...locations[0] };
      newLocation.error = {
        hard: false,
        soft: false,
        message: '',
      };

      if (newLocation.capabilities.includes('CREDIT_CARD_PROCESSING')) {
        console.log('SUCCEEDED: Verify location CC processing.');
        resolve(newLocation);
      } else {
        newLocation.error = {
          hard: true,
          soft: false,
          message: `Location "${newLocation.name}" does not have permission "CREDIT_CARD_PROCESSING".`,
        };
        resolve(newLocation);
      }
    } else {
      console.log('Did not find requested location in Square locations.');
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Did not find requested lcoation in Square locations.',
        },
      });
    }
  })
  .catch((error) => {
    console.log('FAILED: Fetch square location: ', error);
    reject(new Error('FAILED: Fetch square location.'));
  });
});

/**
* Function: "squareChargeCard":
* Charges the customers credit card using the Square API with the required request body, containing the shipping information associated with the Customer.
*
* @param {object} chargeInfo
*
* @return {object} Square API response.
*/
transactionSchema.statics.squareChargeCard = chargeInfo =>
new Promise((resolve, reject) => {
  console.log('@squareChargeCard');

  const {
    locationId,
    transactionId,
    shippingEmail,
    shippingAddressLine2,
    shippingCity,
    shippingPrefecture,
    shippingPostalCode,
    shippingCountry,
    billingCountry,
    grandTotal,
    cardNonce,
    jpyFxRate,
  } = chargeInfo;

  axios.post(
    `https://connect.squareup.com/v2/locations/${locationId}/transactions`,
    {
      idempotency_key: uuid(),
      buyer_email_address: shippingEmail,
      shipping_address: {
        address_line_1: shippingAddressLine2,
        address_line_2: 'asdf',
        locality: shippingCity,
        administrative_district_level_1: shippingPrefecture,
        postal_code: shippingPostalCode,
        country: shippingCountry,
      },
      amount_money: {
        amount: ComposeAmount(billingCountry, grandTotal, jpyFxRate),
        currency: billingCountry === 'US' ? 'USD' : 'JPY',
      },
      card_nonce: cardNonce,
      reference_id: transactionId,
      note: `${GetSquareLocation(billingCountry)}: Online order.`,
      delay_capture: false,
    },
    {
      headers: {
        Authorization: `Bearer ${GetSquareToken(billingCountry)}`,
      },
    },
  )
  .then((response) => { //eslint-disable-line
    if (response.status !== 200) {
      resolve({ status: response.status });
    } else {
      console.log('Successfully charged customer. ', response.data);
      return Transaction.findByIdAndUpdate(transactionId, {
        $set: {
          'square.transactionId': response.data.transaction.id,
          'square.locationId': response.data.transaction.location_id,
        },
      }, { new: true });
    }
  })
  .then((result) => {
    if (!result) {
      reject('FAILED: Update Transaction with Square information.');
    } else {
      resolve({ status: 200 });
    }
  })
  .catch((error) => {
    console.log('%cerror', 'background:red;', error);
    console.log('Error while trying to Authorize Square payment: ', error.response.data.errors);
    reject(`Error while trying to Authorize Square payment:  ${error.response.data.errors[0].detail}`);
  });
});

/**
* Function: "submitFinalOrder"
* 1. Establishes 3 variables on the highest scope within the function.  These variables will be returned to the client after final promise resolution.
* 2. Call 3 promises in parallel: 1) Create a new Transaction document with values form the input arguments. 2) Find and Update the User document with important email information that may otherwise not already exist.  3) Call the Square API, fetching the business location based on the Billing country (US or Japan) chosen by the customer.
* 3. If successful, assign the upper scopes variables their respective values for Transaction & User.
* 4. Call the Square API again, using the LocationId fetched in the previous step, with any other required info, extracted from the input arguments.
* 5. If successful, update the User document with the necessary transaction history updates. Create or Update the Market Hero document respective to the User document, and generate the required fields for uploading the order information to Sagawa.
* 6. If successful, re-save the upper scope User Doc variable with the updated user information & generate the Invoice Email based on language, and when the order will be shipped to the user.  Save the result on the Transaction document.
* 7. Update the upper scope Transaction Doc variables with the new Transaction information & then call the Sagawa Upload lambda function passing the 1) User Id, 2) Sagawa Id, 3) Transaction Id.
* 8. If order was successfully uploaded to Sagawa, then response status code will be a 200.  The final response will be resolved with the final 1) Transaction document.
*
* @param {object} orderForm - all the inputs from the Order form.
*
* @return {object} Mongo Transaction Document.
*/
transactionSchema.statics.submitFinalOrder = orderForm =>
new Promise((resolve, reject) => {
  console.log('\n\n@Transaction.submitFinalOrder\n');

  console.log('1] ARGS: \n', JSON.stringify(orderForm, null, 2));
  let newTransactionDoc = {};
  let userDoc = {};
  let marketHeroOp = '';
  let cartProducts = [];

  const {
    userId,
    language,
    comments,
    termsAgreement,
    newsletterDecision,
    cart,
    sagawa,
    jpyFxRate,
    taxes,
    total,
    square,
  } = orderForm;

  Promise.all([
    bbPromise.fromCallback(cb => Transaction.create({
      comments,
      termsAgreement,
      user: userId,
      products: cart,
      emailAddress: sagawa.shippingAddress.email,
      jpyFxRate,
      taxes,
      total,
      square,
      language,
    }, cb)),
    User.findByIdAndUpdate(userId, {
      $set: {
        contactInfo: {
          email: sagawa.shippingAddress.email,
        },
        marketing: {
          newsletterDecision,
        },
      },
    }, { new: true }),
    Transaction.fetchSquareLocation(square.billingCountry),
    Product.find({ _id: { $in: cart.map(({ _id }) => _id) } }).exec(),
  ])
  .then((results) => { // eslint-disable-line
    if (!results[0] || !results[1] || !results[2] || !results[3]) {
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Oops! Looks like there\'s a network error.  Please try your order again later.',
        },
        user: null,
        transaction: null,
      });
    } else {
      console.log('\n2] SUCCEEDED: 1) Created new Transaction Document.\n', results[0]._doc, '\n2) Updated User\'s "email" and "marketing" fields.', results[1]._doc, '\n3) Fetched Square Location information.\n', results[2], '\n4) Retrieved Product documents from cart _id\'s.\n', results[3]);

      newTransactionDoc = results[0]._doc;
      userDoc = { ...results[1]._doc };
      cartProducts = ZipArrays(cart, results[3], (cartProduct, dbDoc) =>
      ({ qty: cartProduct.qty, ...dbDoc._doc }));

      return Transaction.squareChargeCard({
        locationId: results[2].id,
        transactionId: String(results[0]._id),
        shippingEmail: sagawa.shippingAddress.email,
        shippingAddressLine2: sagawa.shippingAddress.shippingAddressLine2,
        shippingCity: square.shippingAddress.shippingCity,
        shippingPrefecture: square.shippingAddress.shippingPrefecture,
        shippingPostalCode: sagawa.shippingAddress.postalCode,
        shippingCountry: sagawa.shippingAddress.country,
        billingCountry: square.billingCountry,
        grandTotal: total.grandTotal,
        cardNonce: square.cardInfo.cardNonce,
        jpyFxRate,
      });
    }
  })
  .then((response) => { //eslint-disable-line
    if (response.status !== 200) {
      resolve({
        error: {
          hard: true,
          soft: false,
          message: HandleSquareErrors(response),
        },
        user: null,
        transaction: null,
      });
    } else {
      console.log('3] SUCCEEDED: Square Charge Customer.\n', response.data);
      return Promise.all([
        User.findByIdAndUpdate(userDoc._id, {
          $set: {
            'shopping.transactions': [...userDoc.shopping.transactions, newTransactionDoc._id],
            'shopping.cart': [],
          },
        }, { new: true }),
        MarketHero.checkForLead(sagawa.shippingAddress.email),
        Sagawa.handleNewTransaction({
          cart: cartProducts,
          total,
          userId,
          sagawa,
          transactionId: newTransactionDoc._id,
        }),
      ]);
    }
  })
  .then((results) => { //eslint-disable-line
    console.log('USER RESULTS: ', results);
    if (!results[0] || !results[2]) {
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Oops! Looks like something went wrong.  Please try your order again later.',
        },
        user: null,
        transaction: null,
      });
    } else {
      console.log('4] SUCCEEDED: 1) Updated User "cart" and "transactions" history.\n', results[0]._doc, '\n 2) Checked for existing Market Hero document.\n', results[1], '\n3) Created Sagawa document for this transaction.\n', results[2]._doc);

      userDoc = { ...results[0]._doc };
      marketHeroOp = results[1] ? 'updateMongoLead' : 'createMongoLead';

      const lead = {
        language,
        email: sagawa.shippingAddress.email,
        givenName: sagawa.shippingAddress.givenName,
        familyName: sagawa.shippingAddress.familyName,
      };

      return Promise.all([
        Email.createInvoiceEmailBody({
          cart: cartProducts,
          square,
          sagawa: results[2]._doc,
          language,
          transaction: newTransactionDoc,
        }, Transaction),
        MarketHero[marketHeroOp]({
          lead,
          tags: GetMhTransactionTagsMongo({
            total,
            language,
            cart: cartProducts,
            subscribed: !!newsletterDecision,
          }),
        }),
        MarketHero.createOrUpdateLead({
          lead,
          tags: GetMhTransactionTagsApi({
            total,
            language,
            cart: cartProducts,
            subscribed: !!newsletterDecision,
          }),
        }),
      ]);
    }
  })
  .then((results) => { //eslint-disable-line
    if (!results[0] || !results[1] || !results[2]) {
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Oops! Looks like something went wrong.  Please try your order again later.',
        },
        user: null,
        transaction: null,
      });
    } else {
      console.log('5] SUCCEEDED: 1) Generate Invoice Email body and insert result into Transaction document.\n', results[0]._id, '\n 2) Create or Update Mongo Market Hero document.\n', results[1], '\n 3) Create or Update Market Hero API lead.\n', results[2]);

      newTransactionDoc = { ...results[0]._doc };

      const promise1 = axios.post('http://localhost:3001/api/sagawa', {
        userId,
        sagawaId: newTransactionDoc.sagawa,
        transactionId: newTransactionDoc._id,
      });
      let promise2 = null;
      let promiseArray = [promise1];

      if (marketHeroOp === 'createMongoLead') {
        promise2 = User.findByIdAndUpdate(userId, {
          $set: { 'marketing.marketHero': results[1]._id },
        }, { new: true });
        promiseArray = [...promiseArray, promise2];
      }

      return Promise.all([...promiseArray]);
    }
  })
  .then((results) => { //eslint-disable-line
    if (results[0].status !== 200) {
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Oops! Looks like something went wrong.  Please try your order again later.',
        },
        user: null,
        transaction: null,
      });
    } else {
      console.log('6] SUCCEEDED: 1) Call Sagawa Order Upload lambda.', results[0].status, '\n2) Update User Document with new MarketHero Doc _id (if necessary).', results[1]);

      const { status, data } = results[0];

      if (results.length === 2) userDoc = results[1];

      if (status !== 200) {
        console.log('FAILED: Upload Order to Sagawa: ', data);
        resolve({
          error: {
            hard: true,
            soft: false,
            message: `Was not able to complete the order: ${data}`,
          },
        });
      }

      cartProducts.forEach((productDoc) => {
        const {
          _id,
          product,
          statistics,
        } = productDoc;

        Product.findByIdAndUpdate(_id, {
          $set: {
            'product.quantities.inCarts': product.quantities.inCarts -= 1,
            'product.quantities.purchased': product.quantities.inCarts += 1,
            'statistics.completedCheckouts': statistics.completedCheckouts += 1,
            'statistics.transactions': [...statistics.transactions, {
              transactionId: newTransactionDoc._id,
              userId,
            }],
          },
        }, { new: true })
        .then((savedDoc) => {
          console.log('7] SUCCEEDED: Update "statistics" & "quantities" keys for product: ', `${savedDoc.product.flavor}_${savedDoc.product.nicotineStrength}mg`);
        })
        .catch((error) => {
          console.log('FAILED: Update "statistics" & "quantities" keys for product: ', `${productDoc.product.flavor}_${productDoc.product.nicotineStrength}mg`, '. Error: ', error);
          reject(new Error('FAILED: Update "statistics" & "quantities" keys for product: ', `${productDoc.product.flavor}_${productDoc.product.nicotineStrength}mg`));
        });
      });

      console.log('8] Order complete! Resolving with 1) User doc, 2) Transaction doc.');
      resolve({
        error: { hard: false, soft: false, message: '' },
        user: userDoc,
        transaction: newTransactionDoc,
      });
    }
  })
  .catch((error) => {
    console.log('Failed to submit order due to error: ', error);
    reject(`Failed to submit order due to error: ${error}`);
  });
});

const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
