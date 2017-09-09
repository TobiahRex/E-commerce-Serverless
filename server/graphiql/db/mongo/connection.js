/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';
import colors from 'colors';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ path: path.resolve('.env-dev'), silent: true }); //eslint-disable-line
const MONGO_DB = `mongodb://localhost/${colors.bold('nj2jp-development')}`;

if (!MONGO_DB) throw new Error('MONGO_DB URI is undefined.');

const db = mongoose.createConnection(MONGO_DB, (err) => {
  console.log(err || `MONGO connected @ ${colors.yellow(MONGO_DB)}`);
});
export default db;
