import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  juice: {
    title: {
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
    },
  },
});

const Products = mongoose.model('Products', productSchema);
export default Products;
