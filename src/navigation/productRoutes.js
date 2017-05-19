import React from 'react';
import { Route } from 'react-router';

import SingleProduct from '../containers/products/components/singleProduct/components/';
import AllProducts from '../containers/products/components/allProducts/';

const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed.
 ERROR: ${error}`);
};
const loadRoute = cb => module => {
  console.warn('hello @ Single Product react router');
  return cb(null, module.default)
};


const ProductRoutes = () => (
  <div>
    <Route
      path="juice/:product"
      component={SingleProduct}
      // getComponent={(location, cb) => {
      //   System.import('../containers/products/components/singleProduct/components/')
      //   .then(loadRoute(cb))
      //   .catch(errorLoading);
      // }}
    />
    <Route
      path="juices"
      component={AllProducts}
      // getComponent={(location, cb) => {
      //   System.import('../containers/products/components/allProducts/')
      //   .then(loadRoute(cb))
      //   .catch(errorLoading);
      // }}
    />
  </div>
);

export default ProductRoutes;
