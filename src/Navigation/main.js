import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

/* NOTE:
1. Remove UUID hard code.

*/
// ----------------------------- Other ------------------------------
import App from '../App';
import NotFound from '../Pages/404/notFound404';
// ----------------------------- Media ------------------------------

import {
  Legal,
  Auth,
  UserDashboard,
  Checkout,
  Media,
} from './';

// ----------------------------- Shopping ---------------------------
import Homepage from '../Pages/Home/homePage';
import SingleProduct from '../Pages/Products/productComponents/products_singleProduct';
import AllProducts from '../Pages/Products/productComponents/products_allProducts';

// --------------------------- Admin
import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';

// ------------------------------------------------------------------
export default (
  <Route path="/" component={App}>
    <IndexRoute path="/" component={Homepage} />
    <Route path="home" component={Homepage} />
    {/* MEDIA */}
    <Media />
    <Legal />
    <Auth />
    <Checkout />
    <Route path="juice/id" component={SingleProduct} />
    <Route path="juices" component={AllProducts} />

    {/* -------------------- DASHBOARDS -------------------- */}
    <UserDashboard />
    <Route path="/admin_:id" component={AdminDashboard} />
    <Route component={NotFound} />
  </Route>
);
