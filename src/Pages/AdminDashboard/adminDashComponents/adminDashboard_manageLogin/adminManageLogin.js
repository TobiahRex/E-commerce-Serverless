import React, { PropTypes } from 'react';
import 'react-router';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminManageLogin({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="manage-login--main">
      <div className="manage-login--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="manage-login__body">
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="manage-login__title">
                <h1>Manage Login</h1>
              </div>

              <div className="manage-login__body">
                <div className="manage-login__header">
                  <p> From this page, you can edit your Username, reset your Password, or add another  form of login to your account.  We suggest you have 2 forms of loggin in to your account.
                  </p>
                </div>

                <div className="manage-login__methods--container">
                  <div className="methods__title">
                    <h3>Login Methods</h3>
                  </div>

                  <div className="methods--container">
                    <div className="methods__email-password">
                      <div className="email-password--container">
                        <div className="email-password--title">
                          <p>Email & Password</p>
                        </div>
                        <div className="email-password__input--username">
                          <label htmlFor="username">
                            <p>Username<span className="required"> *</span></p>
                          </label>
                          <input type="text" id="username" />
                        </div>
                        <div className="email-password__input--current-password">
                          <label htmlFor="current-password">
                            <p>Current Password<span className="required"> *</span></p>
                          </label>
                          <input type="password" id="current-password" />
                        </div>
                        <div className="email-password__input--new-password">
                          <label htmlFor="new-password">
                            <p>New Password<span className="required"> *</span></p>
                          </label>
                          <input type="password" id="new-password" />
                        </div>
                        <div className="email-password__input--confirm-new">
                          <label htmlFor="confirm-new">
                            <p>Confirm New Password<span className="required"> *</span></p>
                          </label>
                          <input type="password" id="confirm-new" />
                        </div>
                        <span className="email-password__footer-msg">
                          <p>Required *</p>
                        </span>
                      </div>
                    </div>

                    <div className="methods__social-login">
                      <div className="social-login--container">
                        <div className="social-login--title">
                          <p>Social Login</p>
                        </div>
                        <div className="social-login--options">
                          <div className="social-login--facebook">
                            <button type="text" id="facebook-checkbox">
                              <FontAwesome name="plus" className="social-login--ex-icon" />
                            </button>
                            <label htmlFor="facebook-checkbox">
                              <p>Facebook</p>
                            </label>
                          </div>
                          <div className="social-login--twitter">
                            <button type="text" id="twitter-checkbox">
                              <FontAwesome name="plus" className="social-login--ex-icon" />
                            </button>
                            <label htmlFor="twitter-checkbox">
                              <p>Twitter</p>
                            </label>
                          </div>
                          <div className="social-login--instagram">
                            <button type="text" id="instagram-checkbox">
                              <FontAwesome name="plus" className="social-login--ex-icon" />
                            </button>
                            <label htmlFor="instagram-checkbox">
                              <p>Instagram</p>
                            </label>
                          </div>
                          <div className="social-login--google">
                            <button type="text" id="google-checkbox">
                              <FontAwesome name="plus" className="social-login--ex-icon" />
                            </button>
                            <label htmlFor="google-checkbox">
                              <p>Google</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="newsletter__action-section--container">
                  <div className="action-section__back-btn">
                    <button className="back-btn primary-flex-button sweep-right">
                      <span className="flex-parent-btn">
                        <FontAwesome name="angle-double-left" />
                        {'\u00A0'}
                        Back
                      </span>
                    </button>
                  </div>

                  {/* NOTE: If the user has never created a password before, then this will inititate a first time Authorization request to 3rd party API. */}
                  <div className="action-section__save-btn">
                    <button className="save-btn primary-flex-button sweep-right">
                      Save Password
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
        </div>
      </div>
    </div>
  );
}
AdminManageLogin.propTypes = propTypes;
export default AdminManageLogin;
