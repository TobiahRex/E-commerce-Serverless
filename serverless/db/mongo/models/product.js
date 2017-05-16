/* eslint-disable no-use-before-define */
import { Promise as bbPromise } from 'bluebird';
import db from '../connection';
import productSchema from '../schemas/productSchema';

productSchema.statics.createProduct = productObj =>
new Promise((resolve, reject) => {
  bbPromise.fromCallback(cb => Product.create(productObj, cb))
  .then(resolve)
  .catch(error => reject({
    problem: `Could not create a new product with this product object: ${JSON.stringify(productObj, null, 2)}
    Mongoose Error = ${error}`,
  }));
});
productSchema.statics.findProductById = ({ id }) =>
new Promise((resolve, reject) => {
  Product.findById(id)
  .exec()
  .then(resolve)
  .catch(error => reject({
    problem: `Could not find the product with id ${id}.  Are you sure that product exists?
    Mongo Error = ${error}`,
  }));
});
productSchema.statics.findProductAndUpdate = ({ id, newProduct }) =>
new Promise((resolve, reject) => {
  const $setOptions = {
    $set: {
      product: newProduct,
    },
  };
  Product.findByIdAndUpdate(id, $setOptions, { new: true })
  .exec()
  .then(resolve)
  .catch(error => reject({
    problem: `Could not find the product with id ${id}. Are you sure that product exists?
    Mongo Error = ${error}`,
  }));
});
productSchema.statics.getPopularProducts = ({ qty }) =>
new Promise((resolve, reject) => {
  Product.find({})
  .exec()
  .then(dbProducts => resolve(dbProducts.slice(0, qty)))
  .catch(error => reject({
    problem: `Could not fetch the ${qty} products you requested.
    Mongo Error = ${error}`,
  }));
});

const Product = db.model('Product', productSchema);
export default Product;
