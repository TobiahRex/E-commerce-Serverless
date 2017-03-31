import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function WebLoginMethods() {
  return (
    <div className="dashboard__header">
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
    </div>
  );
}
WebLoginMethods.propTypes = propTypes;
export default WebLoginMethods;
