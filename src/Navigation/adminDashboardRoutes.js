import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AdminDashboard from '../Pages/AdminDashboard/adminDashComponents/adminDashboard';
import AdminHomeDash from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_home/adminHomeDash';
import AdminLegal from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_legal/adminLegal';
import AdminFaqs from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_legal/adminFaqs';
import AdminManageLogin from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_manageLogin/adminManageLogin';
import AdminLoginApps from '../Pages/AdminDashboard/adminDashComponents/adminDashboard_loginApp/adminDashboard_loginApps';
import AdminReports from './../Pages/AdminDashboard/adminDashComponents/adminDashboard_reports/adminReports';
import AdminSales from './../Pages/AdminDashboard/adminDashComponents/adminDashboard_sales/adminSales';
import AdminTraffic from './../Pages/AdminDashboard/adminDashComponents/adminDashboard_traffic/adminTraffic';
import AdminProducts from './../Pages/AdminDashboard/adminDashComponents/adminDashboard_products/adminProducts';
import AdminMembers from './../Pages/AdminDashboard/adminDashComponents/adminDashboard_members/adminMembers';
import AdminPromotions from './../Pages/AdminDashboard/adminDashComponents/adminDashboard_promotionsSales/adminPromotionsSales';

const AdminDashboardRoutes = () => (
  <Route path="/admin_:id" component={AdminDashboard}>
    <IndexRoute component={AdminHomeDash} />
    <Route
      path="reports"
      component={AdminReports}
    />
    <Route
      path="sales"
      component={AdminSales}
    />
    <Route
      path="traffic"
      component={AdminTraffic}
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
      path="promotions"
      component={AdminPromotions}
    />
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
    <Route path="login_apps" component={AdminLoginApps} />
    <Route path="manage_login" component={AdminManageLogin} />
    <Route path="faqs" component={AdminFaqs} />
  </Route>
);

export default AdminDashboardRoutes;
