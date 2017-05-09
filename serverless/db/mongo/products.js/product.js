/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;


productSchema.statics.getPopularProducts = ({ qty }, cb) => {
  Product.find({})
  .then(dbProducts => {
    console.log('4) dbProducts', dbProducts);
    cb(null, dbProducts.slice(0, qty));
  })
  .catch(err => cb({
    problem: `Could not fetch the ${qty} products you requested`,
    error: err,
  }, null));
};
const Product = mongoose.model('Product', productSchema);
export default Product;
