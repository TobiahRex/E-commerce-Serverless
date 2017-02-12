import React from 'react';

import NavbarMobileNavDropdnInfoTitle from './navbar_mobile_nav_dropdn_info_title';
import NavbarMobileNavDropdnInfoDropdnContent from './navbar_mobile_nav_dropdn_info_dropdownContent';

export default function NavbarMobileNavDropdnInfo() {
  return (
    <li className="navbar-mobile-nav-dropdown-info">
      <div className="navbar-mobile-nav-dropdown-info-dropdown">
        <NavbarMobileNavDropdnInfoTitle />
        <NavbarMobileNavDropdnInfoDropdnContent />
      </div>
    </li>

  );
}
