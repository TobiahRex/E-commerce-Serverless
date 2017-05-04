import { runGraphQL } from './db';

module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};
