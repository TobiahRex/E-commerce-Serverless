/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import productSchema from '../schemas/productSchema';

export default (db) => {
  /**
  * Locates all products with matching flavor.
  *
  * 1) Queries Products collection by input argument "flavor".
  * 2) Resolves || Rejects with result.
  *
  * @param {string} flavor - Product flavor.
  *
  * @return {object} - Promise resolved with array of matching Product docs.
  */
  productSchema.statics.findProductsByFlavor = flavor =>
  new Promise((resolve, reject) => {
    Product.find({ 'product.flavor': flavor })
    .exec()
    .then((dbProducts) => {
      console.log(`Found ${dbProducts.length} popular product(s) with Flavor: "${flavor}"!`);
      resolve(dbProducts);
    })
    .catch((error) => {
      console.log(`Error trying to find products by flavor "${flavor}". ERROR = ${error}`);
      reject(`Error trying to find products by flavor "${flavor}". ERROR = ${error}`);
    });
  });

  /**
  * Fetches multiple products by id.
  * 1) Finds procuts by Mongo _id.
  * 2) Resolves || Rejects with result.
  *
  * @param {array} ids - Array of Product Mongo _ids.
  *
  * @return {object} - Promise resolved with array of Product Documents.
  */
  productSchema.statics.fetchMultiple = ids =>
  new Promise((resolve, reject) => {
    if (!ids.length) {
      resolve([]);
    } else {
      Product.find({ _id: { $in: [...ids] } })
      .exec()
      .then((dbProducts) => {
        console.log('Found multiple Products.: ', dbProducts);
        resolve(dbProducts);
      })
      .catch((error) => {
        console.log(`Error qurying for multiple products with ids "${ids}". ERROR = ${error}`);
        reject(`Error qurying for multiple products with ids "${ids}". ERROR = ${error}`);
      });
    }
  });

  /**
  * 1) Removes product by id.
  * 2) Resolves || Rejects with result.
  *
  * @param {string} _id - Mongo _id of Product to delete.
  *
  * @return {object} - Promise resolved with deleted Product Document.
  */
  productSchema.statics.findProductByIdAndDelete = _id =>
  new Promise((resolve, reject) => {
    Product.findByIdAndRemove(_id)
    .exec()
    .then(resolve)
    .catch((error) => {
      console.log(`Error trying to delete product with id "${_id}".  ERROR = ${error}.`);
      reject(`Error trying to delete product with id "${_id}".  ERROR = ${error}.`);
    });
  });

  /**
  * 1) Creates new Product.
  * 2) Resolves || Rejects with result.
  *
  * @param {object} product  - Product details.
  * @param {object} statistics  - Product statistic details.
  *
  * @return {object} - Promise resolved with new Product Document.
  */
  productSchema.statics.createProduct = (product, statistics) =>
  new Promise((resolve, reject) => {
    bbPromise.fromCallback(cb => Product.create({ product, statistics }, cb))
    .then((newProduct) => {
      console.log(`Created new Product document. DOC = ${newProduct}`);
      resolve(newProduct);
    })
    .catch((error) => {
      console.log(`Error trying to create new product.  ERROR = ${error}`);
      reject(`Error trying to create new product.  ERROR = ${error}`);
    });
  });

  /**
  * 1) Finds product by Mongo _id.
  * 2) Resolves || Rejects with result.
  *
  * @param {string} _id  - Mongo _id.
  *
  * @return {object} - Promise resolved with found Product Document.
  */
  productSchema.statics.findProductById = _id =>
  new Promise((resolve, reject) => {
    Product.findById(_id)
    .exec()
    .then((dbProduct) => {
      console.log(`Found product.  DOC = ${dbProduct}`);
      resolve(dbProduct);
    })
    .catch((error) => {
      console.log(`Error trying to find product with id "${_id}".  ERROR = ${error}`);
      reject(`Error trying to find product with id "${_id}".  ERROR = ${error}`);
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
    Product.aggregate([
      { $group: {
        _id: '$product.flavor',
        docId: { $first: '$_id' },
        title: { $first: '$product.title' },
        routeTag: { $first: '$product.routeTag' },
        images: { $first: '$product.images' },
        completedCheckouts: { $first: '$statistics.completed_checkouts' },
      } },
      { $sort: { completedCheckouts: -1 } },
      { $limit: qty },
    ])
    .exec()
    .then((dbProducts) => {
      console.log(`
        Found the following products: ${JSON.stringify(dbProducts, null, 2)}
      `);
      resolve(dbProducts);
    })
    .catch(error => reject({
      problem: `Could not fetch the ${qty} products you requested.
      Mongo Error = ${error}`,
    }));
  });

  const Product = db.model('Product', productSchema);
  return Product;
};
