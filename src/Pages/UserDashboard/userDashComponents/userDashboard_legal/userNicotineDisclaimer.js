import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserNicotineDiclaimer() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="nicotine--main">
      <div className="nicotine--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Nicotine Disclaimer"
        />
        <UserWelcomeMsg />
        <div className="nicotine__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Nicotine Disclaimer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
