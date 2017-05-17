/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import { startDB, closeDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  console.log('\nEVENT: ', event);
  let dbConnection;
  startDB()
  .then(({ db, dbModels }) => {
    dbConnection = db;
    return runGraphQL({ event, dbModels });
  })
  .then((response) => {
    console.log('\//handler.js @ \ndb.connections BEFORE closeDB(): ', dbConnection.connections);
    return closeDB(dbConnection, response);
  })
  .then((response) => {
    console.log('\n//handler.js @ \nRESOLVE: ', response);
    context.succeed && context.succeed(response);
    cb(null, response);
  })
  .catch((error) => {
    console.log('\n//handler.js @ CATCH\nERROR: ', error);
    context.error && context.error(error);
  });
};
