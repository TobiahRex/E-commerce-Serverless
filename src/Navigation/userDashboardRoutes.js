import React from 'react';
import { Route, IndexRoute } from 'react-router';
// --------------------------- User
import UserDashboard from '../Pages/UserDashboard/userDashComponents/userDashboard';
import UserHomeDash from '../Pages/UserDashboard/userDashComponents/userDashboard_home/userHomeDash';
import UserAddressBook from '../Pages/UserDashboard/userDashComponents/userDashboard_addressBook/userAddressBook';
import UserManageLogin from '../Pages/UserDashboard/userDashComponents/userDashboard_manageLogin/userManageLogin';
import UserNewsLetter from '../Pages/UserDashboard/userDashComponents/userDashboard_newsletter/userNewsLetter';
import UserProductReviews from '../Pages/UserDashboard/userDashComponents/userDashboard_productReviews/userProductReviews';
import UserLoginApp from '../Pages/UserDashboard/userDashComponents/userDashboard_loginApp/userLoginApp';
import UserOrders from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrders';
import UserOrderTracking from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userDashboard_orders_tracking';
import UserLegal from '../Pages/UserDashboard/userDashComponents/userDashboard_legal/userLegal';

import UserFaqs from '../Pages/UserDashboard/userDashComponents/userDashboard_legal/userFaqs';

export default function UserDashboardRoutes() {
  return (
    <Route path="/user_:id" component={UserDashboard}>
      <IndexRoute component={UserHomeDash} />
      <Route
        path="address_book"
        component={UserAddressBook}
      />
      <Route
        path="orders"
        component={UserOrders}
      />
      <Route
        path="order_:orderid/tracking_:trackingid"
        component={UserOrderTracking}
      />
      <Route
        path="product_reviews"
        component={UserProductReviews}
      />
      <Route
        path="login_apps"
        component={UserLoginApp}
      />
      <Route
        path="newsletter"
        component={UserNewsLetter}
      />
      <Route
        path="terms_and_conditions"
        component={UserLegal.TermsConditions}
      />
      <Route
        path="privacy_policy"
        component={UserLegal.PrivacyPolicy}
      />
      <Route
        path="shipping_policy"
        component={UserLegal.ShippingPolicy}
      />
      <Route
        path="return_policy"
        component={UserLegal.ReturnPolicy}
      />
      <Route
        path="nicotine_disclaimer"
        component={UserLegal.NicotineDisclaimer}
      />
      <Route path="manage_login" component={UserManageLogin} />
      <Route path="faqs" component={UserFaqs} />
    </Route>
  );
}
