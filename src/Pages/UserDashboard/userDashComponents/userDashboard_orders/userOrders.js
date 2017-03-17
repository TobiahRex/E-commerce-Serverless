import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
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
                <h3>Your Order</h3>
              </div>

              <div className="dashboard__tabs">
                <div className="tabs--completed-orders">
                  <p>Completed Orders</p>
                </div>
                <div className="tabs--open-orders">
                  <p>Open Orders</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
UserOrders.propTypes = propTypes;
export default UserOrders;
