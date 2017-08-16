/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import uuid from 'uuid';
import { Promise as bbPromise } from 'bluebird';
import db from '../connection';
import User from './user';
import transactionSchema from '../schemas/transactionSchema';
require('dotenv').load({ silent: true });

transactionSchema.statics.createTransaction = (txn, cb) => {
  Transaction.create(txn)
  .then(dbTxn => cb(null, dbTxn))
  .catch(error => cb({ problem: 'Could not create Transaction.', error }));
};

transactionSchema.statics.fetchSquareLocation = locationName =>
new Promise((resolve, reject) => {
  axios({
    method: 'get',
    url: 'https://connect.squareup.com/v2/locations',
    headers: { Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}` },
  })
  .then((response) => {
    console.log('Received locations from Square: ', response.data);

    // locationName = 'Thomas NFriends'
    const locations = response.data.locations.filter(({ name }) => name === locationName);

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
      console.log('Did not find Nj2jp in Square locations.');
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Did not find Nj2jp in Square locations.',
        },
      });
    }
  })
  .catch((error) => {
    console.log('Error while fetching location from Square.  Error = ', error);
    reject(`Error while fetching location from Square.  Error = ${error}`);
  });
});

transactionSchema.statics.squareChargeCard = ({
  locationId,
  transactionId,
  shippingEmail,
  shippingAddressLine2,
  shippingCity,
  shippingPrefecture,
  shippingPostalCode,
  shippingCountry,
  grandTotal,
  cardNonce,
}) =>
new Promise((resolve, reject) => {
  axios.post(
    `https://connect.squareup.com/v2/locations/${locationId}/transactions`,
    {
      data: {
        idempotency_key: uuid(),
        buyer_email_address: shippingEmail,
        shipping_address: {
          address_line_1: shippingAddressLine2,
          address_line_2: '',
          locality: shippingCity,
          administrative_district_level_1: shippingPrefecture,
          postal_code: shippingPostalCode,
          country: shippingCountry,
        },
        amount_money: {
          amount: grandTotal,
          currency: 'USD',
        },
        card_nonce: cardNonce,
        reference_id: transactionId,
        note: `${process.env.SQUARE_LOCATION}: Online order.`,
        delay_capture: false,
      },
    },
    {
      headers: {
        Authorization: `Bearear ${process.env.SQUARE_ACCESS_TOKEN}`,
      },
    },
  )
  .then((response) => {
    console.log('Successfully charged customer.  Response = ', response.data);
  })
  .catch((error) => {
    console.log('Error while trying to Authorize Square payment. Error = ', error.response.data.errors);
    // console.log('\n\n', Object.keys(error.response.data.errors), '\n\n');
    reject(`Error while trying to Authorize Square payment. Error = ${error.response.data.errors[0].detail}`);
  });
});

transactionSchema.statics.submitFinalOrder = orderForm =>
new Promise((resolve, reject) => {
  console.log('ARGS: \n', JSON.stringify(orderForm, null, 2));
  let newTransactionDoc = {};
  const {
    userId,
    comments,
    termsAgreement,
    newsletterDecision,
    cart,
    sagawa,
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
      sagawa: sagawa.sagawaId,
      taxes,
      total,
      square,
    }, cb)),
    User.editMemberProfile({ userId,
      userObj: {
        contactInfo: {
          email: sagawa.shippingAddress.email,
        },
        marketing: {
          newsletterDecision,
        },
      },
    }),
    Transaction.fetchSquareLocation(process.env.SQUARE_LOCATION),
  ])
  .then((results) => {
    // console.log('results: ', JSON.stringify(results, null, 2));
    console.log('\n\nSuccessfully Completed: 1) Creating new Transaction Document. 2) Updated User profile. 3) Fetching Square Location information.\n\n');

    newTransactionDoc = results[0];

    return Transaction.squareChargeCard({
      locationId: results[2].id,
      TransactionId: String(results[0]._id),
      shippingEmail: sagawa.shippingAddress.email,
      shippingAddressLine2: sagawa.shippingAddress.shippingAddressLine2,
      shippingCity: square.shippingAddress.shippingCity,
      shippingPrefecture: square.shippingAddress.shippingPrefecture,
      shippingPostalCode: sagawa.shippingAddress.postalCode,
      shippingCountry: sagawa.shippingAddress.country,
      grandTotal: total.grandTotal,
      cardNonce: square.cardInfo.cardNonce,
    });
  })
  .then((response) => {
    console.log('SQUARE - RESPONSE: ', response);
    resolve(newTransactionDoc);
  })
  .catch((error) => {
    console.log('Failed to submit order due to error: ', error);
    reject(`Failed to submit order due to error: ${error}`);
  });
});

const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
