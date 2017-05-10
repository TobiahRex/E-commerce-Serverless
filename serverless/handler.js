/* eslint-disable global-require, import/first */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import runGraphQL from './db/graphql/runGraphQL';
import { closeDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (err, res) =>
    closeDB(() => {
      if (err) {
        context.error(err);
        return cb({ err });
      }
      context.succeed(res);
      return cb(null, res);
    }),
  );
};
