/* eslint-disable global-require */
import runGraphQL from './db/graphql/runGraphQL';



module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (err, res) => {
    if (err) {
      context.error(err);
      return cb({ err });
    }
    context.succeed(res);
    return cb(null, res);
  });
};
