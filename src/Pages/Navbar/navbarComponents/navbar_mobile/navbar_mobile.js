import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import NavbarMobileOptions from './navbar_mobile_options/navbarOptions_mobile';
import NavbarMobileActions from './navbar_mobile_actions/navbar_mobile_userActions';

class NavbarMobile extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-mobile">
        <div className="navbar-mobile-container">
          <div className="navbar-mobile-logo">
            <img className="navbar-mobile-logo-src" alt="nj2jp logo" />
          </div>
          <NavbarMobileOptions />
          <NavbarMobileActions />
          <div className="navbar-mobile-navbar"></div>
        </div>
      </nav>
    );
  }
}

export default NavbarMobile;
