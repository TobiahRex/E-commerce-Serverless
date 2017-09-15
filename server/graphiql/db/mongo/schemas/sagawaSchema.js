import mongoose from 'mongoose';

const deepPopulate = require('mongoose-deep-populate')(mongoose);

export const ObjectId = mongoose.Schema.Types.ObjectId;
const sagawaSchema = new mongoose.Schema({
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
  userId: { type: ObjectId, ref: 'User' },
  transactionId: { type: ObjectId, ref: 'Transaction' },
  uploadStatus: {
    en: {
      type: String,
      enum: ['pending', 'uploaded'],
      default: 'pending',
    },
    ja: {
      type: String,
      enum: ['保留中', '提出済み'],
      default: '保留中',
    },
  },
  shippingAddress: {
    awbId: { type: String },
    referenceId: { type: String },
    boxid: { type: String, required: true },
    shipdate: { type: String, required: true },
    customerName: { type: String, required: true },
    postal: { type: String, required: true },
    jpaddress1: { type: String, required: true },
    jpaddress2: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    kbn: { type: String, required: true },
    wgt: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
    deliveryDate: { type: String, required: true },
    deliveryTime: { type: Number, required: true },
    souryo: { type: Number, default: 0 },
    tesuryo: { type: Number, default: 0 },
    ttlAmount: { type: Number, required: true },
    codFlg: { type: Number, default: 0 },
  },
  items: [{
    productId: { type: ObjectId, ref: 'Product', required: true },
    itemcd: { type: String, required: true },
    itemname: { type: String, required: true },
    usage: { type: Number, default: 0 },
    origin: { type: String, required: true },
    piece: { type: Number, required: true },
    unitprice: { type: Number, required: true },
  }],
}, {
  bufferCommands: true,
});
sagawaSchema.plugin(deepPopulate);
export default sagawaSchema;
