import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

// import NavbarMobileNavDropdnShop from './navbar_mobile_nav_dropdn_shop';
// import NavbarMobileNavDropdnMedia from './navbar_mobile_nav_dropdn_media';
// import NavbarMobileNavDropdnInfo from './navbar_mobile_nav_dropdn_info';

export default function NavbarMobileNavDropdnInfo() {
  return (
    <li className="navbar-mobile-nav-dropdown-info">
      <div className="navbar-mobile-nav-dropdown-info-dropdown">
        <div className="navbar-mobile-nav-dropdown-info-hover-container sweep-right-white">
          <h3 className="navbar-mobile-nav-dropdown-info-title">Info</h3>
          <div className="navbar-mobile-nav-dropdown-info-expand-container">
            <div className="navbar-mobile-nav-dropdown-info-expand-icon">
              <FontAwesome
                className="navbar-mobile-nav-dropdown-info-expand-icon-plus-fa"
                name="plus"
              />
              <FontAwesome
                className="navbar-mobile-nav-dropdown-info-expand-icon-minus-fa"
                name="minus"
              />
            </div>
          </div>
        </div>
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
      </div>
    </li>

  );
}
