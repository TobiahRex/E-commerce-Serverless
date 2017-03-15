import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import Homepage from '../Pages/Home/homePage';
import SingleProduct from '../Pages/Products/productComponents/products_singleProduct';
import AllProducts from '../Pages/Products/productComponents/products_allProducts';

const ProductRoutes = () => (
  <div>
    <Route path="home" component={Homepage} />
    <Route path="juice/:id" component={SingleProduct} />
    <Route path="juices" component={AllProducts} />
  </div>
);

export default ProductRoutes;
