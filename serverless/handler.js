/* eslint-disable global-require, import/first, no-unused-expressions */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import runGraphQL from './db/graphql/runGraphQL';
import { closeDB } from './db/mongo/connection';

module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (err, res) =>
    closeDB(() => {
      if (err) {
        if (context.error) context.error(err);
        return cb({ err });
      }
      if (context.succeed) context.succeed(res);
      return cb(res);
    }),
  );
};
