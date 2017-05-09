/* eslint-disable global-require */
import mongoose from 'mongoose';
import runGraphQL from './db/graphql/runGraphQL';

module.exports.graphql = (event, context, cb) => {
  require('dotenv').load({ silent: true });
  const MONGO_DB = process.env.AWS_MONGO_URI_DEV;
  mongoose.connect(MONGO_DB, () => process.stdout.write(`Connected to MONGO_DB: ${MONGO_DB}`));

  runGraphQL(event, (err, res) => {
    if (err) return cb({ err });
    return cb(null, res);
  });
};
