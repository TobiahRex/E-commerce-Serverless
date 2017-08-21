import React from 'react';
import { Route } from 'react-router';

const errorLoading = () => { throw new Error('Dyanmic page loading failed.'); };
const loadRoute = cb => module => cb(null, module.default);

const ProductRoutes = () => (
  <div>
    <Route
      path="juice/:product"
      getComponent={(location, cb) => {
        System.import('../containers/products/components/singleProduct/container')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="juices"
      getComponent={(location, cb) => {
        System.import('../containers/products/components/allProducts')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default ProductRoutes;
