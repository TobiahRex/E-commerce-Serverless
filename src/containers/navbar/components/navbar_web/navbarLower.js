import React from 'react';
import {
  NavbarNavsShop,
  NavbarNavsMedia,
  NavbarNavsInfo,
} from './imports';

function NavbarLower() {
  return (
    <div className="navbar-actionSection-lower">
      <NavbarNavsShop />
      <NavbarNavsMedia />
      <NavbarNavsInfo />
    </div>
  );
}
export default NavbarLower;
