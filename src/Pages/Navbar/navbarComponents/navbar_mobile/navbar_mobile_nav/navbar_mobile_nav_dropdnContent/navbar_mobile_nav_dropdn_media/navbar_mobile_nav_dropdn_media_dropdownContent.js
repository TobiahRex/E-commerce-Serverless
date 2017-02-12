import React from 'react';
import { Link } from 'react-router';

export default function NavbarMobileNavMediaDropdnContent() {
  return (
    <div className="navbar-mobile-nav-dropdown-media-expanded">
      <ul className="navbar-mobile-nav-dropdown-media-expanded-list">
        <li className="sweep-right-white">
          <Link >
            Contact Us
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Vape News
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Juice Reviews
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            User Stories
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Social Media
          </Link>
        </li>
      </ul>
    </div>
  );
}
