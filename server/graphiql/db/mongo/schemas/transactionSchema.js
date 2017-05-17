const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;
const transactionSchema = new Schema({
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
  distribution: {
    address: {
      boxid: { type: String, required: true },
      shipdate: { type: Date, required: true },
      kana: { type: String, required: true },
      productNameKana: { type: String, required: true },
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
export default transactionSchema;
