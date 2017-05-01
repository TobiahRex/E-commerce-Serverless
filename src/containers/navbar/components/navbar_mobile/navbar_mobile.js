import React from 'react';
import { Link } from 'react-router';

import NavbarMobileOptions from './navbar_mobile_options/navbarOptions_mobile';
import NavbarMobileActions from './navbar_mobile_userActions/navbar_mobile_userActions';
import NavbarMobileNav from './navbar_mobile_nav/navbar_mobile_nav';

export default function NavbarMobile() {
  return (
    <nav className="navbar navbar__mobile">
      <div className="navbar__mobile--container">
        <Link to="/">
          <div className="navbar__mobile--logo">
            <img className="logo--src" alt="nj2jp logo" />
          </div>
        </Link>
        <NavbarMobileOptions />
        <NavbarMobileActions />
        <NavbarMobileNav />
      </div>
    </nav>
  );
}
