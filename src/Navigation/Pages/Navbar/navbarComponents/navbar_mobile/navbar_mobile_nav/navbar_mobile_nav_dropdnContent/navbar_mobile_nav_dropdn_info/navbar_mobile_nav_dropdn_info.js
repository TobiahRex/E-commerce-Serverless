import React, { PropTypes } from 'react';

import NavbarMobileNavDropdnInfoTitle from './navbar_mobile_nav_dropdn_info_title';
import NavbarMobileNavDropdnInfoDropdnContent from './navbar_mobile_nav_dropdn_info_dropdownContent';

const propTypes = {
  toggleDropdown: PropTypes.func,
};

function NavbarMobileNavDropdnInfo({ toggleDropdown }) {
  return (
    <li className="navbar-mobile-nav-dropdown-info">
      <div className="navbar-mobile-nav-dropdown-info-dropdown">
        <NavbarMobileNavDropdnInfoTitle />
        <NavbarMobileNavDropdnInfoDropdnContent toggleDropdown={toggleDropdown} />
      </div>
    </li>
  );
}

NavbarMobileNavDropdnInfo.propTypes = propTypes;
export default NavbarMobileNavDropdnInfo;
