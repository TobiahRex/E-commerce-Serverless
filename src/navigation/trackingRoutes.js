import React from 'react';
import { Route } from 'react-router';

const errorLoading = (error) => { throw new Error(`Code Split page loading failed: ${error.message}`); };
const loadRoute = cb => module => cb(null, module.default);

const ProductRoutes = () => (
  <div>
    <Route
      path="/tracking"
      getComponent={(location, cb) => {
        import('../containers/tracking'/* webpackChunkName: "tracking" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default ProductRoutes;
