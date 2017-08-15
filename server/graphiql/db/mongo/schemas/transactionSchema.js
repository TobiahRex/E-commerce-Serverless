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
  sagawa: { type: ObjectId, ref: 'Sagawa' },
  marketHero: { type: ObjectId, ref: 'MarketHero' },
  invoiceEmail: { type: ObjectId, ref: 'Email' },
  subtotal: { type: String, required: true },
  tax: {
    city: { type: Number, required: true },
    state: { type: Number, required: true },
    total: { type: String, required: true },
  },
  discount: {
    qty: { type: Boolean, default: false },
    qtyAmount: { type: String, default: '' },
    register: { type: Boolean, default: false },
    registerAmount: { type: String, default: '' },
  },
  grandTotal: { type: String, required: true },
  square: {
    locationId: { type: String, default: '' },
    transactionId: { type: String, default: '' },
    cardNonce: { type: String, default: '' },
    billingInfo: {
      nameOnCard: { type: String, required: true },
      last4: { type: String },
      amount: { type: Number, required: true },
    },
  },
});
export default transactionSchema;
