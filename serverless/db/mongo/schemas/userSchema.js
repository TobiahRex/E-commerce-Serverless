const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
  error: {
    hard: {
      type: Boolean,
      default: false,
    },
    soft: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  name: {
    first: { type: String },
    last: { type: String },
    display: { type: String },
  },
  pictures: {
    small: { type: String },
    large: { type: String },
    default: {
      type: String,
      default: '/images/default-user.png',
    },
  },
  authentication: {
    signedUp: { type: Date },
    password: { type: String },
    createdAt: { type: Date },
    totalLogins: { type: Number },
    logins: [{
      date: { type: Date, default: new Date() },
      device: { type: String, default: 'computer' },
    }],
    ageVerified: { type: Boolean, default: false },
    auth0Identities: [{
      provider: { type: String },
      user_id: { type: String },
      connection: { type: String },
      isSocial: { type: Boolean },
    }],
  },
  contactInfo: {
    email: { type: String },
    phone: { type: String },
    locale: { type: String },
    timezone: { type: Number },
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
      name: { type: String },
      link: { type: String },
    }],
  },
  shopping: {
    cart: [{
      qty: { type: Number },
      productId: [{ type: ObjectId, ref: 'Product' }],
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
  marketHero: {
    tags: [{
      name: { type: String },
      date: { type: Date },
    }],
  },
  socialProfileBlob: {
    line: { type: String },
    facebook: { type: String },
    google: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
  },
}, {
  bufferCommands: true,
});
export default userSchema;
