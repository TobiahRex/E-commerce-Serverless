import React from 'react';
import { Route } from 'react-router';

import SingleProduct from '../containers/products/components/products_singleProduct';
import AllProducts from '../containers/products/components/products_allProducts';

const ProductRoutes = () => (
  <div>
    <Route path="juice/:id" component={SingleProduct} />
    <Route path="juices" component={AllProducts} />
  </div>
);

export default ProductRoutes;
