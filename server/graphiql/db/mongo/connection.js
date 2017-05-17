/* eslint-disable no-console, no-constant-condition */
import mongoose from 'mongoose';

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
mongoose.connect(MONGO_DB, options, (err) => {
  console.log(err || `MONGO connected @ ${MONGO_DB}`);
});
