/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const MONGO_DB = 'mongodb://localhost/nj2jp-development';

if (!MONGO_DB) throw new Error('MONGO_DB URI is undefined.');

const db = mongoose.createConnection(MONGO_DB, (err) => {
  console.log(err || `MONGO connected @ ${MONGO_DB}`);
});
export default db;
