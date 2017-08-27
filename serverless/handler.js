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
    context.succeed && context.succeed(GraphQLResponse);
  })
  .catch((error) => {
    console.log('\n//Final Lambda ERROR: ', error);
    context.error && context.error(error);
  });
};

module.exports.sagawa = (event, context) => {
  console.log('\nPayload: ', event);

  verifyDb()
  .then((dbResults) => {
    console.log('\n//MongoDb Connection Response: ', dbResults);
    const {
      Sagawa,
      Email,
      Transaction,
    } = dbResults.dbModels;
    // const Sagawa = dbResults.connection.models.Sagawa;
    // const Transaction = dbResults.connection.models.Transaction;
    // const Email = dbResults.connection.models.Email;

    return Sagawa.uploadOrderAndSendEmail(event, Email, Transaction);
  })
  .then((response) => {
    console.log('SUCCEEDED: Upload Sagawa and Send Invoice Email.', response);
    context.succeed(response) && context.done();
  })
  .catch((error) => {
    console.log('FAILED: Upload Sagawa and Send Invoice Email.', error);
    context.fail(error) && context.done();
  });
};
