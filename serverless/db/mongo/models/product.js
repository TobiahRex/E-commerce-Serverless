import { db, closeDB } from '../connection';
import { productSchema } from '../schemas/productSchema';

const Product = db.model('Product', productSchema);
productSchema.statics.getPopularProducts = ({ qty }, context, cb) => {
  Product.find({})
  .then(dbProducts => cb(null, dbProducts.slice(0, qty)))
  .catch(err => cb({
    problem: `Could not fetch the ${qty} products you requested`,
    error: err,
  }, null));
};

export default Product;
