import React from 'react';
import { Route, Switch } from 'react-router';
// --------------------------- User
import UserDashboard from '../Pages/UserDashboard/userDashComponents/userDashboard';
import UserHomeDash from '../Pages/UserDashboard/userDashComponents/userDashboard_home/userHomeDash';
import UserAddressBook from '../Pages/UserDashboard/userDashComponents/userDashboard_addressBook/userAddressBook';
import UserManageLogin from '../Pages/UserDashboard/userDashComponents/userDashboard_manageLogin/userManageLogin';
import UserNewsLetter from '../Pages/UserDashboard/userDashComponents/userDashboard_newsletter/userNewsLetter';
import UserProductReviews from '../Pages/UserDashboard/userDashComponents/userDashboard_productReviews/userProductReviews';
import UserLoginApp from '../Pages/UserDashboard/userDashComponents/userDashboard_loginApp/userLoginApp';
import UserOrders from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrders';
import UserOrderTracking from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrderTracking';
import UserLegal from '../Pages/UserDashboard/userDashComponents/userDashboard_legal/userLegal';

const UserDashboardRoutes = () => (
  <Switch>
    <Route
      path="/user_:id"
      component={UserDashboard}
    />
    <Route
      path="/user_id:/home_dashboard"
      component={UserHomeDash}
    />
    <Route
      path="/user_id:/address_book"
      component={UserAddressBook}
    />
    {/* Orders */}
    <Route
      path="/user_id:/orders"
      component={UserOrders}
    />
    <Route
      path="/user_id:/order_:orderid/tracking_:trackingid"
      component={UserOrderTracking}
    />
    <Route
      path="/user_id:/product_reviews"
      component={UserProductReviews}
    />
    <Route
      path="/user_id:/login_apps"
      component={UserLoginApp}
    />
    <Route
      path="/user_id:/newsletter"
      component={UserNewsLetter}
    />
    <Route
      path="/user_id:/terms_and_conditions"
      component={UserLegal.TermsConditions}
    />
    <Route
      path="/user_id:/privacy_policy"
      component={UserLegal.PrivacyPolicy}
    />
    <Route
      path="/user_id:/shipping_policy"
      component={UserLegal.ShippingPolicy}
    />
    <Route
      path="/user_id:/return_policy"
      component={UserLegal.ReturnPolicy}
    />
    <Route
      path="/user_id:/nicotine_disclaimer"
      component={UserLegal.NicotineDisclaimer}
    />
    <Route path="/user_id:/manage_login" component={UserManageLogin} />
  </Switch>
);

export default UserDashboardRoutes;
