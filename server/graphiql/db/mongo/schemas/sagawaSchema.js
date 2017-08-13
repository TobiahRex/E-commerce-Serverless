const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const sagawaSchema = new Schema({
  status: {
    type: String,
    enum: ['pending', 'uploaded'],
    default: 'pending',
  },
  shippingAddress: {
    awbId: { type: String, required: true },
    referenceId: { type: String, required: true },
    boxid: { type: String, required: true },
    shipdate: { type: Date, required: true },
    customerName: { type: String, required: true },
    postal: { type: Number, required: true },
    jpaddress1: { type: String, required: true },
    jpaddress2: { type: String },
    phoneNumber: { type: Number, required: true },
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
  item: {
    itemcd: { type: Number, required: true },
    itemname: { type: String, required: true },
    usage: { type: Number, default: 0 },
    origin: { type: String },
    piece: { type: Number, required: true, default: 1 },
    unitprice: { type: Number, required: true },
  },
}, {
  bufferCommands: true,
});
export default sagawaSchema;
