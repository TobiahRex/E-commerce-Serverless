import React from 'react';

import NavbarMobileNavDropdnShop from './navbar_mobile_nav_dropdn_shop';
import NavbarMobileNavDropdnMedia from './navbar_mobile_nav_dropdn_media';
import NavbarMobileNavDropdnInfo from './navbar_mobile_nav_dropdn_info';

export default function NavbarMobileNavDropdnContent() {
  return (
    <ul className="navbar-mobile-nav-dropdown-content">
      <NavbarMobileNavDropdnShop />
      <NavbarMobileNavDropdnMedia />
      <NavbarMobileNavDropdnInfo />
    </ul>
  );
}
