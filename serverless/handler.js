/* eslint-disable global-require, import/first, no-unused-expressions */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import runGraphQL from './db/graphql/runGraphQL';
import { closeDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (error, response) =>
    closeDB(() => {
      if (error) {
        if (context.error) context.error(error);
        console.log('ERROR:\n ', error);
        cb(null, error);
      }
      if (context.succeed) context.succeed(response);
      console.log('RESULT\n: ', response);
      cb(null, response);
    }),
  );
};
