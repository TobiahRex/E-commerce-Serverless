import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumb from '../../../../components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';
import ReportGenerator from './adminDash_reports_web';
import AdminDashHeader from './adminDash_header_web';
import LoginMethods from './adminDash_loginMethods';
import ContactInfo from './adminDash_contactInfo';
import WebTraffic from './adminDash_webTraffic_web';
import LatestOrders from './adminDash_latestOrders_web';
import AwsStats from './adminDash_awsStats_web';

const { objectOf, any } = PropTypes;
const propTypes = {
  location: objectOf(any).isRequired,
};

function AdminHomeDash({ location }) {
  return (
    <div className="admin-dash--main">
      <div className="admin-dash--container">
        <BreadCrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', location.pathname]}
          lastCrumb="Home Dashboard"
        />
        <AdminWelcomeMsg />
        <div className="admin-dash__body">
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Admin Dashboard</h1>
              </div>
              <AdminDashHeader />

              <LoginMethods.Web />

              <ContactInfo.Web />

              <ReportGenerator />

              <WebTraffic />

              <LatestOrders />

              <AwsStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminHomeDash.propTypes = propTypes;
export default AdminHomeDash;
