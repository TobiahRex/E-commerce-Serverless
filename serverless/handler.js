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

  if (event['type'] === 'weekly upload') {
    console.log('Cron Job');
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
  } else if (event['type'] === 'daily mail') {
    // Logic for daily mail here
    context.succeed() && context.done();
  } else {
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
