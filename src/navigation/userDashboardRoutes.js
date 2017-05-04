import React from 'react';
import { Route, IndexRoute } from 'react-router';
// --------------------------- User
import UserDashboard from '../containers/userDashboard/userDashComponents/userDashboard';
import UserHomeDash from '../containers/userDashboard/userDashComponents/userDashboard_home/userHomeDash';
import UserAddressBook from '../containers/userDashboard/userDashComponents/userDashboard_addressBook/userAddressBook';
import UserManageLogin from '../containers/userDashboard/userDashComponents/userDashboard_manageLogin/userManageLogin';
import UserNewsLetter from '../containers/userDashboard/userDashComponents/userDashboard_newsletter/userNewsLetter';
import UserProductReviews from '../containers/userDashboard/userDashComponents/userDashboard_productReviews/userProductReviews';
import UserLoginApp from '../containers/userDashboard/userDashComponents/userDashboard_loginApp/userDashboard_loginApps';
import UserOrders from '../containers/userDashboard/userDashComponents/userDashboard_orders/userOrders';
import UserOrderTracking from '../containers/userDashboard/userDashComponents/userDashboard_orders/userDashboard_orders_tracking';
import UserLegal from '../containers/userDashboard/userDashComponents/userDashboard_legal/userLegal';

import UserFaqs from '../containers/userDashboard/userDashComponents/userDashboard_legal/userFaqs';

const errorLoading = (error) => {
  throw new Error(`Dyanmic pag loading failed   ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

function UserDashboardRoutes(requireAuth) {
  return (
    <Route
      path="/user_dashboard"
      onEnter={requireAuth}
      getComponet={(location, cb) => {
        System.import('../containers/userDashboard/userDashComponents/userDashboard')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    >
      <IndexRoute
        getComponet={(location, cb) => {
          System.import('../containers/userDashboard/userDashComponents/userDashboard_home/userHomeDash')
          .then(loadRoute(cb))
          .catch(errorLoading);
        }}
      />
      <Route
        path="address_book"
        component={UserAddressBook}
        onEnter={requireAuth}
      />
      <Route
        path="orders"
        component={UserOrders}
        onEnter={requireAuth}
      />
      <Route
        path="order_:orderid/tracking_:trackingid"
        component={UserOrderTracking}
        onEnter={requireAuth}
      />
      <Route
        path="product_reviews"
        component={UserProductReviews}
        onEnter={requireAuth}
      />
      <Route
        path="login_apps"
        component={UserLoginApp}
        onEnter={requireAuth}
      />
      <Route
        path="newsletter"
        component={UserNewsLetter}
        onEnter={requireAuth}
      />
      <Route
        path="terms_and_conditions"
        component={UserLegal.TermsConditions}
        onEnter={requireAuth}
      />
      <Route
        path="privacy_policy"
        component={UserLegal.PrivacyPolicy}
        onEnter={requireAuth}
      />
      <Route
        path="shipping_policy"
        component={UserLegal.ShippingPolicy}
        onEnter={requireAuth}
      />
      <Route
        path="return_policy"
        component={UserLegal.ReturnPolicy}
        onEnter={requireAuth}
      />
      <Route
        path="nicotine_disclaimer"
        component={UserLegal.NicotineDisclaimer}
        onEnter={requireAuth}
      />
      <Route
        path="manage_login"
        component={UserManageLogin}
        onEnter={requireAuth}
      />
      <Route path="faqs" component={UserFaqs} />
    </Route>
  );
}

export default UserDashboardRoutes;
