import React, { PureComponent } from 'react';

class NavbarMobile extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-mobile">
        <div className="navbar-mobile-container">
          <div className="navbar-mobile-logo">
            <img className="navbar-mobile-logo-src" alt="nj2jp logo" />
          </div>
          <div className="navbar-mobile-options">

          </div>
          <div className="navbar-mobile-actions"></div>
          <div className="navbar-mobile-navbar"></div>
        </div>
      </nav>
    );
  }
}

export default NavbarMobile;
