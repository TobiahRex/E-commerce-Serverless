import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import Homepage from '../containers/home/homePage';
import SingleProduct from '../containers/products/productComponents/products_singleProduct';
import AllProducts from '../containers/products/productComponents/products_allProducts';

const ProductRoutes = () => (
  <div>
    <Route path="juice/:id" component={SingleProduct} />
    <Route path="juices" component={AllProducts} />
  </div>
);

export default ProductRoutes;
