import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import uuid from 'uuid';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';

const propTypes = { };

function UserLoginAppMobile() {
  return (
    <div className="login-app__body">
      <div className="body__sidebars">
        <AdminSideBar location={location} />
        <AdminSideBar.Sales location={location} />
        <AdminSideBar.Members location={location} />
      </div>
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
                    <p>Added {new Date()}</p>
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
          </div>
        </div>
      </div>
      <div className="login-app__modals--delete" >
        <div className="modals__confirm-delete--container">
          <div className="confirm-delete__msg--container">
            <div className="msg--delete-account">
              <p>Are you sure you want to Delete this Application?  You will no longer have a way to login to NJ2JP and all your account information will be lost!!!</p>
              <br />
              <p>We HIGHLY recommend you add another application, OR  click <Link to={`/user_${uuid()}/manage_login`}>HERE</Link> to add an Email & Password to your account before deleting this application.</p>
            </div>
            <div className="msg--delete-single-app">
              <p>Are you sure you want to Delete this Application?</p>
            </div>
            <div className="msg__action-btns">
              <div className="action-btns__cancel-btn">
                <button className="cancel-btn primary-flex-button sweep-right">
                  Cancel
                </button>
              </div>
              <div className="action-btns__delete-btn">
                {/* NOTE:  Depending on the situation, render the appropriate delete button from the choices below  */}
                <button className="delete-btn primary-flex-button sweep-right">
                  Delete Account
                </button>
                <button className="delete-btn primary-flex-button sweep-right">
                  Delete Application
                </button>
              </div>
              <div>
                <button className="save-btn primary-flex-button-saving sweep-right">
                  <FontAwesome name="refresh" spin />
                  {'\u00A0'} Deleting...
                  {/* NOTE:  When this button is displayed, the "Cancel" button needs to be hidden. */}
                </button>
              </div>
              <div>
                <button className="save-btn primary-flex-button-saved sweep-right">
                  <span className="flex-parent-btn">
                    <FontAwesome name="trash" />
                    {'\u00A0'} Deleted!
                    {/* NOTE:  After the reviews has been deleted, re-render component with the Presentation Component. */}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserLoginAppMobile.propTypes = propTypes;
export default UserLoginAppMobile;
