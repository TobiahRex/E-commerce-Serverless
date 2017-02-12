import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

// import NavbarMobileNavDropdnShop from './navbar_mobile_nav_dropdn_shop';
// import NavbarMobileNavDropdnMedia from './navbar_mobile_nav_dropdn_media';
// import NavbarMobileNavDropdnInfo from './navbar_mobile_nav_dropdn_info';

export default function NavbarMobileNavDropdnMedia() {
  return (
    <li className="navbar-mobile-nav-dropdown-media">
      <div className="navbar-mobile-nav-dropdown-media-dropdown">
        <div className="navbar-mobile-nav-dropdown-media-hover-container sweep-right-white">
          <h3 className="navbar-mobile-nav-dropdown-media-title">Media</h3>
          <div className="navbar-mobile-nav-dropdown-media-expand-container">
            <div className="navbar-mobile-nav-dropdown-media-expand-icon">
              <FontAwesome
                className="navbar-mobile-nav-dropdown-media-expand-icon-plus-fa"
                name="plus"
              />
              <FontAwesome
                className="navbar-mobile-nav-dropdown-media-expand-icon-minus-fa"
                name="minus"
              />
            </div>
          </div>
        </div>
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
      </div>
    </li>

  );
}
