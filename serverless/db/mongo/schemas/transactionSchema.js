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
  sagawa: { type: ObjectId, ref: 'Sagawa' },
}, {
  bufferCommands: true,
});
export default transactionSchema;
