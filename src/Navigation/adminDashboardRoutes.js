import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AdminDashboard from '../Pages/AdminDashboard/adminDashComponents/adminDashboard';
import AdminHomeDash from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_home/adminHomeDash';
import AdminLegal from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_legal/adminLegal';

const AdminDashboardRoutes = () => (
  <Route path="/admin_:id" component={AdminDashboard}>
    <IndexRoute component={AdminHomeDash} />
    {/* <Route
      path="address_book"
      component={AdminAddressBook}
      />
      <Route
      path="reports"
      component={AdminReports}
      />
      <Route
      path="sales"
      component={AdminSales}
      />
      <Route
      path="products"
      component={AdminProducts}
      />
      <Route
      path="members"
      component={AdminMembers}
      />
      <Route
      path="promotions_sales"
      component={AdminPromotions}
    /> */}
    <Route
      path="terms_and_conditions"
      component={AdminLegal.TermsConditions}
    />
    <Route
      path="privacy_policy"
      component={AdminLegal.PrivacyPolicy}
    />
    <Route
      path="shipping_policy"
      component={AdminLegal.ShippingPolicy}
    />
    <Route
      path="return_policy"
      component={AdminLegal.ReturnPolicy}
    />
    <Route
      path="nicotine_disclaimer"
      component={AdminLegal.NicotineDisclaimer}
    />
    <Route path="manage_login" component={AdminManageLogin} />
    <Route path="faqs" component={AdminFaqs} />
  </Route>
);

export default AdminDashboardRoutes;
