import React, { PureComponent } from 'react';

import NavbarOptionsLanguage from '../navbar_web/navbar_web_options/navbar_web_options_language/navbarOptions_language'

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
