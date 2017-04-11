import React from 'react';

import NavbarLowerShop from './navbar_web_nav/navbarNavs_shop/navbarNavs_shop';
import NavbarLowerMedia from './navbar_web_nav/navbarNavs_media/navbarNavs_media';
import NavbarLowerInfo from './navbar_web_nav/navbarNavs_info/navbarNavs_info';

function NavbarLower() {
  return (
    <div className="navbar-actionSection-lower">
      <NavbarLowerShop />
      <NavbarLowerMedia />
      <NavbarLowerInfo />
    </div>
  );
}

export default NavbarLower;
