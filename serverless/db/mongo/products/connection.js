import mongoose from 'mongoose';

require('dotenv').load({ silent: true });

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
export default db;
