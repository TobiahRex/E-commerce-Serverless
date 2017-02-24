import React, { PropTypes } from 'react';

import NavbarMobileNavDropdnMediaTitle from './navbar_mobile_nav_dropdn_media_title';
import NavbarMobileNavDropdnMediaDropdnContent from './navbar_mobile_nav_dropdn_media_dropdownContent';

const propTypes = {
  toggleDropdown: PropTypes.func,
};

function NavbarMobileNavDropdnMedia({ toggleDropdown }) {
  return (
    <li className="navbar-mobile-nav-dropdown-media">
      <div className="navbar-mobile-nav-dropdown-media-dropdown" onClick={console.log}>
        <NavbarMobileNavDropdnMediaTitle />
        <NavbarMobileNavDropdnMediaDropdnContent toggleDropdown={toggleDropdown} />
      </div>
    </li>

  );
}

NavbarMobileNavDropdnMedia.propTypes = propTypes;
export default NavbarMobileNavDropdnMedia;
