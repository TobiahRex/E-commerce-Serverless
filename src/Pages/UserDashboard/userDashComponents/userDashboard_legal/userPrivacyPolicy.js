import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserPrivacyPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="privacy-policy--main">
      <div className="privacy-policy--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Privacy Policy"
        />
        <UserWelcomeMsg />
        <div className="privacy-policy__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
