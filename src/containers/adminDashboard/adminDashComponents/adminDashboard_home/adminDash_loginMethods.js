import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const { objectOf, any } = PropTypes;
const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function Web() {
  return (
    <div className="dashboard__login-methods--container">
      <div className="login-methods--social">
        <div className="login-methods__title admin-dash__small-title">
          <h3>Login Methods</h3>
        </div>
        <div className="login-methods--social">
          <ul className="login-methods--social-list">
            <li className="social-list--item active facebook">
              <FontAwesome name="facebook" />
            </li>
            <li className="social-list--item active instagram">
              <FontAwesome name="instagram" />
            </li>
            <li className="social-list--item">
              <FontAwesome name="google" />
            </li>
            <li className="social-list--item">
              <FontAwesome name="twitter" />
            </li>
          </ul>
          <div className="social-login__edit-btn">
            <button className="small-edit-btn sweep-right">Edit</button>
          </div>
        </div>
      </div>
      <div className="login-methods--password">
        <div className="password__input">
          <label htmlFor="login-method--password">Password</label>
          <input type="password" id="login-method--password" value="password1234" disabled />
        </div>
        <div className="password__edit-btn">
          <button className="medium-size-btn sweep-right">Change Password</button>
        </div>
      </div>
    </div>
  );
}
Web.propTypes = propTypes;

function Mobile() {
  return (
    <div className="dashboard__login-methods--container">
      <div className="login-methods">
        <div className="login-methods__title admin-dash__small-title">
          <h3>Login Methods</h3>
        </div>
        <div className="login-methods--social">
          <ul className="login-methods--social-list">
            <li className="social-list--item active facebook">
              <FontAwesome name="facebook" />
            </li>
            <li className="social-list--item active instagram">
              <FontAwesome name="instagram" />
            </li>
            <li className="social-list--item">
              <FontAwesome name="google" />
            </li>
            <li className="social-list--item">
              <FontAwesome name="twitter" />
            </li>
          </ul>
          <div className="social-login__edit-btn">
            <button className="small-edit-btn sweep-right">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Mobile.propTypes = propTypes;

const LoginMethods = { Web, Mobile };
export default LoginMethods;
