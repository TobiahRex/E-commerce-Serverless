/* eslint-disable no-console */
import mongoose from 'mongoose';
import ProductModelGenerator from './models/product';
import UserModelGenerator from './models/user';

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

export const startDB = () => {
  const db = mongoose.createConnection(MONGO_DB, options, (err) => {
    console.log(err || `Mongo Connected @ ${MONGO_DB}`);
  });
  console.log(ProductModelGenerator(db).next().value);
  console.log(UserModelGenerator(db).next().value);
  return db;
};

export const closeDB = (db, cb) => {
  console.log('\nmongo/connection.js @ CLOSE DB');
  db.close(() => {
    console.log('\nmongo/connection.js @ db.close()\ndb: ', db);
    cb();
  });
};
