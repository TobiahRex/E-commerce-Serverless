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
              <li className="footer-main-sections-contactus-email hvr-bob">
                Email
              </li>
              <li className="footer-main-sections-contactus-phone hvr-bob">
                Phone
              </li>
              <li className="footer-main-sections-contactus-phone hvr-bob">
                About
              </li>
            </ul>
          </li>
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
          <li className="footer-main-sections-list-memberships">
            <h3 className="footer-main-sections-memberships-title">
              Memberships
            </h3>
            <ul className="footer-main-sections-memberships-list">
              <li className="footer-main-sections-memberships-register hvr-bob">
                Register
              </li>
              <li className="footer-main-sections-memberships-affiliate hvr-bob">
                Affiliate Program
              </li>
              <li className="footer-main-sections-memberships-wholesale hvr-bob">
                Wholesale
              </li>
              <li className="footer-main-sections-memberships-forgot hvr-bob">
                Forgot Login Info
              </li>
            </ul>
          </li>
          <li className="footer-main-sections-list-customercare">
            <h3 className="footer-main-sections-customercare-title">
              Customer Care
            </h3>
            <ul className="footer-main-sections-customercare-list">
              <li className="footer-main-sections-customercare-shop hvr-bob">
                Shop
              </li>
              <li className="footer-main-sections-customercare-shipping hvr-bob">
                Shipping Policy
              </li>
              <li className="footer-main-sections-customercare-returns hvr-bob">
                Return Policy
              </li>
              <li className="footer-main-sections-customercare-privacy hvr-bob">
                Privacy Policy
              </li>
              <li className="footer-main-sections-customercare-terms hvr-bob">
                Terms & Conditions
              </li>
              <li className="footer-main-sections-customercare-nicotine hvr-bob">
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
          <p className="developer-message">Made with <FontAwesome className="developer-heart" name="heart" /> by @TobiahRex
          </p>
        </div>
      </div>
    </div>
  );
}
