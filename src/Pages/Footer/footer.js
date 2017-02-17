import React from 'react';

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-main-sections-container">
        <ul className="footer-main-sections-list">
          <li className="footer-main-sections-list-contactus">
            <div className="footer-main-sections-contactus-container">
              <h1 className="footer-main-sections-contactus-title">
                Contact Us
              </h1>
              <ul className="footer-main-sections-contactus-list">
                <li className="footer-main-sections-contactus-email">Email</li>
                <li className="footer-main-sections-contactus-phone">Phone</li>
              </ul>
            </div>
          </li>
          <li className="footer-main-sections-list-myaccount">
            <div className="footer-main-sections-myaccount-container">
              <h1 className="footer-main-sections-myaccount-title">My Account</h1>
            </div>
          </li>
          <li className="footer-main-sections-list-customercare">

          </li>
        </ul>
      </div>
    </div>
  );
}
