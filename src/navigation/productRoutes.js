import React from 'react';
import { Route } from 'react-router';

// import SingleProduct from '../containers/products/components/singleProduct/components/';
// import AllProducts from '../containers/products/components/allProducts/';
const errorLoading = (error) => {
  throw new Error(`Dyanmic pag loading failed   ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);


const ProductRoutes = () => (
  <div>
    <Route
      path="juice/:id"
      getComponent={(location, cb) => {
        System.import('../containers/products/components/singleProduct/components/')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="juices"
      getComponent={(location, cb) => {
        System.import('../containers/products/components/allProducts/')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default ProductRoutes;
