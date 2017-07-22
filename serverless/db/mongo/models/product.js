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

  /**
  * 1) Finds product by _id.
  * 2) Updates product with new productObj info.
  * 3) Saves changes.
  * 4) Resolves || Rejects with result.
  *
  * @param {string} _id  - Mongo _id.
  * @param {object} productObj  - Product details.
  *
  * @return {object} - Promise resolved with updated Product Document.
  */
  productSchema.statics.findProductAndUpdate = (_id, productObj) =>
  new Promise((resolve, reject) => {
    const newProductObj = {};

    /**
    * 1) Map over each key for "productObj"
    * 2a) If the current key is "images" then map over each image in nested loop.
    * 2b) For each image - create a location reference in dot notation, casted as a string, to be used later.
    * 2c) For each image - push the actual image object containing the "href" image addresses into a new array.
    * 2d) For each key generated in step 2b), return a new array, containing an object: The key of that new object is dynamically generated using the string-casted-dot-notation value created in step 2b.  The value of that key, is dynamically assigned from the "imageObjs" array using the same index as the "imageKeys" array.  The final result is a "zipped" array from 2 seperate arrays.
    * 3) If the current key is NOT "images" - then dynamically assign the key it's new value from the input argument "productObj".
    * 4) For each new object returned from iterating over the old product keys, dynamically assign the empty object "newObject" it's key value pairs.
    *
    * @param {string} _id  - Mongo _id.
    * @param {object} productObj  - Product details.
    *
    * @return {object} - Promise resolved with updated Product Document.
    */
    Object // 1)
    .keys(productObj)
    .map((key) => { // 2)
      if (key === 'images') {
        const imageKeys = [];
        const imageObjs = [];

        productObj.images.forEach((imageObj, i) => {
          imageKeys.push(`product.images[${i}]`);
          imageObjs.push(imageObj);
        });

        return imageKeys.map((newKey, i) => ({ [newKey]: imageObjs[i] }));
      } // else 3)
      const newKey = `product.${key}`;
      const value = productObj[key];
      return ({ [newKey]: value });
    }) // 4)
    .forEach((object) => {
      const key = Object.keys(object)[0];
      newProductObj[key] = object[key];
    });

    console.log('\nnewProductObj: ', newProductObj);

    Product.findByIdAndUpdate(_id, { $set: newProductObj }, { new: true })
    .exec()
    .then((updatedProduct) => {
      console.log(`Updated Product!: ${_id}.`);
      resolve(updatedProduct);
    })
    .catch((error) => {
      console.log(`Error while tring to update Product _id "${_id}".  ERROR = ${error}.`);
      reject(`Error while tring to update Product _id "${_id}".  ERROR = ${error}.`);
    });
  });

  /**
  * 1) Find popoular X number of popular products - popularity is based on the total number of completed purchases.
  * 2) Resolve || Reject with results.
  *
  * @param {number} qty  - Number of desired results.
  *
  * @return {object} - Promise resolved with found Product Document(s).
  */
  productSchema.statics.getPopularProducts = qty =>
  new Promise((resolve, reject) => {
    Product.aggregate([
      { $group: {
        _id: '$product.flavor',
        docId: { $first: '$_id' },
        title: { $first: '$product.title' },
        slug: { $first: '$product.slug' },
        images: { $first: '$product.images' },
        completedCheckouts: { $first: '$statistics.completed_checkouts' },
      } },
      { $sort: { completedCheckouts: -1 } },
      { $limit: qty },
    ])
    .exec()
    .then((dbProducts) => {
      console.log(`Found the following products: ${JSON.stringify(dbProducts, null, 2)}`);
      resolve(dbProducts);
    })
    .catch((error) => {
      console.log(`Error trying to find popular products. ERROR = ${error}.`);
      reject(`Error trying to find popular products. ERROR = ${error}.`);
    });
  });

  const Product = db.model('Product', productSchema);
  return Product;
};
