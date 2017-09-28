/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';
import path from 'path';
import colors from 'colors';

require('dotenv').config({ path: path.resolve('.dev-server-env'), silent: true }); //eslint-disable-line

mongoose.Promise = Promise;
const MONGO_DB = `mongodb://localhost/${colors.bold('nj2jp-development')}`;
const db = mongoose.createConnection('mongodb://localhost:/nj2jp-development', err => console.log(err || `MONGO connected @ ${colors.yellow(MONGO_DB)}`));
export default db;
