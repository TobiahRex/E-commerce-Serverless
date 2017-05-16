/* eslint-disable global-require, import/first, no-unused-expressions */
if (!global._babelPolyfill) require('babel-polyfill');

import runGraphQL from './db/graphql/runGraphQL';
import { closeDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (error, response) =>
    closeDB(() => {
      if (error) {
        console.log('\nERROR:', error);
        context.error && context.error(error);
        cb(null, error);
      }
      console.log('\nRESULT: ', response);
      context.succeed && context.succeed(response);
      cb(null, response);
    }),
  );
};
