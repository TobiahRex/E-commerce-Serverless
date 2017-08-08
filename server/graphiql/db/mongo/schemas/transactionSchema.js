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
  }],
  subtotal: { type: String, required: true },
  tax: { type: String, required: true },
  grandTotal: { type: String, required: true },
  sagawaShipping: {
    trackingNumber: { type: Number, default: '' },
    address: {
      boxid: { type: String, required: true },
      shipdate: { type: Date, required: true },
      customerName: { type: String, required: true },
      postal: { type: Number, required: true },
      jpaddress1: { type: String, required: true },
      jpaddress2: { type: String },
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
  billingInfo: {
    nameOnCard: { type: String, required: true },
    last4: { type: String },
    email: { type: String, required: true },
  },
});
export default transactionSchema;
