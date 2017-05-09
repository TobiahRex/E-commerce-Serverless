/* eslint-disable global-require */
import mongoose from 'mongoose';
import runGraphQL from './db/graphql/runGraphQL';

require('dotenv').load({ silent: true });

module.exports.graphql = (event, context, cb) => {
  mongoose.connect(process.env.MONGODB_URI, { server: { socketOptions: { connectTimeoutMS: 10000 } } })
  mongoose.connection.on('error', () => {
    console.error('Error connecting to MongoDB.')
    process.exit(1)
  });

  runGraphQL(event, (err, res) => {
    if (err) return cb({ err });
    return cb(null, res);
  });
};
