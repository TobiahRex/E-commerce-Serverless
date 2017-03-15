import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterMyAccount() {
  return (
    <li className="footer-main-sections-list-myaccount">
      <h3 className="footer-main-sections-myaccount-title">
        My Account
      </h3>
      <ul className="footer-main-sections-myaccount-list">
        <li className="footer-main-sections-myaccount-register hvr-bob">
          <Link to="/user/order_history">Order History</Link>
        </li>
        <li className="footer-main-sections-myaccount-affiliate hvr-bob">
          <Link to="/user/order_status">Order Status</Link>
        </li>
        <li className="footer-main-sections-myaccount-wholesale hvr-bob">
          <Link to="/user/change_password">Change Password</Link>
        </li>
        <li className="footer-main-sections-myaccount-forgot hvr-bob">
          <Link to="/forgot">Forgot Login Info</Link>
        </li>
      </ul>
    </li>
  );
}
