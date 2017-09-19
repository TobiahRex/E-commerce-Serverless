import React from 'react';
import { Route } from 'react-router';

const errorLoading = (error) => { throw new Error(`Code Split page loading failed: ${error.message}`); };
const loadRoute = cb => module => cb(null, module.default);

const ProductRoutes = () => (
  <div>
    <Route
      path="juice/:product"
      getComponent={(location, cb) => {
        import('../containers/products/components/singleProduct/container' /* webpackChunkName: "singleProduct" */)
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
