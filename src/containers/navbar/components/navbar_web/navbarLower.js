import React from 'react';
import {
  NavbarNavsJuices,
  NavbarNavsMedia,
  NavbarNavsInfo,
} from './imports';

function NavbarLower() {
  return (
    <div className="navbar-actionSection-lower">
      <NavbarNavsJuices />
      <NavbarNavsMedia />
      <NavbarNavsInfo />
    </div>
  );
}
export default NavbarLower;
