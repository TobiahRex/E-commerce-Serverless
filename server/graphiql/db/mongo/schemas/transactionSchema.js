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
  comments: { type: String },
  termsAgreement: { type: Boolean },
  user: { type: ObjectId, ref: 'User' },
  products: [{
    _id: { type: ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
  }],
  sagawa: { type: ObjectId, ref: 'Sagawa' },
  emailAddress: { type: String, default: '' },
  emailLanguage: {
    type: String,
    enum: ['english', 'japanese'],
    default: 'english',
  },
  invoiceEmailNoTracking: { type: String, default: '' },
  invoiceEmail: { type: String, default: '' },
  trackingLink: { type: String, default: '' },
  jpyFxRate: { type: String, required: true },
  taxes: {
    cityRate: { type: String, required: true },
    stateRate: { type: String, required: true },
    totalRate: { type: String, required: true },
  },
  total: {
    subTotal: { type: String, required: true },
    taxes: { type: String, required: true },
    grandTotal: { type: String, required: true },
    discount: {
      qty: { type: Boolean, default: false },
      qtyAmount: { type: String, default: '' },
      register: { type: Boolean, default: false },
      registerAmount: { type: String, default: '' },
    },
  },
  square: {
    idempotency_key: { type: String, default: '' },
    tender: {
      id: { type: String, default: '' },
      location_id: { type: String, default: '' },
      transaction_id: { type: String, default: '' },
      created_at: { type: String, default: '' },
      note: { type: String, default: '' },
      amount_money: {
        amount: { type: Number, default: 0 },
        currency: { type: String, default: '' },
      },
      type: { type: String, default: '' },
      card_details: {
        status: { type: String, default: '' },
        card: {
          card_brand: { type: String, default: '' },
          last_4: { type: String, default: '' },
          nameOnCard: { type: String, default: '' },
          cardNonce: { type: String, default: '' },
          postalCode: { type: String, default: '' },
        },
        entry_method: { type: String },
      },
    },
    billingCountry: { type: String, required: true },
    shippingAddress: {
      shippingPrefecture: { type: String, required: true },
      shippingCity: { type: String, required: true },
    },
    refund: {
      id: { type: String, default: '' },
      location_id: { type: String, default: '' },
      transaction_id: { type: String, default: '' },
      tender_id: { type: String, default: '' },
      created_at: { type: String, default: '' },
      reason: { type: String, default: '' },
      amount_money: {
        amount: { type: Number },
        currency: { type: String },
      },
      status: { type: String, default: '' },
    },
  },
});
export default transactionSchema;
