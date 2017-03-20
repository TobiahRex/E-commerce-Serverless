import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
import OpenOrders from './userDashboard_orders_open';
import ClosedOrders from './userDashboard_orders_closed';
import OrderTracking from './userDashboard_orders_tracking';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function UserOrders({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="orders--main">
      <div className="orders--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Login Apps"
        />
        <UserWelcomeMsg />
        <div className="orders__body">
          <UserSideBar location={location} />

          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Your Order</h1>
              </div>

              <div className="dashboard__tabs">
                <button className="tabs--completed-orders sweep-right">
                  <p>Completed Orders</p>
                </button>
                <button className="tabs--open-orders sweep-right">
                  <p>Open Orders</p>
                </button>
                <button className="tabs--order-tracking sweep-right">
                  <p>Order Tracking</p>
                </button>
              </div>
              {/* <OpenOrders /> */}
              <OrderTracking />
              <ClosedOrders />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
UserOrders.propTypes = propTypes;
export default UserOrders;
