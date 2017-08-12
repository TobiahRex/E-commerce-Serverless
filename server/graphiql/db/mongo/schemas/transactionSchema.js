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
  user: { type: ObjectId, ref: 'User' },
  products: [{
    id: { type: ObjectId, ref: 'Product' },
    qty: { type: Number, required: true },
  }],
  discount: {
    qty: { type: Boolean, default: false },
    qtyAmount: { type: String, default: '' },
    register: { type: Boolean, default: false },
    registerAmount: { type: String, default: '' },
  },
  subtotal: { type: String, required: true },
  tax: { type: String, required: true },
  grandTotal: { type: String, required: true },
  square: {
    billingInfo: {
      nameOnCard: { type: String, required: true },
      last4: { type: String },
      amount: { type: Number, required: true },
      email: { type: String, required: true },
    },
    locationId: { type: String, default: '' },
    transactionId: { type: String, default: '' },
    cardNonce: { type: String, default: '' },
  },
  sagawa: { type: ObjectId, ref: 'Sagawa' },
  marketHero: { type: ObjectId, ref: 'MarketHero' },
  invoiceEmail: { type: ObjectId, ref: 'Email' },
});
export default transactionSchema;
