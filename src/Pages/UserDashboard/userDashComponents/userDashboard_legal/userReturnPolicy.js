import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserReturnPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="return-policy--main">
      <div className="return-policy--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Return Policy"
        />
        <UserWelcomeMsg />
        <div className="return-policy__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Return Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
