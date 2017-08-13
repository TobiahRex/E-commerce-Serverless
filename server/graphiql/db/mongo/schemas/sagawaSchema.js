const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const sagawaSchema = new Schema({
  status: {
    type: String,
    enum: ['pending', 'uploaded'],
    default: 'pending',
  },
  postalInfo: {
    error: { type: String, default: '' },
    verified: { type: Boolean, default: false, required: true },
    postalCode: { type: String, required: true },
    jpAddress: { type: String, required: true },
  },
  shippingAddress: {
    awbId: { type: String },
    referenceId: { type: String },
    boxid: { type: String },
    shipdate: { type: Date },
    customerName: { type: String },
    postal: { type: Number },
    jpaddress1: { type: String },
    jpaddress2: { type: String },
    phoneNumber: { type: Number },
    kbn: { type: String },
    wgt: { type: Number },
    grandTotal: { type: Number },
    deliveryDate: { type: String },
    deliveryTime: { type: Number },
    souryo: { type: Number, default: 0 },
    tesuryo: { type: Number, default: 0 },
    ttlAmount: { type: Number },
    codFlg: { type: Number, default: 0 },
  },
  item: {
    itemcd: { type: Number },
    itemname: { type: String },
    usage: { type: Number, default: 0 },
    origin: { type: String },
    piece: { type: Number },
    unitprice: { type: Number },
  },
}, {
  bufferCommands: true,
});
export default sagawaSchema;
