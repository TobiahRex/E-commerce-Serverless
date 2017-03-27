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
                </span>If you DELETE {'<App Name>'} access from your account, this will also delete your account information! {'\u00A0'}This is because you only have 1 app authorized. {'\u00A0'}If you want to avoid loosing your account information, please authorize another app by clicking the large “<FontAwesome name="plus" />” button below. {'\u00A0'}If you do not want to authorize another application, then we recommend you add an Email & Password as an additional login method by clicking <Link to="/user_123123123/manage_login">here</Link>.
              </p>
            </div>
            <div className="authorized-apps--container">
              <ul className="authorized-apps--list">
                <li className="list--app">
                  <div className="app__date">
                    {/* NOTE: The h4 is dynamically set.  */}
                    <h4>Instagram</h4>
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
              <button className="save-btn primary-flex-button sweep-right">
                Save Addresses
              </button>
            </div>
            <div>
              <button className="save-btn primary-flex-button-saving sweep-right">
                <FontAwesome name="refresh" spin />
                {'\u00A0'} Saving...
              </button>
            </div>
            <div>
              <button className="save-btn primary-flex-button-saved sweep-right">
                <span className="flex-parent-btn">
                  <FontAwesome name="check-circle" />
                  {'\u00A0'} Saved!
                </span>
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
