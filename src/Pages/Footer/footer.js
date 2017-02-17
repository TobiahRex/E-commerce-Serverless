import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-main-sections-container">
        <ul className="footer-main-sections-list">
          <li className="footer-main-sections-list-contactus">
            <h3 className="footer-main-sections-contactus-title">
              Contact Us
            </h3>
            <ul className="footer-main-sections-contactus-list">
              <li className="footer-main-sections-contactus-email">Email</li>
              <li className="footer-main-sections-contactus-phone">Phone</li>
              <li className="footer-main-sections-contactus-phone">About</li>
            </ul>
          </li>
          <li className="footer-main-sections-list-myaccount">
            <h3 className="footer-main-sections-myaccount-title">
              My Account
            </h3>
            <ul className="footer-main-sections-myaccount-list">
              <li className="footer-main-sections-myaccount-register">
                Order History
              </li>
              <li className="footer-main-sections-myaccount-affiliate">
                Order Status
              </li>
              <li className="footer-main-sections-myaccount-wholesale">
                Change Password
              </li>
              <li className="footer-main-sections-myaccount-forgot">
                Forgot Login Info
              </li>
            </ul>
          </li>
          <li className="footer-main-sections-list-memberships">
            <h3 className="footer-main-sections-memberships-title">
              Memberships
            </h3>
            <ul className="footer-main-sections-memberships-list">
              <li className="footer-main-sections-memberships-register">
                Register
              </li>
              <li className="footer-main-sections-memberships-affiliate">
                Affiliate Program
              </li>
              <li className="footer-main-sections-memberships-wholesale">
                Wholesale
              </li>
              <li className="footer-main-sections-memberships-forgot">
                Forgot Login Info
              </li>
            </ul>
          </li>
          <li className="footer-main-sections-list-customercare">
            <h3 className="footer-main-sections-customercare-title">
              Customer Care
            </h3>
            <ul className="footer-main-sections-customercare-list">
              <li className="footer-main-sections-customercare-shop">
                Shop
              </li>
              <li className="footer-main-sections-customercare-shipping">
                Shipping Policy
              </li>
              <li className="footer-main-sections-customercare-returns">
                Return Policy
              </li>
              <li className="footer-main-sections-customercare-privacy">
                Privacy Policy
              </li>
              <li className="footer-main-sections-customercare-terms">
                Terms & Conditions
              </li>
              <li className="footer-main-sections-customercare-nicotine">
                Nicotine Disclaimer
              </li>
            </ul>
          </li>
        </ul>
        <div className="footer-line-break" />
        <div className="footer-copyright">
          <p className="copyright-message">
            Copyright <FontAwesome name="copyright" /> 2017
          </p>
          <p className="developer-message">Made with <FontAwesome className="developer-heart" name="heart" /> by TobiahRex
          </p>
        </div>
      </div>
    </div>
  );
}
