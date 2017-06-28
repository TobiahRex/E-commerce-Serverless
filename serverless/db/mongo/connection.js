/* eslint-disable no-console, no-constant-condition, no-unused-vars */
import mongoose from 'mongoose';
import createProductModel from './models/product';
import createUserModel from './models/user';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const MONGO_DB = process.env.MONGO_URI;

if (!MONGO_DB) throw new Error(`MONGO_DB URI value is: ${MONGO_DB.length ? MONGO_DB : 'undefined'}`);

let cachedDb = {
  connection: null,
  dbModels: {
    Product: null,
    User: null,
  },
};

const verifyDb = () =>
new Promise((resolve) => {
  console.log('mongoose.connection.readyState: ', mongoose.connection.readyState);
  if (cachedDb.connection && (mongoose.connection.readyState === 1)) {
    console.log('%cCONDITION PASSED', 'background:red;');
    console.log(`
      Previous connection found!
      Current Connections: ${cachedDb.connection.base.connections}
    `);
    resolve(cachedDb);
  } else {
    const connection = mongoose.createConnection(MONGO_DB, console.log);
    console.log(`
      Created new Mongo Connection:
      Connections: ${connection.base.connections}
      DB: ${connection.base}
    `);
    console.log('mongoose.connection.readyState: ', mongoose.connection.readyState);
    cachedDb = {
      connection,
      dbModels: {
        Product: createProductModel(connection),
        User: createUserModel(connection),
      },
    };
    resolve(cachedDb);
  }
});

export default verifyDb;
