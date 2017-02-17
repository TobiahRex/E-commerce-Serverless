import React from 'react';

export default function FooterMyAccount() {
  return (
    <li className="footer-main-sections-list-myaccount">
      <h3 className="footer-main-sections-myaccount-title">
        My Account
      </h3>
      <ul className="footer-main-sections-myaccount-list">
        <li className="footer-main-sections-myaccount-register hvr-bob">
          Order History
        </li>
        <li className="footer-main-sections-myaccount-affiliate hvr-bob">
          Order Status
        </li>
        <li className="footer-main-sections-myaccount-wholesale hvr-bob">
          Change Password
        </li>
        <li className="footer-main-sections-myaccount-forgot hvr-bob">
          Forgot Login Info
        </li>
      </ul>
    </li>
  );
}
