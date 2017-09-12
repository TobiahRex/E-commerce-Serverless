import React from 'react';
import {
  NavbarWebLogo,
  NavbarUpper,
  NavbarLower,
} from '../';

function NavbarWeb() {
  return (
    <nav className="navbar navbar-web navbar-default">
      <div className="container">
        <div className="navbar navbar-header">
          <NavbarWebLogo />
          <div className="navbar-actionSection">
            <NavbarUpper />
            <NavbarLower />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarWeb;
