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
    User: null,
    Product: null,
  },
};

const verifyDb = () =>
new Promise((resolve) => {
  if (cachedDb.connection && (cachedDb.connection._readyState === 1)) {
    console.log('cachedDb.connection._readyState: ', cachedDb.connection._readyState, '\nFOUND PREVIOUS CONNECTION\n', '\nCurrent Connections: ', cachedDb.connection.base.connections);
    resolve(cachedDb);
  } else {
    const connection = mongoose.createConnection(MONGO_DB, { replset: { poolSize: 100 } });

    console.log('CREATED NEW CONNECTION: ', connection, '\nmongoose.connection.readyState: ', connection._readyState, '\nAll Connections:', connection.base);

    cachedDb = {
      connection,
      dbModels: {
        User: createUserModel(connection),
        Product: createProductModel(connection),
      },
    };
    console.log('\n\nCACHED Connection: \n\n', cachedDb.connection);
    resolve(cachedDb);
  }
});

export default verifyDb;
