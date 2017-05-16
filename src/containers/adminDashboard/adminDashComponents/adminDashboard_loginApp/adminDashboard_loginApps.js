import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../../../components/breadcrumbs';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

import LoginAppsWeb from './adminDashboard_loginApps_web';
// import LoginAppsMobile from './adminDashboard_loginApps_mobile';

const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };

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
