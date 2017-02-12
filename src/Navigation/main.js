import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

/* NOTE:
1. Remove UUID hard code.

*/
import Splash from '../Pages/Splash/splash';
import AgeVerification from '../Pages/Legal/ageVerification';
import SingleProduct from '../Pages/Products/singleProduct';
import Cart from '../Pages/Cart/cart';
import EmptyCart from '../Pages/Cart/EmptyCart/emptyCart';
import ExpressCheckout from '../Pages/ExpressCheckout/expressCheckout';
import Login from '../Pages/Auth/Login/login';
import Register from '../Pages/Auth/Register/register';
import Forgot from '../Pages/Auth/Forgot/forgot';
import UserDashboard from '../Pages/UserDashboard/userDashboard';
import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';
import About from '../Pages/Legal/about';
import ContactUs from '../Pages/Legal/contactUs';
import Faqs from '../Pages/Legal/faqs';
import MissionStatement from '../Pages/Legal/missionStatement';
import SocialMedia from '../Pages/Legal/socialMedia';
import NicotineDisclaimer from '../Pages/Legal/nicotineDisclaimer';
import ShippingReturns from '../Pages/Legal/shippingReturnPolicy';
import TermsConditions from '../Pages/Legal/termsConditions';
import Wholesale from '../Pages/Legal/wholesale';
import Affiliates from '../Pages/Legal/affiliateProgram';


export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Splash} />
    {/* User Experience */}
    <Router path={'/welcome'} component={AgeVerification} />
    <Router path={'/product/:id'} component={SingleProduct} />
    <Router path={'/cart'} component={Cart} />
    <Router path={'/empty'} component={EmptyCart} />
    <Router path={'/checkout'} component={ExpressCheckout} />
    {/* AUTH */}
    <Router path={'/login'} component={Login} />
    <Router path={'/register'} component={Register} />
    <Router path={'/forgot'} component={Forgot} />
    {/* DASHBOARDS */}
    <Router path={'/user/:id'} component={UserDashboard} />
    <Router path={'/admin/:id'} component={AdminDashboard} />
    {/* LEGAL */}
    <Router path={'/about'} component={About} />
    <Router path={'/contact'} component={ContactUs} />
    <Router path={'/faqs'} component={Faqs} />
    <Router path={'/mission_statement'} component={MissionStatement} />
    <Router path={'/social_media'} component={SocialMedia} />
    <Router path={'/nicotine_disclaimer'} component={NicotineDisclaimer} />
    <Router path={'/shipping_return'} component={ShippingReturns} />
    <Router path={'/terms_and_conditions'} component={TermsConditions} />
    <Router path={'/wholsesale'} component={Wholesale} />
    <Router path={'/affiliates'} component={Affiliates} />
  </Route>
);
