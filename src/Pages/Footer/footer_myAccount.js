import React from 'react';
import { Link } from 'react-router';

export default function FooterMyAccount() {
  return (
    <li className="footer-main-sections-list-myaccount">
      <h3 className="footer-main-sections-myaccount-title">
        My Account
      </h3>
      <ul className="footer-main-sections-myaccount-list">
        <li className="footer-main-sections-myaccount-register hover-bob">
          <Link to="/user/order_history">Order History</Link>
        </li>
        <li className="footer-main-sections-myaccount-affiliate hover-bob">
          <Link to="/user/order_status">Order Status</Link>
        </li>
        <li className="footer-main-sections-myaccount-wholesale hover-bob">
          <Link to="/user/change_password">Change Password</Link>
        </li>
        <li className="footer-main-sections-myaccount-forgot hover-bob">
          <Link to="/forgot">Forgot Login Info</Link>
        </li>
      </ul>
    </li>
  );
}
