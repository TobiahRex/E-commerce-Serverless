const Schema = require('mongoose').Schema;
const ObjectId = Schema.Types.ObjectId;
const productSchema = new Schema({
  juice: {
    mainTitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    flavor: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: '30',
    },
    sku: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      enum: ['30', '60', '120'],
      required: true,
    },
    nicotine_strengths: {
      type: Number,
      enum: [2, 4, 6, 8, 12, 14, 16, 18],
      required: true,
    },
    images: [
      {
        purpose: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    routeTag: {
      type: String,
      required: true,
    },
    vendor: { type: String },
    dates: {
      added_to_store: {
        type: Date,
        default: Date.now,
        required: true,
      },
      removed_from_store: {
        type: Date,
        default: Date.now,
        required: true,
      },
    },
    quantities: {
      available: { type: Number },
      in_cart: { type: Number },
    },
  },
  reviews: [{
    reviews_id: { type: ObjectId, ref: 'Reviews' },
    user_id: { type: ObjectId, ref: 'User' },
  }],
  distribution: {
    restock_threshold: {
      type: Number,
      default: 500,
    },
    restock_amount: {
      type: Number,
      default: 500,
    },
    last_replenishment: [{
      date: {
        type: Date,
      },
      amount: {
        type: Number,
        default: 500,
      },
    }],
    wholesale_price: { type: Number },
  },
  statistics: {
    adds_to_cart: { type: Number },
    completed_checkouts: { type: Number },
    transactions: [{
      transaction_id: { type: ObjectId, ref: 'Transaction' },
      user_id: { type: ObjectId, ref: 'User' },
    }],
  },
});
export default productSchema;
