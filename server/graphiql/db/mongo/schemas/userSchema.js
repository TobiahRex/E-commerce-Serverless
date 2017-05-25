const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
  name: {
    first: { type: String },
    last: { type: String },
    display: { type: String },
  },
  picture: {
    small: { type: String },
    large: { type: String },
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
    locale: { type: String },
    email: { type: String },
    phone: { type: Number },
    location: {
      ipAddress: { type: String },
      lat: { type: String },
      long: { type: String },
      country: { type: String },
    },
    devices: [{
      hardware: { type: String },
      os: { type: String },
    }],
    socialNetworks: [{
      type: { type: String },
      link: { type: String },
    }],
  },
  shopping: {
    cart: [{
      qty: { type: Number },
      strength: { type: String },
      product: { type: ObjectId, ref: 'Product' },
    }],
    transactions: [{ type: ObjectId, ref: 'Transaction' }],
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
    gender: { type: String },
  },
  socialProfileBlob: {},
});
export default userSchema;
