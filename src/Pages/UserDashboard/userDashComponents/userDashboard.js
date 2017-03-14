import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import BreadCrumb from '../../../Components/breadcrumbs';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserDashboard({ location }) {
  return (
    <div className="userdash--main">
      <div className="userdash--container">
        <BreadCrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['/', location.pathname]}
          lastCrumb="Home Dashboard"
        />
        {/* <div className="userdash__breadcrumb">
          <ul className="breadcrumb--list">
            <li className="list--home">
              <Link className="breadcrumb-link" to="/">
                Home
              </Link>
              <FontAwesome name="angle-right" />
            </li>
            <li className="list--your-account">
              <Link className="breadcrumb-link" to="/user_123123123">
                Your Account
              </Link>
              <FontAwesome name="angle-right" />
            </li>
            <li className="list--active">
              <p>Home Dashboard</p>
            </li>
          </ul>
        </div> */}
        <div className="userdash__title">
          <h1>Hello, {'<Bruce Wayne>'}</h1>
        </div>
        <div className="userdash__body">
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
                  <Link to="/user_123123123/address_book">
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
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Home Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserDashboard.propTypes = propTypes;
export default UserDashboard;
