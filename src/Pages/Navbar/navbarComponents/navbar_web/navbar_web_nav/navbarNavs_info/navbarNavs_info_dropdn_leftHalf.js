import React from 'react';
import { Link } from 'react-router';

export default function NavbarNavsInfoDropdnLefthalf() {
  return (
    <div className="info-dropdown-content-innerContainer-left">
      <ul
        className="info-dropdown-content-innerContainer-left-list"
      >
        <li className="sweep-right">
          <Link to={'/about'}>
            <p>About</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/about'}>
            <p>FAQs</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/about'}>
            <p>Wholesale</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/about'}>
            <p>Mission Statement</p>
          </Link>
        </li>
        <li className="sweep-right">
          <Link to={'/about'}>
            <p>Affiliate Program</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
