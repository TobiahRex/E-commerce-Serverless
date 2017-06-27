/* eslint-disable no-console, no-constant-condition, no-unused-vars */
import mongoose from 'mongoose';
import createProductModel from './models/product';
import createUserModel from './models/user';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const MONGO_DB = process.env.MONGO_URI;

if (!MONGO_DB) throw new Error(`MONGO_DB URI value is: ${MONGO_DB.length ? MONGO_DB : 'undefined'}`);

let cachedDb = {
  db: null,
  dbModels: {
    Product: null,
    User: null,
  },
};

const verifyDb = () =>
new Promise((resolve) => {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log(`
      Previous connection found!
      Current Connections: ${cachedDb.db.base.connections}
    `);
    resolve(cachedDb);
  } else {
    const newDb = mongoose.createConnection(MONGO_DB, console.log);
    console.log(`
      Created new Mongo Connection: ${JSON.stringify(newDb, null, 2)}
    `);
    cachedDb = {
      db: newDb,
      dbModels: {
        Product: createProductModel(newDb),
        User: createUserModel(newDb),
      },
    };
    resolve(cachedDb);
  }
});

export default verifyDb;
