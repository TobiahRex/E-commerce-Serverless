/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';
import createProductModel from './models/product';
import createUserModel from './models/user';

mongoose.Promise = Promise;
const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
const MONGO_DB = process.env.AWS_MONGO_URI_DEV;
const options = {
  server: {
    socketOptions: {
      keepAlive: 30000,
      connectTimeoutMS: 30000,
    },
  },
};
export const closeDB = (db, GraphQLResponse) =>
new Promise((resolve) => {
  db.close(() => {
    console.log('\n//mongo/connection.js @ CLOSE DB');
    console.log('\n//mongo/connection.js \ndb.connections AFTER close: ', JSON.stringify(db.connections, null, 2));
    resolve(GraphQLResponse);
  });
});

const mongooseConnection = () =>
new Promise((resolve) => {
  resolve(mongoose.createConnection(MONGO_DB, options));
});

export const startDB = () =>
new Promise((resolve) => {
  mongooseConnection()
  .then((newDB) => {
    console.log(`\nMongo Connected @ ${MONGO_DB}`);
    console.log('\n//connection.js @ mongooseConnection.newDB: ', newDB);
    const dbData = {
      db: newDB,
      dbModels: {
        Product: createProductModel(newDB),
        User: createUserModel(newDB),
      },
    };
    resolve(dbData);
  })
  .catch(error =>
    console.log(`\nCould not connect to Mongo DB.\nERROR: ${error}`),
  );
});
