/* eslint-disable no-use-before-define */
import db from '../connection';
import productSchema from '../schemas/productSchema';

productSchema.statics.createProduct = productObj =>
new Promise((resolve, reject) => {
  Product.create(productObj, (err, newProduct) => {
    // console.log('NEW PRODUCT: ', JSON.stringify(newProduct, null, 2));
    if (err) {
      console.log('ERROR: ', err);
      reject(err);
    };
    console.log('newProduct._id: ', newProduct._id);
    resolve(newProduct);
  })
  // .then((newProduct) => {
  //   console.log(JSON.stringify(newProduct, null, 2));
  //   resolve(newProduct);
  // })
  // .catch(error => reject({
  //   problem: `Could not create a new product with this product object: ${JSON.stringify(productObj, null, 2)}
  //   Mongo Error = ${error}`,
  // }));
});

productSchema.statics.getPopularProducts = ({ qty }) =>
new Promise((resolve, reject) => {
  Product.find({})
  .then(dbProducts => resolve(dbProducts.slice(0, qty)))
  .catch(error => reject({
    problem: `Could not fetch the ${qty} products you requested.
    Mongo Error = ${error}`,
  }));
});
const Product = db.model('Product', productSchema);
export default Product;