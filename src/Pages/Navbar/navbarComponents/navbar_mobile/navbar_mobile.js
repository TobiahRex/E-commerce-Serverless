import React, { PureComponent } from 'react';

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
          <div className="navbar-mobile-actions"></div>
          <div className="navbar-mobile-navbar"></div>
        </div>
      </nav>
    );
  }
}

export default NavbarMobile;
