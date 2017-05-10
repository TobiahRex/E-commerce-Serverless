import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const MONGO_DB = process.env.AWS_MONGO_URI_DEV;
console.log('\nMONGO_DB: ', MONGO_DB);

const options = {
  server: {
    socketOptions: {
      keepAlive: 30000,
      connectTimeoutMS: 30000,
    },
  },
};
const db = mongoose.createConnection(MONGO_DB, options, err =>
console.log(err || `Mongo Connected @ ${MONGO_DB}`));
// console.log('\ndb: ', db, '\n');
export const closeDB = cb => db.close(() => cb());
export default db;
