/* eslint-disable global-require */
import mongoose from 'mongoose';
import runGraphQL from './db/graphql/runGraphQL';

require('dotenv').load({ silent: true });

const MONGO_DB = process.env.AWS_MONGO_URI_DEV;
const connectToMongo = () => new Promise((res, rej) => {
  mongoose.connect(MONGO_DB, (err) => {
    if (!err) {
      res(`Connected to MONGO_DB: ${MONGO_DB}`);
    } else {
      rej(err);
    }
  });
});

module.exports.graphql = (event, context, cb) => {
  connectToMongo()
  .then((successMsg) => {
    console.log(successMsg);
    runGraphQL(event, (err, res) => {
      if (err) return cb({ err });
      return cb(null, res);
    });
  })
  .catch(cb);
};
