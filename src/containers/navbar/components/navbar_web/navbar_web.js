import React from 'react';
import NavbarLogo from './navbarLogo';
import NavbarUpper from './navbarUpper';
import NavbarLower from './navbarLower';

function NavbarWeb() {
  return (
    <nav className="navbar navbar-web navbar-default">
      <div className="container">
        <div className="navbar navbar-header">
          <NavbarLogo />
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
