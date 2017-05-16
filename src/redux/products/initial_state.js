const emptyProduct = {
  _id: '',
  product: {
    mainTitle: '',
    title: '',
    price: '',
    sku: '',
    sizes: [''],
    nicotine_strengths: [''],
    images: [
      {
        purpose: '',
        url: '',
      },
    ],
    routeTag: '',
    vendor: '',
    blurb: '',
    quantities: {
      available: 0,
      in_cart: 0,
    },
  },
  reviews: [{
    reviews_id: '',
    user_id: '',
  }],
};

export default {
  activeViewProduct: Object.assign({}, emptyProduct),
  popularProducts: [{ ...emptyProduct }],
  error: null,
};
