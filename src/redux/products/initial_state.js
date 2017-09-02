export const productType = {
  _id: '',
  product: {
    mainTitle: '',
    title: '',
    price: '',
    sku: '',
    sizes: [''],
    nicotineStrength: '',
    images: [
      {
        purpose: '',
        url: '',
      },
    ],
    slug: '',
    vendor: '',
    blurb: '',
    quantities: {
      available: 0,
      inCarts: 0,
      purchased: 0,
    },
  },
  reviews: [{
    reviews_id: '',
    user_id: '',
  }],
};

export default {
  // activeViewProduct: Object.assign({}, productType),
  popularProducts: [],
  // popularProducts: [{ ...productType }],
  error: null,
};
