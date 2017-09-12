import React from 'react';
import PropTypes from 'prop-types';
import NavbarMobileNavDropdnInfoTitle from './navbar_mobile_nav_dropdn_info_title';
import NavbarMobileNavDropdnInfoDropdnContent from './navbar_mobile_nav_dropdn_info_dropdownContent';

function NavbarMobileNavDropdnInfo({ toggleDropdown }) {
  return (
    <li className="navbar-mobile-nav-dropdown-info">
      <div className="navbar-mobile-nav-dropdown-info-dropdown" onClick={console.log}>
        <NavbarMobileNavDropdnInfoTitle />
        <NavbarMobileNavDropdnInfoDropdnContent toggleDropdown={toggleDropdown} />
      </div>
    </li>
  );
}
const { func } = PropTypes;
const propTypes = { toggleDropdown: func.isRequired };
NavbarMobileNavDropdnInfo.propTypes = propTypes;
export default NavbarMobileNavDropdnInfo;
