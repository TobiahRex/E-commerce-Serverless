/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import verifyDb from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  console.log('\nEVENT: ', event);

  verifyDb()
  .then(dbResults => runGraphQL({ event, ...dbResults }))
  .then((GraphQLResponse) => {
    console.log('\n//Final Lambda SUCCESS Response: ', GraphQLResponse);
    context.succeed && context.succeed(GraphQLResponse);
    cb(null, GraphQLResponse);
  })
  .catch((error) => {
    console.log('\n//Final Lambda ERROR: ', error);
    context.error && context.error(error);
  });
};
