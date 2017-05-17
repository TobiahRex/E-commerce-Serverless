/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const MONGO_DB = process.env.AWS_MONGO_URI_DEV;

const db = mongoose.createConnection(MONGO_DB, (err) => {
  console.log(err || `MONGO connected @ ${MONGO_DB}`);
});
export default db;
