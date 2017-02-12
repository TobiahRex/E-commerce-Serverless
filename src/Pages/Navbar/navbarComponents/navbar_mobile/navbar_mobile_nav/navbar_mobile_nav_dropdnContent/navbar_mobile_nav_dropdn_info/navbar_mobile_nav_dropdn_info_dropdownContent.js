import React from 'react';
import { Link } from 'react-router';

export default function NavbarMobileNavInfoDropdnContent() {
  return (
    <div className="navbar-mobile-nav-dropdown-info-expanded">
      <ul className="navbar-mobile-nav-dropdown-info-expanded-list">
        <li className="sweep-right-white">
          <Link to="/product_fbb">
            About
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Contact Us
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            {('FAQ\'s')}
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Return Policy
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Privacy Policy
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Nicotine Disclaimer
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Terms & Conditions
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Mission Statement
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Wholesale
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link>
            Affiliate Program
          </Link>
        </li>
      </ul>
    </div>
  );
}
