/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;
const ObjectId = mongoose.schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
  name: {
    first: { type: String },
    last: { type: String },
    display: { type: String },
  },
  authentication: {
    lastLogin: { type: Date },
    signedUp: { type: Date },
    registered: { type: Date },
    password: { type: String },
    avatar: {
      type: String,
      default: 'https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/default-user.png',
    },
  },
  contactInfo: {
    email: { type: String },
    phone: { type: Number },
    location: {
      ipAddress: { type: String },
      lat: { type: String },
      long: { type: String },
      country: { type: String },
    },
  },
  transactions: {
    orders: [{
      type: { type: ObjectId, ref: 'Transaction' },
    }],
  },
  permissions: {
    role: {
      type: String,
      enum: [
        'user',
        'admin',
        'devAdmin',
        'wholeseller',
        'distributor',
      ],
      required: true,
    },
  },
  userStory: {
    age: { type: Number },
    birthday: { type: Date },
    bio: { type: String },
  },
  socialProfileBlob: {},
});

userSchema.statics.createUser = (args, cb) => {
  User.create({ ...args })
  .then(dbUser => cb(null, dbUser))
  .catch(cb);
};

const User = mongoose.model('User', userSchema);
export default User;
