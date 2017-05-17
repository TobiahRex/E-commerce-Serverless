/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import { startDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  console.log('\nEVENT: ', event);

  startDB()
  .then(dbResults => runGraphQL({ event, ...dbResults }))
  .then((GraphQLResponse) => {
    console.log('\n//handler.js @ \nRESOLVE: ', GraphQLResponse);
    context.succeed && context.succeed(GraphQLResponse);
    cb(null, GraphQLResponse);
  })
  .catch((error) => {
    console.log('\n//handler.js @ CATCH\nERROR: ', error);
    context.error && context.error(error);
  });
};
