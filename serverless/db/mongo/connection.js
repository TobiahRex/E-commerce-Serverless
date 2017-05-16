/* eslint-disable no-console */
import mongoose from 'mongoose';

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

export const closeDB = (cb) => {
  console.log('\nmongo/connection.js @ CLOSE DB');
  db.close(() => {
    console.log('\nmongo/connection.js @ db.close()\ndb: ', db);
    cb();
  });
};
export default db;
