import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../../../components/breadcrumbs';
// import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
// import LoginAppsWeb from './userDashboard_loginApps_web';
import LoginAppsMobile from './userDashboard_loginApps_mobile';

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
const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };
UserLoginApp.propTypes = propTypes;
export default UserLoginApp;
