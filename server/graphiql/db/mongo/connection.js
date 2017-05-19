/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const {
  NODE_ENV,
  AWS_MONGO_URI_PROD,
} = process.env;

const MONGO_DB = NODE_ENV === 'production' ? AWS_MONGO_URI_PROD : 'mongodb://localhost/nj2jp-development';

if (!MONGO_DB) throw new Error('MONGO_DB_URI is undefined.');

const db = mongoose.createConnection(MONGO_DB, (err) => {
  console.log(err || `MONGO connected @ ${MONGO_DB}`);
});
export default db;
