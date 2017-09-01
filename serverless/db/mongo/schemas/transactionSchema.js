const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;
const transactionSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  shippingStatus: {
    type: String,
    default: 'Packaging',
  },
  comments: { type: String },
  termsAgreement: { type: Boolean },
  user: { type: ObjectId, ref: 'User' },
  products: [{
    _id: { type: ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
  }],
  sagawa: { type: ObjectId, ref: 'Sagawa' },
  emailAddress: { type: String, default: '' },
  emailLanguage: {
    type: String,
    enum: ['english', 'japanese'],
    default: 'english',
  },
  invoiceEmailNoTracking: { type: String, default: '' },
  invoiceEmail: { type: String, default: '' },
  trackingLink: { type: String, default: '' },
  jpyFxRate: { type: String, required: true },
  taxes: {
    cityRate: { type: String, required: true },
    stateRate: { type: String, required: true },
    totalRate: { type: String, required: true },
  },
  total: {
    subTotal: { type: String, required: true },
    taxes: { type: String, required: true },
    grandTotal: { type: String, required: true },
    discount: {
      qty: { type: Boolean, default: false },
      qtyAmount: { type: String, default: '' },
      register: { type: Boolean, default: false },
      registerAmount: { type: String, default: '' },
    },
  },
  square: {
    locationId: { type: String, default: '' },
    transactionId: { type: String, default: '' },
    billingCountry: { type: String, required: true },
    shippingAddress: {
      shippingPrefecture: { type: String, required: true },
      shippingCity: { type: String, required: true },
    },
    cardInfo: {
      last4: { type: String, required: true },
      nameOnCard: { type: String, required: true },
      cardNonce: { type: String, default: '', required: true },
      postalCode: { type: String, default: '' },
    },
    charge: {
      amount: { type: String, required: true },
      currency: { type: String, required: true },
    },
  },
});
export default transactionSchema;
