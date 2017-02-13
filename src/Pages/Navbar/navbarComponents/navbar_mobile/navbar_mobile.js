import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import NavbarMobileOptions from './navbar_mobile_options/navbarOptions_mobile';
import NavbarMobileActions from './navbar_mobile_userActions/navbar_mobile_userActions';
import NavbarMobileNav from './navbar_mobile_nav/navbar_mobile_nav';

class NavbarMobile extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-mobile">
        <div className="navbar-mobile-container">
          <Link to={'/'} className="navbar-mobile-logo-link">
            <div className="navbar-mobile-logo">
              <img className="navbar-mobile-logo-src" alt="nj2jp logo" />
            </div>
          </Link>
          <NavbarMobileOptions />
          <NavbarMobileActions />
          <NavbarMobileNav />
        </div>
      </nav>
    );
  }
}

export default NavbarMobile;
