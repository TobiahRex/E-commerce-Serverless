import React from 'react';
import PropTypes from 'prop-types';
import NavbarMobileNavDropdnMediaTitle from './navbar_mobile_nav_dropdn_media_title';
import NavbarMobileNavDropdnMediaDropdnContent from './navbar_mobile_nav_dropdn_media_dropdownContent';

const { func } = PropTypes;
const propTypes = { toggleDropdown: func };

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
