import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';
// import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

/* NOTE:
1. Remove UUID hard code.

*/
// ----------------------------- Other ------------------------------
import App from '../App';
import NotFound from '../Pages/404/notFound404';
// ----------------------------- Media ------------------------------
import About from '../Pages/Legal/about';
import ContactUs from '../Pages/Legal/contactUs';
import Phone from '../Pages/Legal/phone';
import UserStories from '../Pages/Media/userStories';
import VapeNews from '../Pages/Media/vapeNews';
import Faqs from '../Pages/Legal/faqs';
import MissionStatement from '../Pages/Legal/missionStatement';
import SocialMedia from '../Pages/Legal/socialMedia';
import Wholesale from '../Pages/Legal/wholesale';
import Affiliates from '../Pages/Legal/affiliateProgram';

import {
  Legal,
  Auth,
  UserDashboard,
  Checkout,
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
    <Route path="about" component={About} />
    <Route path="contact_us" component={ContactUs} />
    <Route path="phone" component={Phone} />
    <Route path="vape_news" component={VapeNews} />
    <Route path="stories" component={UserStories} />
    <Route path="social_media" component={SocialMedia} />
    <Route path="mission_statement" component={MissionStatement} />
    <Route path="faqs" component={Faqs} />
    <Route path="wholesale" component={Wholesale} />
    <Route path="affiliate_program" component={Affiliates} />
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
