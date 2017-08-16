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
  comments: { type: String },
  termsAgreement: { type: Boolean },
  user: { type: ObjectId, ref: 'User' },
  products: [{
    _id: { type: ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
  }],
  sagawa: { type: ObjectId, ref: 'Sagawa' },
  marketHero: { type: ObjectId, ref: 'MarketHero' },
  invoiceEmail: { type: ObjectId, ref: 'Email' },
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
    billingAddress: {
      billingCountry: { type: String, required: true },
      billingPrefecture: { type: String, required: true },
      billingCity: { type: String, required: true },
    },
    cardInfo: {
      last4: { type: String, required: true },
      nameOnCard: { type: String, required: true },
      cardNonce: { type: String, default: '', required: true },
    },
    charge: {
      amount: { type: String, required: true },
      currency: { type: String, required: true },
    },
  },
});
export default transactionSchema;
