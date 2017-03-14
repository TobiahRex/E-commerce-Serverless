import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserTermsConditions() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="terms-conditions--main">
      <div className="terms-conditions--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Terms & Conditions"
        />
        <UserWelcomeMsg />
        <div className="terms-conditions__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Terms & Conditions</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
