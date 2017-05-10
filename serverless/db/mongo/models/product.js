/* eslint-disable no-use-before-define */
import db from '../connection';
import productSchema from '../schemas/productSchema';

productSchema.statics.getPopularProducts = ({ qty }, cb) => {
  console.log('\nInside getPopularProducts\n')
  Product.find({})
  .then(dbProducts => cb(null, dbProducts.slice(0, qty)))
  .catch(err => cb({
    problem: `Could not fetch the ${qty} products you requested`,
    error: err,
  }));
};
const Product = db.model('Product', productSchema);
console.log('Product Model: ', Product);
export default Product;
