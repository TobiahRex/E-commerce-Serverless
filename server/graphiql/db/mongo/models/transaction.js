/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
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
  billingCity,
  billingPrefecture,
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
          address_line_1: shippingAddressLine2,
          address_line_2: '',
          locality: billingCity,
          administrative_district_level_1: billingPrefecture,
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
    console.log('Successfully charged customer.  Respons = ', response.data);
  })
  .catch((error) => {
    console.log('Error while trying to Authorize Square payment. Error = ', error);
    reject(`Error while trying to Authorize Square payment. Error = ${error}`);
  });
});

transactionSchema.statics.submitFinalOrder = orderForm =>
new Promise((resolve, reject) => {
  console.log('ARGS: \n', JSON.stringify(orderForm, null, 2));

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
    console.log('results: ', JSON.stringify(results, null, 2));
    resolve(results[0]);
    return Transaction.squareChargeCard({
      locationId: results[2].id,
      transactionId: results[0]._id,
      shippingEmail: sagawa.shippingAddress.email,
      shippingAddressLine2: sagawa.shippingAddress.shippingAddressLine2,
      billingCity: square.billingAddress.billingCity,
      billingPrefecture: square.billingAddress.billingPrefecture,
      shippingPostalCode: sagawa.shippingAddress.postalCode,
      shippingCountry: sagawa.shippingAddress.country,
      grandTotal: total.grandTotal,
      cardNonce: square.cardInfo.cardNonce,
    });
  })
  .catch((error) => {
    console.log('Could not submit final order due to error: ', error);
    reject(`Failed to submit order due to error: ${error}`);
  });
});

const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
