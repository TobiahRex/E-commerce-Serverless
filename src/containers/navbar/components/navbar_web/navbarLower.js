import React from 'react';

import NavbarNavsShop from './navbar_web_nav/navbarNavs_shop/navbarNavs_shop';
import NavbarNavsMedia from './navbar_web_nav/navbarNavs_media/navbarNavs_media';
import NavbarNavsInfo from './navbar_web_nav/navbarNavs_info/navbarNavs_info';

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
