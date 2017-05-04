import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const transactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  products: [{
    id: { type: ObjectId, ref: 'Product' },
  }],
  subtotal: { type: String, required: true },
  taxRate: { type: String, required: true },
  grandTotal: { type: String, required: true },
  distribution: {
    address: {
      shipdate: { type: Date, required: true },
      kana: { type: String, required: true },
      postal: { type: Number, required: true },
      jpaddress1: { type: String, required: true },
      jpaddress2: { type: String, required: true },
      contel: { type: Number, required: true },
      kbn: { type: Number, required: true },
      wgt: { type: Number, required: true },
    },
    item: {
      itemcd: { type: Number, required: true },
      itemname: { type: String, required: true },
      usage: { type: Number, default: 0 },
      origin: { type: String },
      piece: { type: Number, required: true, default: 1 },
      unitprice: { type: Number, required: true },
    },
  },
});
