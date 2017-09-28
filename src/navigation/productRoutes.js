import React from 'react';
import { Route } from 'react-router';

import Juice from '../containers/products/components/singleProduct/container';
import Juices from '../containers/products/components/allProducts';

const ProductRoutes = () => (
  <div>
    <Route
      path="juice/:product"
      component={Juice}
    />
    <Route
      path="juices"
      component={Juices}
    />
  </div>
);

export default ProductRoutes;
