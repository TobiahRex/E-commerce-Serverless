import mongoose from 'mongoose';

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
      store_added: {
        type: Date,
        default: Date.now,
        required: true,
      },
      store_removed: {
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
  distribution: {
    restock_threshold: {
      type: Number,
      default: 500,
    },
    restock_amount: {
      type: Number,
      default: 500,
    },
  },
  statistics: {
    addsToCart: {
      type: Number,
    },
  },
});

const Products = mongoose.model('Products', productSchema);
export default Products;
