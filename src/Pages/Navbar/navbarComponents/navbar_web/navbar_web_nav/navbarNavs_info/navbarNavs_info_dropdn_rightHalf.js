import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarNavsInfoDropdnRighthalf() {
  return (
    <div className="info-dropdown-content-innerContainer-right">
      <ul
        className="info-dropdown-content-innerContainer-right-list"
      >
        <li className="sweep-right">
          <Link to={'/contact_us'}>
            <p>Contact Us</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/shipping_and_return_policy'}>
            <p>Shipping & Returns Policy</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/privacy_policy'}>
            <p>Privacy Policy</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/nicotine_disclaimer'}>
            <p>Nicotine Disclaimer</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/terms_and_conditions'}>
            <p>Terms & Conditions</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
