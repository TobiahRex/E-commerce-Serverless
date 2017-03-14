import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserManageLogin({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="manage-login--main">
      <div className="manage-login--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <UserWelcomeMsg />
        <div className="manage-login__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Manage Login</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserManageLogin.propTypes = propTypes;
export default UserManageLogin;
