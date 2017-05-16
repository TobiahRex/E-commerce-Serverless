/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import { closeDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  console.log('\nEVENT: ', event);
  runGraphQL(event, (error, response) =>
    closeDB(() => {
      if (error) {
        console.log('\n//handler.js @ if(error):\nERROR: ', error);
        context.error && context.error(error);
        cb(null, error);
      }
      console.log('\n//handler.js @ if(error) else:\nRESULT: ', response);
      context.succeed && context.succeed(response);
      cb(null, response);
    }),
  );
};
