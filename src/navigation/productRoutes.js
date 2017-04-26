import React from 'react';
import { Route } from 'react-router';

import SingleProduct from '../containers/products/components/singleProduct/';
import AllProducts from '../containers/products/components/allProducts/';

const ProductRoutes = () => (
  <div>
    <Route path="juice/:id" component={SingleProduct} />
    <Route path="juices" component={AllProducts} />
  </div>
);

export default ProductRoutes;
