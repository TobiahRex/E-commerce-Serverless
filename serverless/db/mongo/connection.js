import mongoose from 'mongoose';
import Promise from 'bluebird';

require('dotenv').load({ silent: true });

mongoose.Promise = Promise;
const MONGO_DB = process.env.AWS_MONGO_URI_DEV;
const options = {
  server: {
    socketOptions: {
      keepAlive: 30000,
      connectTimeoutMS: 30000,
    },
  },
};
const db = mongoose.createConnection(MONGO_DB, options);

export const closeDB = (cb) => {
  db.close(() => cb());
};

export default db;
