
import React from 'react';
import Breadcrumb from '../../../../components/breadcrumbs';
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
              <div className="legal__title">
                <h1>Shipping Policy</h1>
              </div>

              <div className="legal__body">
                <p>
                  PROCESSING AND SHIPPING
                  <br /><br />
                  Orders will be processed within 1-3 business days after your full payment has been received. Shipment time will be between 2-7 business days depending on your physical address. The total wait time after you place your order will be between 1-7 business days. Shipping time and cost vary depending on location, and product ordered.
                  <br /><br />
                  IN A HURRY?
                  <br /><br />
                  We offer priority handling and delivery on most items upon request. For special instructions, PLEASE ORDER BY PHONE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
