import runGraphQL from './db/graphql/runGraphQL';

module.exports.graphql = (event, context, cb) => {
  runGraphQL(event, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};
