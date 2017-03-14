import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
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
import Reviews from '../Pages/Media/reviews';
import UserStories from '../Pages/Media/userStories';
import VapeNews from '../Pages/Media/vapeNews';
import Faqs from '../Pages/Legal/faqs';
import MissionStatement from '../Pages/Legal/missionStatement';
import SocialMedia from '../Pages/Legal/socialMedia';
import Wholesale from '../Pages/Legal/wholesale';
import Affiliates from '../Pages/Legal/affiliateProgram';

// ----------------------------- Legal ------------------------------
import NicotineDisclaimer from '../Pages/Legal/nicotineDisclaimer';
import Shipping from '../Pages/Legal/shippingPolicy';
import Returns from '../Pages/Legal/returnsPolicy';
import PrivacyPolicy from '../Pages/Legal/privacyPolicy';
import TermsConditions from '../Pages/Legal/termsConditions';

// ----------------------------- Auth -------------------------------
import ResetPasswordEmail from '../Pages/Auth/ResetEmail/reset';
import Login from '../Pages/Auth/Login/login';
import Register from '../Pages/Auth/Register/register';
import Forgot from '../Pages/Auth/Forgot/forgot';

// ----------------------------- Shopping ---------------------------

import Homepage from '../Pages/Home/homePage';
import SingleProduct from '../Pages/Products/productComponents/products_singleProduct';
import AllProducts from '../Pages/Products/productComponents/products_allProducts';

// ----------------------------- Checkout ---------------------------
import Cart from '../Pages/Cart/cart';
import EmptyCart from '../Pages/Cart/EmptyCart/emptyCart';
import ExpressCheckout from '../Pages/ExpressCheckout/expressCheckout';
import OrderSuccess from '../Pages/ExpressCheckout/orderSuccess';

// --------------------------- Dashboards ---------------------------
// --------------------------- User
import UserDashboard from '../Pages/UserDashboard/userDashComponents/userDashboard';
import UserHomeDash from '../Pages/UserDashboard/userDashComponents/userDashboard_home/userHomeDash';
import UserOrderTracking from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrderTracking';
import UserAddressBook from '../Pages/UserDashboard/userDashComponents/userDashboard_addressBook/userAddressBook';
import UserManageLogin from '../Pages/UserDashboard/userDashComponents/userDashboard_manageLogin/userManageLogin';
import UserNewsLetter from '../Pages/UserDashboard/userDashComponents/userDashboard_newsletter/userNewsLetter';
import UserProductReviews from '../Pages/UserDashboard/userDashComponents/userDashboard_productReviews/userProductReviews';
import UserLoginApp from '../Pages/UserDashboard/userDashComponents/userDashboard_loginApp/userLoginApp';
import UserOrders from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrders';
import UserLegal from '../Pages/UserDashboard/userDashComponents/userDashboard_legal/userLegal';

// --------------------------- Admin
import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';


// ------------------------------------------------------------------
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    {/* MEDIA */}
    <Router path={'/about'} component={About} />
    <Router path={'/contact_us'} component={ContactUs} />
    <Router path={'/phone'} component={Phone} />
    <Router path={'/reviews'} component={Reviews} />
    <Router path={'/vape_news'} component={VapeNews} />
    <Router path={'/stories'} component={UserStories} />
    <Router path={'/social_media'} component={SocialMedia} />
    <Router path={'/mission_statement'} component={MissionStatement} />
    <Router path={'/faqs'} component={Faqs} />
    {/* LEGAL */}
    <Router path={'/nicotine_disclaimer'} component={NicotineDisclaimer} />
    <Router path={'/return_policy'} component={Returns} />
    <Router path={'/shipping_policy'} component={Shipping} />
    <Router path={'/privacy_policy'} component={PrivacyPolicy} />
    <Router path={'/terms_and_conditions'} component={TermsConditions} />
    <Router path={'/wholesale'} component={Wholesale} />
    <Router path={'/affiliate_program'} component={Affiliates} />
    {/* AUTH */}
    <Router path={'/login'} component={Login} />
    <Router path={'/register'} component={Register} />
    <Router path={'/forgot'} component={Forgot} />
    {/* User Experience */}
    <Router path={'/home'} component={Homepage} />
    <Router path={'/juice/:id'} component={SingleProduct} />
    <Router path={'/juices'} component={AllProducts} />
    <Router path={'/cart'} component={Cart} />
    <Router path={'/empty'} component={EmptyCart} />
    <Router path={'/express_checkout'} component={ExpressCheckout} />
    <Router path={'/not_found'} component={NotFound} />
    <Router path={'/reset_email'} component={ResetPasswordEmail} />
    <Router path={'/successfully_ordered'} component={OrderSuccess} />

    {/* -------------------- DASHBOARDS -------------------- */}
    {/* User Dashboard */}
    <Router
      path={'/user_:id/home_dashboard'}
      component={UserDashboard}
    />
    <Router
      path={'/user_:id'}
      component={UserDashboard}
    />
    <Router
      path={'/user_:id/address_book'}
      component={UserAddressBook}
    />
    <Router
      path={'/user_:id/manage_login'}
      component={UserManageLogin}
    />
    <Router
      path={'/user_:id/newsletter'}
      component={UserNewsLetter}
    />
    <Router
      path={'/user_:id/login_apps'}
      component={UserLoginApp}
    />
    <Router
      path={'/user_:id/product_reviews'}
      component={UserProductReviews}
    />
    <Router
      path={'/user_:id/orders'}
      component={UserOrders}
    />
    <Router
      path={'/user_:id/terms_and_conditions'}
      component={UserLegal.TermsConditions}
    />
    <Router
      path={'/user_:id/privacy_policy'}
      component={UserLegal.PrivacyPolicy}
    />
    <Router
      path={'/user_:id/shipping_policy'}
      component={UserLegal.ShippingPolicy}
    />
    <Router
      path={'/user_:id/return_policy'}
      component={UserLegal.ReturnPolicy}
    />
    <Router
      path={'/user_:id/nicotine_disclaimer'}
      component={UserLegal.NicotineDisclaimer}
    />
    <Router
      path={'/user_:id/order_:orderid/tracking_:trackingid'} component={UserOrderTracking}
    />

    {/* Admin Dashboard */}
    <Router path={'/admin/:id'} component={AdminDashboard} />
  </Route>
);
