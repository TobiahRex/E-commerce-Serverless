/* eslint-disable no-use-before-define */
import db from '../connection';
import productSchema from '../schemas/productSchema';

productSchema.statics.getPopularProducts = ({ qty }) =>
new Promise((resolve, reject) => {
  Product.find({})
  .then(dbProducts => resolve(dbProducts.slice(0, qty)))
  .catch(error => reject({
    error,
    problem: `Could not fetch the ${qty} products you requested`,
  }));
});
const Product = db.model('Product', productSchema);
export default Product;
