/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import uuid from 'uuid';
import { Promise as bbPromise } from 'bluebird';
import db from '../../connection';
import User from '../user';
import Email from '../email';
import transactionSchema from '../../schemas/transactionSchema';
import {
  getSqLocation,
  getSqToken,
  getAmount,
} from './squareHelpers';

require('dotenv').load({ silent: true });

transactionSchema.statics.fetchSquareLocation = country =>
new Promise((resolve, reject) => {
  axios({
    method: 'get',
    url: 'https://connect.squareup.com/v2/locations',
    headers: { Authorization: `Bearer ${getSqToken(country)}` },
  })
  .then((response) => {
    console.log('Received locations from Square: ', response.data);

    const locations = response.data.locations.filter(({ name }) => name === getSqLocation(country));

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
        amount: getAmount(billingCountry, grandTotal, jpyFxRate),
        currency: billingCountry === 'US' ? 'USD' : 'JPY',
      },
      card_nonce: cardNonce,
      reference_id: transactionId,
      note: `${getSqLocation(billingCountry)}: Online order.`,
      delay_capture: false,
    },
    {
      headers: {
        Authorization: `Bearer ${getSqToken(billingCountry)}`,
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
      sagawa: sagawa.sagawaId,
      jpyFxRate,
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
    Transaction.fetchSquareLocation(square.billingCountry),
  ])
  .then((results) => {
    console.log('\n\nSuccessfully Completed: 1) Creating new Transaction Document. 2) Updated User profile. 3) Fetching Square Location information.\n\n');

    newTransactionDoc = results[0];
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
    console.log('SQUARE - RESPONSE: ', response.status);
    if (response.status !== 200) {
      console.log('Failed to charge customer card: ', response.data);
      resolve({
        error: {
          hard: true,
          soft: false,
          message: JSON.stringify(response.data),
        },
      });
    }
    console.log('Successfully charge customer card:  Updated database.');

  })
  .then((response) => {
    resolve(newTransactionDoc);
  })
  .catch((error) => {
    console.log(error.response);
    console.log('Failed to submit order due to error: ', error);
    reject(`Failed to submit order due to error: ${error}`);
  });
});

const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
