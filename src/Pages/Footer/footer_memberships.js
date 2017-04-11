import React from 'react';
import { Link } from 'react-router';

export default function FooterMemberships() {
  return (
    <li className="footer-main-sections-list-memberships">
      <h3 className="footer-main-sections-memberships-title">
        Memberships
      </h3>
      <ul className="footer-main-sections-memberships-list">
        <li className="footer-main-sections-memberships-register hover-bob">
          <Link to="/register">Register</Link>
        </li>
        <li className="footer-main-sections-memberships-affiliate hover-bob">
          <Link to="/affiliate_program">Affiliate Program</Link>
        </li>
        <li className="footer-main-sections-memberships-wholesale hover-bob">
          <Link to="/wholesale">Wholesale</Link>
        </li>
        <li className="footer-main-sections-memberships-forgot hover-bob">
          <Link to="/forgot">Forgot Login Info</Link>
        </li>
      </ul>
    </li>
  );
}
