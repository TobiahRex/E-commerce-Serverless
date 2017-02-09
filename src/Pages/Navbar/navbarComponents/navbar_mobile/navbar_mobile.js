import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import NavbarMobileOptions from './navbar_mobile_options/navbarOptions_mobile';

class NavbarMobile extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-mobile">
        <div className="navbar-mobile-container">
          <div className="navbar-mobile-logo">
            <img className="navbar-mobile-logo-src" alt="nj2jp logo" />
          </div>
          <NavbarMobileOptions />
          <div className="navbar-mobile-actions">
            <div className="navbar-mobile-actions-signedIn">
              <Link>My Account</Link>
              <Link>Checkout</Link>
              <button>
                Sign Out
              </button>
            </div>
            <div className="navbar-mobile-actions-notSignedIn">
              <Link>Sign In</Link>
              <Link>Register</Link>
            </div>
          </div>
          <div className="navbar-mobile-navbar"></div>
        </div>
      </nav>
    );
  }
}

export default NavbarMobile;
