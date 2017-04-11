import React, { PropTypes } from 'react';

import NavbarMobileNavDropdnShop from './navbar_mobile_nav_dropdn_shop/navbar_mobile_nav_dropdn_shop';
import NavbarMobileNavDropdnMedia from './navbar_mobile_nav_dropdn_media/navbar_mobile_nav_dropdn_media';
import NavbarMobileNavDropdnInfo from './navbar_mobile_nav_dropdn_info/navbar_mobile_nav_dropdn_info';

const defaultProps = {
  navbarSize: '320px',
};

const propTypes = {
  navbarSize: PropTypes.string,
  ddOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

function NavbarMobileNavDropdnContent({ navbarSize, ddOpen, toggleDropdown }) {
  const showDropdown = ddOpen ? {
    opacity: 1,
    maxHeight: '81.5em',
    width: navbarSize,
  } : {
    opacity: 0,
    maxHeight: 0,
  };

  return (
    <ul
      style={showDropdown}
      className="navbar-mobile-nav-dropdown-content"
    >
      <NavbarMobileNavDropdnShop toggleDropdown={toggleDropdown} />
      <NavbarMobileNavDropdnMedia toggleDropdown={toggleDropdown} />
      <NavbarMobileNavDropdnInfo toggleDropdown={toggleDropdown} />
    </ul>
  );
}
NavbarMobileNavDropdnContent.defaultProps = defaultProps;
NavbarMobileNavDropdnContent.propTypes = propTypes;
export default NavbarMobileNavDropdnContent;
