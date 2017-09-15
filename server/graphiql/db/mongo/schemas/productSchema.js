const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const productSchema = new Schema({
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
      en: {
        type: String,
        default: '',
      },
      ja: {
        type: String,
        default: '',
      },
    },
  },
  product: {
    mainTitle: {
      en: {
        type: String,
        required: true,
      },
      ja: {
        type: String,
        required: true,
      },
    },
    title: {
      en: {
        type: String,
        required: true,
      },
      ja: {
        type: String,
        required: true,
      },
    },
    flavor: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: 30,
    },
    sku: {
      type: String,
      required: true,
    },
    upc: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      enum: [30, 60, 120],
      required: true,
    },
    nicotineStrength: {
      type: Number,
      enum: [0, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
      required: true,
    },
    images: [{
      purpose: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }],
    slug: {
      type: String,
      required: true,
    },
    vendor: {
      en: {
        type: String,
        required: true,
      },
      ja: {
        type: String,
        required: true,
      },
    },
    blurb: {
      en: {
        type: String,
        required: true,
      },
      ja: {
        type: String,
        required: true,
      },
    },
    dates: {
      addedToStore: {
        type: Date,
        default: Date.now,
      },
      removedFromStore: {
        type: Date,
      },
    },
    quantities: {
      available: { type: Number, default: 500 },
      inCarts: { type: Number, default: 0 },
      purchased: { type: Number, default: 0 },
    },
  },
  reviews: [{
    reviewsId: { type: ObjectId, ref: 'Reviews' },
    userId: { type: ObjectId, ref: 'User' },
  }],
  distribution: {
    restockThreshold: {
      type: Number,
      default: 500,
    },
    restockAmount: {
      type: Number,
      default: 500,
    },
    lastReplenishment: [{
      date: {
        type: Date,
      },
      amount: {
        type: Number,
        default: 500,
      },
    }],
    wholesalePrice: { type: Number },
  },
  statistics: {
    addsToCart: { type: Number, default: 0 },
    completedCheckouts: { type: Number, default: 0 },
    transactions: [{
      transactionId: { type: ObjectId, ref: 'Transaction' },
      userId: { type: ObjectId, ref: 'User' },
    }],
  },
}, {
  bufferCommands: true,
});
export default productSchema;
