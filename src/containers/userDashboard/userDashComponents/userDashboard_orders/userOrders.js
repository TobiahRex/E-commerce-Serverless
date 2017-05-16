import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../../../components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
import OpenOrders from './userDashboard_orders_open';
import ClosedOrders from './userDashboard_orders_closed';
import OrderTracking from './userDashboard_orders_tracking';
import InvoiceOrders from './userDashboard_orders_invoice';
import LoadingIcon from './userDashboard_orders_loadingIcon';

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
                <h1>Your Orders</h1>
              </div>

              <div className="dashboard__tabs">
                <button className="tabs--completed-orders sweep-right">
                  <p>Completed</p>
                </button>
                <button className="tabs--open-orders sweep-right">
                  <p>Open</p>
                </button>
                <button className="tabs--order-tracking sweep-right">
                  <p>Tracking</p>
                </button>
              </div>
              {/* <OpenOrders /> */}
              <OpenOrders.Mobile />
              <OrderTracking />
              {/* <ClosedOrders /> */}
              <ClosedOrders.Mobile />
              <InvoiceOrders />
              <LoadingIcon />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };
UserOrders.propTypes = propTypes;
export default UserOrders;
