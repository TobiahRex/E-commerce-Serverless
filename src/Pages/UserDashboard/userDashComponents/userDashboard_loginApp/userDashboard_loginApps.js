import React, { PropTypes } from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

import LoginAppsWeb from './userDashboard_loginApps_web';
import LoginAppsMobile from './userDashboard_loginApps_mobile';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserLoginApp({ location }) {
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
        <UserWelcomeMsg />
        {/* <LoginAppsWeb /> */}
        <LoginAppsMobile />
      </div>
    </div>
  );
}
UserLoginApp.propTypes = propTypes;
export default UserLoginApp;
