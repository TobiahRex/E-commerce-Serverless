import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserSideBar({ location }) {
  return (
    <div className="body__sidebar">
      <div className="sidebar--container">
        <div className="sidebar__title">
          <h3>Your Account</h3>
        </div>
        <ul className="sidebar__menu-list">
          <li className="list--home-dashboard sweep-right">
            <Link to="/user_123123123">
              <p>Home Dashboard</p>
            </Link>
          </li>
          <li className="list--address-book sweep-right">
            <Link to={`${location.pathname}/address_book`}>
              <p>Address Book</p>
            </Link>
          </li>
          <li className="list--orders sweep-right">
            <Link to="/user_123123123/orders">
              <p>Your Orders</p>
            </Link>
          </li>
          <li className="list--product-reviews sweep-right">
            <Link to="/user_123123123/product_reviews">
              <p>Your Product Reviews</p>
            </Link>
          </li>
          <li className="list--login-apps sweep-right">
            <Link to="/user_123123123/login_apps">
              <p>Your Login Apps</p>
            </Link>
          </li>
          <li className="list--newsletters sweep-right">
            <Link to="/user_123123123/newsletter">
              <p>Your Newsletter Subscriptions</p>
            </Link>
          </li>
          <li className="list--legal-terms-conditions sweep-right">
            <Link to="/user_123123123/terms_and_conditions">
              <p>Terms & Conditions</p>
            </Link>

          </li>
          <li className="list--legal-privacy sweep-right">
            <Link to="/user_123123123/privacy_policy">
              <p>Privacy Policy</p>
            </Link>

          </li>
          <li className="list--legal-shipping sweep-right">
            <Link to="/user_123123123/shipping_policy">
              <p>Shipping Policy</p>
            </Link>

          </li>
          <li className="list--legal-return sweep-right">
            <Link to="/user_123123123/return_policy">
              <p>Return Policy</p>
            </Link>

          </li>
          <li className="list--legal-nicotine-disclaimer sweep-right">
            <Link to="/user_123123123/nicotine_disclaimer">
              <p>Nicotine Disclaimer</p>
            </Link>

          </li>
          <li className="list--legal-faqs sweep-right">
            <Link to="/faqs">
              <p>{'FAQ\'s'}</p>
            </Link>
          </li>
          <li className="list--legal-manage-login sweep-right">
            <Link to="/user_123123123/manage_login">
              <p>Manage Login</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
UserSideBar.propTypes = propTypes;
export default UserSideBar;
