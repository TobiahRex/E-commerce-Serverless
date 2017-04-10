import React from 'react';
import { Link } from 'react-router';

export default function FooterContactUs() {
  return (
    <li className="footer-main-sections-list-contactus">
      <h3 className="footer-main-sections-contactus-title">
        Contact Us
      </h3>
      <ul className="footer-main-sections-contactus-list">
        <li className="footer-main-sections-contactus-email hover-bob">
          <Link to="/contact_us">Email</Link>
        </li>
        <li className="footer-main-sections-contactus-phone hover-bob">
          <Link to="/phone">Phone</Link>
        </li>
        <li className="footer-main-sections-contactus-phone hover-bob">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </li>
  );
}
