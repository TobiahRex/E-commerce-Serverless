import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashHeaderWeb() {
  return (
    <div className="dashboard__header">
      <div className="dashboard__stats--container">
        <ul className="stats--list">
          <li className="list--stat">
            <div className="stat--visits">
              <h3>230</h3>
              <p>Visits Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--sales">
              <h3>24</h3>
              <p>Sales Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--new-members">
              <h3>10</h3>
              <p>New Members</p>
              <p>Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--revenue">
              <h3>
                <FontAwesome name="usd" />{'\u00A0'}1,200</h3>
              <p>Revenue Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--bounce-rate">
              <h3>1</h3>
              <p>Bounce Rate</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="dashboard__top-half--container">
        <div className="top-half--contact-info">
          <div className="contact-info__title admin-dash__small-title">
            <h3>Contact Info</h3>
          </div>
          <div className="contact-info__info">
            {/* TODO:  Render this information dynamically */}
            <p className="info--name">Bruce Wayne</p>
            <p className="info--email">bruce.wayne@wayneenterprises.com</p>
            <p className="info--phone">(123)-123-1234</p>
          </div>
          <div className="contact-info__edit-btn">
            <button className="small-edit-btn sweep-right">Edit</button>
          </div>
        </div>
        <div className="top-half--password">
          <div className="password__input">
            <label htmlFor="login-method--password">Password</label>
            <input type="password" id="login-method--password" value="password1234" disabled />
          </div>
          <div className="password__edit-btn">
            <button className="medium-size-btn sweep-right">Change Password</button>
          </div>
        </div>
      </div>
      <div className="dashboard__bottom-half--container">
        <div className="bottom-half--login-methods">
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
AdminDashHeaderWeb.propTypes = propTypes;
export default AdminDashHeaderWeb;
