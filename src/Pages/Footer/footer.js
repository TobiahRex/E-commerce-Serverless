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
              <li className="footer-main-sections-contactus-email sweep-right">
                Email
              </li>
              <li className="footer-main-sections-contactus-phone sweep-right">
                Phone
              </li>
              <li className="footer-main-sections-contactus-phone sweep-right">
                About
              </li>
            </ul>
          </li>
          <li className="footer-main-sections-list-myaccount">
            <h3 className="footer-main-sections-myaccount-title">
              My Account
            </h3>
            <ul className="footer-main-sections-myaccount-list">
              <li className="footer-main-sections-myaccount-register sweep-right">
                Order History
              </li>
              <li className="footer-main-sections-myaccount-affiliate sweep-right">
                Order Status
              </li>
              <li className="footer-main-sections-myaccount-wholesale sweep-right">
                Change Password
              </li>
              <li className="footer-main-sections-myaccount-forgot sweep-right">
                Forgot Login Info
              </li>
            </ul>
          </li>
          <li className="footer-main-sections-list-memberships">
            <h3 className="footer-main-sections-memberships-title">
              Memberships
            </h3>
            <ul className="footer-main-sections-memberships-list">
              <li className="footer-main-sections-memberships-register sweep-right">
                Register
              </li>
              <li className="footer-main-sections-memberships-affiliate sweep-right">
                Affiliate Program
              </li>
              <li className="footer-main-sections-memberships-wholesale sweep-right">
                Wholesale
              </li>
              <li className="footer-main-sections-memberships-forgot sweep-right">
                Forgot Login Info
              </li>
            </ul>
          </li>
          <li className="footer-main-sections-list-customercare">
            <h3 className="footer-main-sections-customercare-title">
              Customer Care
            </h3>
            <ul className="footer-main-sections-customercare-list">
              <li className="footer-main-sections-customercare-shop sweep-right">
                Shop
              </li>
              <li className="footer-main-sections-customercare-shipping sweep-right">
                Shipping Policy
              </li>
              <li className="footer-main-sections-customercare-returns sweep-right">
                Return Policy
              </li>
              <li className="footer-main-sections-customercare-privacy sweep-right">
                Privacy Policy
              </li>
              <li className="footer-main-sections-customercare-terms sweep-right">
                Terms & Conditions
              </li>
              <li className="footer-main-sections-customercare-nicotine sweep-right">
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
