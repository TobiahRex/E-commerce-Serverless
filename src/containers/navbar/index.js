import React from 'react';
import {
  NavbarWeb,
  NavbarMobile,
  NavbarWebMini,
} from './components';

const Navbar = () => (
  <header className="navbar-comp-container">
    <NavbarWeb />
    <NavbarWebMini />
    <NavbarMobile />
  </header>
);

export default Navbar;
