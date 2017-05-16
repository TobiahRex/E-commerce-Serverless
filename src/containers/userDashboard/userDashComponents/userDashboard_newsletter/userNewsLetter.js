import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../../../components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
import NewsletterBody from './userNewsLetter_body';

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
              <NewsletterBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };
UserNewsletter.propTypes = propTypes;
export default UserNewsletter;
