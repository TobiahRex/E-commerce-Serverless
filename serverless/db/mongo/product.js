/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;
const ObjectId = mongoose.Schema.Types.ObjectId;
const productSchema = new mongoose.Schema({
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
productSchema.statics.getPopularProducts = ({ qty }, cb) => {
  console.log('3) statics.getPopularProducts: ', qty);
  Product.find({}, (err, results) => console.log('3.5) find({})', err || results));

  Product
  .find({})
  .sort({ 'statistics.completed_checkouts': -1 })
  .then(dbProducts => {
    console.log('4) %cdbProducts', 'background:red;', dbProducts);
    cb(null, dbProducts.slice(0, qty));
  })
  .catch(err => cb({
    problem: `Could not fetch the ${qty} products you requested`,
    error: err,
  }, null));
};
const Product = mongoose.model('Product', productSchema);
export default Product;
