import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserLoginApp({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="login-app--main">
      <div className="login-app--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Login Apps"
        />
        <UserWelcomeMsg />
        <div className="login-app__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h2>Your Login Apps</h2>
              </div>

              <div className="login-app--container">
                <div className="login-app__authorized-apps">
                  <p>Authorized Apps</p>
                  <h3></h3>
                </div>

                <ul className="authorized-apps--list">
                  <li className="list--app">
                    <div className="app--date">
                      Added {moment().format('LL')}
                    </div>
                    <div className="app--icon">
                      <FontAwesome name="facebook" />
                    </div>
                    <div className="app--delete">
                      <button className="medium-size-button sweep-right">Delete App</button>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserLoginApp.propTypes = propTypes;
export default UserLoginApp;
