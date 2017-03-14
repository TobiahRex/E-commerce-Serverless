import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserShippingPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="shipping-policy--main">
      <div className="shipping-policy--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Shipping Policy"
        />
        <UserWelcomeMsg />
        <div className="shipping-policy__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Shipping Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
