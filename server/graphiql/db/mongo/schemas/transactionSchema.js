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
  sagawa: {
    awbNumber: { type: String, default: '' },
    referenceNumber: { type: Number, defualt: '' },
    address: {
      boxId: { type: String, required: true },
      shipDate: { type: Date, required: true },
      customerName: { type: String, required: true },
      postal: { type: Number, required: true },
      jpAddress1: { type: String, required: true },
      jpAddress2: { type: String },
      phoneNumber: { type: Number, required: true },
      kbn: { type: Number, required: true },
      wgt: { type: Number },
      totalPrice: { type: Number, required: true },
      deliveryDate: { type: String },
      deliveryTime: { type: String },
      souryo: { type: Number, default: 0 },
      tesuryo: { type: Number, default: 0 },
      ttlAmount: { type: Number, required: true },
      codFlg: { type: Number, default: 0 },
    },
    item: {
      upcCode: { type: Number, required: true },
      itemName: { type: String, required: true },
      usage: { type: Number, default: 0 },
      origin: { type: String },
      piece: { type: Number, required: true, default: 1 },
      unitprice: { type: Number, required: true },
    },
  },
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
  marketHero: {
    leadUpdated: { type: Boolean, default: false },
    tags: [{
      name: { type: String, default: '' },
      purpose: { type: String, default: '' },
    }],
  },
  sesEmail: {
    sent: { type: Boolean, default: false },
    mailId: { type: String, default: '' },
    address: { type: String, default: '' },
  },
});
export default transactionSchema;
