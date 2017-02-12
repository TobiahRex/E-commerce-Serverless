import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

/* NOTE:
1. Remove UUID hard code.

*/
import Splash from './Pages/splash';
import AgeVerification from './Pages/ageVerification';
import SingleProduct from './Pages/Products/singleProduct';
import Cart from './Pages/cart';
import EmptyCart from './Pages/EmptyCart/emptyCart';
import ExpressCheckout from './Pages/expressCheckout';
import Login from './Pages/Login/login';
import Register from './Pages/'
import Forgot from './Pages/'
import UserDash from './Pages/'
import AdminDash from './Pages/'
import About from './Pages/'
import ContactUs from './Pages/'
import Faqs from './Pages/'
import MissionStatement from './Pages/'
import SocialMedia from './Pages/'
import NicotineDisclaimer from './Pages/'
import ShippingReturns from './Pages/'
import TermsConditions from './Pages/'
import Wholesale from './Pages/'
import Affiliates from './Pages/'


export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Splash} />
    {/* User Experience */}
    <Router path={"/welcome"} component={AgeVerification} />
    <Router path={"/product/:id"} component={SingleProduct} />
    <Router path={"/cart"} component={Cart} />
    <Router path={"/empty"} component={EmptyCart} />
    <Router path={"/checkout"} component={ExpressCheckout} />
    {/* AUTH */}
    <Router path={"/login"} component={Login} />
    <Router path={"/register"} component={Register} />
    <Router path={"/forgot"} component={Forgot} />
    {/* DASHBOARDS */}
    <Router path={"/user/:id"} component={UserDash} />
    <Router path={"/admin/:id"} component={AdminDash} />
    {/* LEGAL */}
    <Router path={"/about"} component={} />
    <Router path={"/contact"} component={} />
    <Router path={"/faqs"} component={} />
    <Router path={"/mission_statement"} component={} />
    <Router path={"/social_media"} component={} />
    <Router path={"/nicotine_disclaimer"} component={} />
    <Router path={"/shipping_return"} component={} />
    <Router path={"/terms_and_conditions"} component={} />
    <Router path={"/wholsesale"} component={} />
    <Router path={"/affiliates"} component={} />
  </Route>
);
