import React from 'react';
import BreadCrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserHomeDash() {
  return (
    <div className="user-home-dash--container">
      <BreadCrumb
        paths={['Home', 'Your Account']}
        classes={['home', 'your-account']}
        destination={['', location.pathname]}
        lastCrumb="Home Dashboard"
      />

      <UserWelcomeMsg />

      <div className="user-home-dash__body">
        <UserSideBar location={location} />

        <div className="body__dashboard">
          <div className="dashboard--container">
            <h2>Home Dashboard</h2>
          </div>
        </div>

      </div>
    </div>
  );
}
