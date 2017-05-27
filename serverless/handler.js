/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import { startDB } from './db/mongo/connection';

// For making calls to other apiGateway-lambda
import request from 'request';

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

module.exports.wakeup = (event, context, callback) => {

  console.log("calling every one minute");

  var options = {
    "query":"some query"
  }

  request.post('https://url-to-wakeup' , { body: JSON.stringify(options)}, function (err, response, body) {
    if (err) {
      return console.error('waking up failed:', err);
    }
    console.log("woke up the sleeping lambda");
    console.log("json response");
    console.log(response);
    callback(null, response);
  });

};
