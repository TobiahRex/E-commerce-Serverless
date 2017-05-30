/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import productSchema from '../schemas/productSchema';
import db from '../connection';

productSchema.statics.fetchMultiple = ids =>
new Promise((resolve, reject) => {
  Product.find({ _id: { $in: [...ids] } })
  .exec()
  .then((dbProducts) => {
    console.log('Found multiple Products.: ', ids);
    resolve(dbProducts);
  })
  .catch(error => reject(`
    problem: Could not fetch multiple products.
    Mongo Error = ${error}.
  `));
});

productSchema.statics.findProductByIdAndDelete = _id =>
new Promise((resolve, reject) => {
  Product.findByIdAndRemove(_id)
  .exec()
  .then(resolve)
  .catch(error => reject({
    problem: `Could not create a delete product with _id:${_id}.  Verify the id is valid.
    Mongoose Error = ${error}`,
  }));
});


productSchema.statics.createProduct = product =>
new Promise((resolve, reject) => {
  bbPromise.fromCallback(cb => Product.create({ product }, cb))
  .then((newProduct) => {
    console.log('\n//mongo/model/product.js\n @ createProduct RESOLVE\n', newProduct);
    resolve(newProduct);
  })
  .catch((error) => {
    reject({
      problem: `Could not create a new product with this product object: ${JSON.stringify({ product }, null, 2)}
      Mongoose Error = ${error}`,
    });
  });
});

productSchema.statics.findProductById = _id =>
new Promise((resolve, reject) => {
  Product.findById(_id)
  .exec()
  .then((dbProduct) => {
    console.log('\n//mongo/model/product.js\n @ findProductById RESOLVE\n', dbProduct);
    resolve(dbProduct);
  })
  .catch((error) => {
    reject({
      problem: `Could not find the product with id ${_id}.  Are you sure that product exists?
      Mongo Error = ${error}`,
    });
  });
});

productSchema.statics.findProductAndUpdate = (_id, productObj) =>
new Promise((resolve, reject) => {
  const newProductObj = {};
  Object.keys(productObj)
  .map((key) => {
    if (key === 'images') {
      const imageKeys = [];
      const imageObjs = [];
      productObj.images.forEach((imageObj, i) => {
        imageKeys.push(`product.images[${i}]`);
        imageObjs.push(imageObj);
      });
      return imageKeys.map((newKey, i) => ({
        [newKey]: imageObjs[i],
      }));
    }
    const newKey = `product.${key}`;
    const value = productObj[key];
    return ({
      [newKey]: value,
    });
  })
  .forEach((object) => {
    const key = Object.keys(object)[0];
    newProductObj[key] = object[key];
  });

  console.log('\nnewProductObj: ', newProductObj);

  Product.findByIdAndUpdate(_id, { $set: newProductObj }, { new: true })
  .exec()
  .then((updatedProduct) => {
    console.log(`
      Updated Product!: ${_id};
      `);
    resolve(updatedProduct);
  })
  .catch(error => reject({
    problem: `Could not find the product with id ${_id}. Are you sure that product exists?
    Mongo Error = ${error}`,
  }));
});

productSchema.statics.getPopularProducts = qty =>
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
