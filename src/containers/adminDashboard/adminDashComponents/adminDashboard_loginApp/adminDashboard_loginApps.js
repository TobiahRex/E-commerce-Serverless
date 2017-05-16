import React from 'react';
import Breadcrumb from '../../../../components/breadcrumbs';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

import LoginAppsWeb from './adminDashboard_loginApps_web';
// import LoginAppsMobile from './adminDashboard_loginApps_mobile';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function AdminLoginApp({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="login-app--main">
      <div className="login-app--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Login Apps"
        />
        <AdminWelcomeMsg />
        <LoginAppsWeb />
        {/* <LoginAppsMobile /> */}
      </div>
    </div>
  );
}
AdminLoginApp.propTypes = propTypes;
export default AdminLoginApp;
