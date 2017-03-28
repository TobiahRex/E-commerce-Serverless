import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import BreadCrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';
import ReportGenerator from './adminDash_reports_web';
import AdminDashHeader from './adminDash_header_web';
import WebTraffic from './adminDash_webTraffic_web';
import LatestOrders from './adminDash_latestOrders_web';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
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
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Admin Dashboard</h1>
              </div>
              <AdminDashHeader />

              <ReportGenerator />

              <WebTraffic />

              <LatestOrders />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminHomeDash.propTypes = propTypes;
export default AdminHomeDash;
