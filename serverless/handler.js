/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import verifyDb from './db/mongo/connection';

module.exports.graphql = (event, context) => {
  console.log('\nEVENT: ', event);

  verifyDb()
  .then(dbResults => runGraphQL({ event, ...dbResults }))
  .then((GraphQLResponse) => {
    console.log('\n//Final Lambda SUCCESS Response: ', GraphQLResponse);
    context.succeed(GraphQLResponse) && context.done();
  })
  .catch((error) => {
    console.log('\n//Final Lambda ERROR: ', error);
    context.fail(error) && context.done();
  });
};

module.exports.sagawa = (event, context) => {
  console.log('\nPayload: ', event);

  if (event.type === 'weekly upload') {
    console.log('W-1: Upload Weekend Orders');
    verifyDb()
    .then((dbResults) => {
      console.log('\n//MongoDb Connection Response: ', dbResults);
      const {
        User,
        Email,
        Report,
        Sagawa,
        Transaction,
      } = dbResults.dbModels;
      return Sagawa.cronJob(Report, Email, Transaction, User);
    })
    .then(() => {
      console.log('\nSUCCEEDED: Upload Sagawa and Send Invoice Email.');
      context.succeed() && context.done();
    })
    .catch((error) => {
      console.log('\nFAILED: Upload Sagawa and Send Invoice Email.', error);
      context.fail(error) && context.done();
    });
  } else if (event.type === 'notify sagawa') {
    console.log('D-2R: Notify Sagawa of Todays Orders');
    verifyDb()
    .then((dbResults) => {
      console.log('\n//MongoDb Connection Response: ', dbResults);
      const {
        Email,
        Sagawa,
      } = dbResults.dbModels;
      return Sagawa.notifySagawa(Email);
    })
    .then(() => {
      console.log('\nSUCCEEDED: Notify Sagawa shippers of pending orders.');
      context.succeed() && context.done();
    })
    .catch((error) => {
      console.log('\nFAILED: Notify Sagawa shippers of pending orders.', error);
      context.fail(error) && context.done();
    });
  } else {
    console.log('D-1R: New Order Upload');
    verifyDb()
    .then((dbResults) => {
      console.log('\n//MongoDb Connection Response: ', dbResults);
      const {
        User,
        Email,
        Sagawa,
        Transaction,
      } = dbResults.dbModels;
      return Sagawa.uploadOrderAndSendEmail(event, Email, Transaction, User);
    })
    .then((response) => {
      if (response.verified) {
        console.log('\nSUCCEEDED: Upload Sagawa and Send Invoice Email.', response.verified);
        context.succeed(response) && context.done();
      } else {
        console.log('\nFAILED: Upload Sagawa and Send Invoice Email.', response.verified);
        context.fail(response) && context.done();
      }
    })
    .catch((error) => {
      console.log('\nFAILED: Upload Sagawa and Send Invoice Email.', error);
      context.fail(error) && context.done();
    });
  }
};
