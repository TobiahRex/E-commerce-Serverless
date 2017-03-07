import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default function UserDashboard() {
  return (
    <div className="userdash--main">
      <div className="userdash--container">
        <div className="userdash__breadcrumb">
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
        </div>
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
                <li className="list--home-dashboard">
                  <p>Home Dashboard</p>
                </li>
                <li className="list--address-book">
                  <p>Address Book</p>
                </li>
                <li className="list--orders">
                  <p>Your Orders</p>
                </li>
                <li className="list--product-reviews">
                  <p>Your Product Reviews</p>
                </li>
                <li className="list--login-apps">
                  <p>Your Login Apps</p>
                </li>
                <li className="list--newsletters">
                  <p>Your Newsletter Subscriptions</p>
                </li>
                <li className="list--legal-terms-conditions">
                  <p>Terms & Conditions</p>
                </li>
                <li className="list--legal-privacy">
                  <p>Privacy Policy</p>
                </li>
                <li className="list--legal-shipping">
                  <p>Shipping Policy</p>
                </li>
                <li className="list--legal-return">
                  <p>Return Policy</p>
                </li>
                <li className="list--legal-nicotine-disclaimer">
                  <p>Nicotine Disclaimer</p>
                </li>
                <li className="list--legal-faqs">
                  <p>{'FAQ\'s'}</p>
                </li>
                <li className="list--legal-manage-login">
                  <p>Manage Login</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h1>Main Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
