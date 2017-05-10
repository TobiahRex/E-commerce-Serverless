/* eslint-disable no-use-before-define */
import db from '../connection';
import productSchema from '../schemas/productSchema';

productSchema.statics.getPopularProducts = ({ qty }) =>
new Promise((res, rej) => {
  Product.find({})
  .then(dbProducts => res(dbProducts.slice(0, qty)))
  .catch(error => rej({
    error,
    problem: `Could not fetch the ${qty} products you requested`,
  }));
});
const Product = db.model('Product', productSchema);
export default Product;
