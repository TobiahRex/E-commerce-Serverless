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

export const ProductModel = newDB =>
new Promise((resolve) => {
  const productModelGen = ProductModelGenerator(newDB);
  resolve(productModelGen.next().value);
  productModelGen.next();
});

export const UserModel = newDB =>
new Promise((resolve) => {
  const userModelGen = UserModelGenerator(newDB);
  resolve(userModelGen.next().value);
  userModelGen.next();
});

export const closeDB = db => new Promise((resolve) => {
  console.log('\nmongo/connection.js @ CLOSE DB');
  db.close(() => {
    console.log('\n', JSON.stringify(db.connections, null, 2));
    resolve();
  });
});

export const startDB = () => new Promise((resolve, reject) => {
  const newDB = mongoose.createConnection(MONGO_DB, options, (error) => {
    if (error) {
      reject(
        `Could not connect to Mongo DB.
        ERROR: ${error}`,
      );
    }
  });
  ProductModel(newDB);
  UserModel(newDB);
  closeDB(newDB);
  resolve(`Mongo Connected @ ${MONGO_DB}`);
});
