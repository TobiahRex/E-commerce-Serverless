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
} from './helpers';
import {
  getMhTransactionTagsMongo as GetMhTransactionTagsMongo,
} from '../marketHero/helpers';

require('dotenv').load({ silent: true });


transactionSchema.statics.fetchSquareLocation = country =>
new Promise((resolve, reject) => {
  console.log('@fetchSquareLocation');

  axios({
    method: 'get',
    url: 'https://connect.squareup.com/v2/locations',
    headers: { Authorization: `Bearer ${GetSquareToken(country)}` },
  })
  .then((response) => {
    console.log('Received locations from Square: ', response.data);

    const locations = response.data.locations.filter(({ name }) => name === GetSquareLocation(country));

    if (locations.length) {
      const newLocation = { ...locations[0] };
      newLocation.error = {
        hard: false,
        soft: false,
        message: '',
      };

      if (newLocation.capabilities.includes('CREDIT_CARD_PROCESSING')) {
        console.log('Found location object! Resolving...');
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
    console.log('Error while fetching location from Square.  Error = ', error);
    reject(`Error while fetching location from Square.  Error = ${error}`);
  });
});

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
  .then((response) => {
    console.log('Successfully charged customer. ', response.data);
    resolve(response);
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
  console.log('@submitFinalOrder');

  console.log('1] ARGS: \n', JSON.stringify(orderForm, null, 2));
  let newTransactionDoc = {};
  let userDoc = {};

  const {
    userId,
    comments,
    termsAgreement,
    newsletterDecision,
    cart,
    sagawa,
    jpyFxRate,
    taxes,
    total,
    square,
    language,
  } = orderForm;

  Promise.all([
    bbPromise.fromCallback(cb => Transaction.create({
      comments,
      termsAgreement,
      user: userId,
      products: cart,
      sagawa: sagawa.sagawaId,
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
  ])
  .then((results) => {
    console.log('\n2] Successfully Completed: 1) Created new Transaction Document. 2) Updated User\'s "email" and "marketing" fields. 3) Fetched Square Location information.\n');

    newTransactionDoc = results[0];
    userDoc = { ...results[1] };

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
  })
  .then((response) => {
    console.log('3] Received Square response for charging Customer CC.');
    if (response.status !== 200) {
      console.log('3a] Failed to charge customer card: ', response.data);
      resolve({
        error: {
          hard: true,
          soft: false,
          message: JSON.stringify(response.data),
        },
      });
    }
    console.log('3b] Successfully charged customer card.');

    return Promise.all([
      User.findByIdAndUpdate(userDoc._id, {
        $set: {
          'shopping.transactions': [...userDoc.shopping.transactions, newTransactionDoc._id],
          'shopping.cart': [],
        },
      }, { new: true }),
      MarketHero.checkForLead(sagawa.shippingAddress.email),
      Sagawa.deepUpdate({
        cart,
        total,
        userId,
        sagawa,
        transactionId: newTransactionDoc._id,
      }),
    ]);
  })
  .then((results) => {
    console.log('4] Success! 1) Updated User "cart" and "transactions" history.  2) Created or Updated Market Hero document. 3) Updated Sagawa document for this transaction.', results);

    userDoc = { ...results[0] };
    const marketHeroOp = results[1] ? 'updateMongoLead' : 'createMongoLead';

    const lead = {
      language,
      email: sagawa.shippingAddress.email,
      givenName: sagawa.shippingAddress.givenName,
      familyName: sagawa.shippingAddress.familyName,
    };

    const mongoTags = GetMhTransactionTagsMongo({ total, cart, language });
    const apiTags = GetMhTransactionTagsMongo({ total, cart, language });

    return Promise.all([
      Email.createInvoiceEmailBody({
        cart,
        square,
        sagawa: results[2],
        language,
        transaction: newTransactionDoc,
      }),
      MarketHero[marketHeroOp]({ lead, mongoTags, apiTags }),
      MarketHero.createOrUpdateLead({ lead, tags: apiTags }),
    ]);
  })
  .then((results) => {
    console.log('5] Success! Generated Invoice Email body and inserted result into Transaction document.');

    newTransactionDoc = { ...results[0] };

    return axios.post('http://', {
      userId,
      sagawaId: sagawa.sagawaId,
      transactionId: newTransactionDoc._id,
    });
  })
  .then(({ status, data }) => {
    console.log('6] Success! Uploaded order to Sagawa. Response: ', data);

    if (status !== 200) {
      console.log('Was not able to complete the order: ', data);
      resolve({
        error: {
          hard: true,
          soft: false,
          message: `Was not able to complete the order: ${data}`,
        },
      });
    }

    console.log('Querying for all Products purchased by customer...');
    return Product.find({ _id: { $in: cart.map(({ _id }) => _id) } }).exec();
  })
  .then((productDocs) => {
    console.log('7] Success! Found ', productDocs.length, ' product documents.  Perfoming update on "statistics" & "quantities" available now...');

    productDocs.forEach((productDoc) => {
      productDoc.product.quantities.inCarts -= 1;
      productDoc.product.quantities.purchased += 1;
      productDoc.statistics.completedCheckouts += 1;
      productDoc.transactions = [...productDoc.transactions, {
        transactionId: newTransactionDoc._id,
        userId,
      }];
      productDoc.save({ validateBeforeSave: true })
      .then((savedDoc) => {
        console.log('Successfully updated "statistics" & "quantities" for Product ', savedDoc._id);
      })
      .catch((error) => {
        console.log('Error while trying to update "statiistics" & "quantities" for Product ', productDoc._id, 'ERROR = ', error);
        reject('Error while updating DB after successful purchase.');
      });
    });

    console.log('8] Order complete! Resolving with 1) User doc, 2) Tracking ID 3) Transaction doc.');
    resolve(newTransactionDoc);
  })
  .catch((error) => {
    console.log('Failed to submit order due to error: ', error);
    reject(`Failed to submit order due to error: ${error}`);
  });
});

const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
