import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserNewsletter({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="newsletter--main">
      <div className="newsletter--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Newsletter Subscriptions"
        />
        <UserWelcomeMsg />
        <div className="newsletter__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Newsletter Subscriptions</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserNewsletter.propTypes = propTypes;
export default UserNewsletter;
