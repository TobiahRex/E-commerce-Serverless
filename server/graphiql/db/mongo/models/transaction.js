/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import db from '../connection';
// import { Promise as bbPromise } from 'bluebird';
import transactionSchema from '../schemas/transactionSchema';
require('dotenv').load({ silent: true });

transactionSchema.statics.createTransaction = (txn, cb) => {
  Transaction.create(txn)
  .then(dbTxn => cb(null, dbTxn))
  .catch(error => cb({ problem: 'Could not create Transaction.', error }));
};

transactionSchema.statics.fetchSquareLocation = () =>
new Promise((resolve, reject) => {
  axios({
    method: 'get',
    url: 'https://connect.squareup.com/v2/locations',
    headers: { Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}` },
  })
  .then((response) => {
    console.log('Received locations from Square: ', response.data);

    const locations = response.data.locations.filter(({ name }) => name === 'Thomas NFriends');

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

transactionSchema.statics.authorizeDelayTransaction = ({
  locationId,
  transactionId,
  shippingEmail,
  shippingAddressLine1,
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
    `/locations/${locationId}/transactions`,
    {
      data: {
        idempotency_key: transactionId,
        buyer_email_address: shippingEmail,
        shipping_address: {
          address_line_1: shippingAddressLine1,
          address_line_2: shippingAddressLine2,
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
        note: 'Web API order.',
        delay_capture: true,
      },
    },
    {
      headers: {
        Authorization: `Bearear ${process.env.SQUARE_ACCESS_TOKEN}`,
      },
    },
  )
  .then((response) => {
    console.log('Successfully charged customer.  Respons = ', response.data);
  })
  .catch((error) => {
    console.log('Error while trying to Authorize Square payment. Error = ', error);
    reject(`Error while trying to Authorize Square payment. Error = ${error}`);
  });
});

const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
