import React from 'react';
import NavbarLogo from './navbarLogo';
import NavbarActionSection from './navbarActionSection';

function NavbarWeb() {
  return (
    <nav className="navbar navbar-web navbar-default">
      <div className="container">
        <div className="navbar navbar-header">
          <NavbarLogo />
          <NavbarActionSection />
        </div>
      </div>
    </nav>
  );
}

export default NavbarWeb;
