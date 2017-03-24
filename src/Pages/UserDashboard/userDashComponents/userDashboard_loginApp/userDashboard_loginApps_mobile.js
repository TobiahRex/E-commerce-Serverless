import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import UserSideBar from '../userDashboard_sidebar/userSideBar';

const propTypes = { };

function UserLoginAppMobile() {
  return (
    <div className="login-app__body">
      <UserSideBar location={location} />
      <div className="body__dashboard">
        <div className="dashboard--container">
          <div className="dashboard--title">
            <h1>Your Login Apps</h1>
          </div>

          <div className="login-app--container">
            <div className="login-app__authorized-apps">
              <p>Authorized Apps</p>
              <h3>1</h3>
            </div>
            <div className="app-warning">
              <p className="app-warning--msg">
                <span className="bold-warning">
                  WARNING:{'\u00A0'}
                </span>If you DELETE {'<App Name>'} access from your account, this will also delete your account information.  This is because you only have 1 app with authorization to login on your behalf.  If you want to avoid loosing your account information, authorize another app access by clicking the “<FontAwesome name="plus" />” button on the button.  You can also add an Email & Password as a backup login method by clicking <Link to="/user_123123123/manage_login">here</Link>.
              </p>
            </div>
            <div className="authorized-apps--container">
              <ul className="authorized-apps--list">
                <li className="list--app">
                  <div className="app__date">
                    <p>Added {moment().format('LL')}</p>
                  </div>
                  <div className="app__icon instagram">
                    <FontAwesome name="instagram" />
                  </div>
                  <div className="app__delete">
                    <button className="medium-size-btn sweep-right">Delete App</button>
                  </div>
                </li>
                <li className="list--add-app">
                  <div className="add-app--container">
                    <button>
                      <FontAwesome name="plus" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="login-app__action-section--container">
            <div className="action-section__back-btn">
              <button className="back-btn primary-flex-button sweep-right">
                <span className="flex-parent-btn">
                  <FontAwesome name="angle-double-left" />
                  {'\u00A0'}
                  Back
                </span>
              </button>
            </div>


            <div className="action-section__save-btn">
              <button className="save-btn primary-button sweep-right">
                Save Addresses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserLoginAppMobile.propTypes = propTypes;
export default UserLoginAppMobile;
