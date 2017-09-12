import React from 'react';
import PropTypes from 'prop-types';
import NavbarMobileNavDropdnShop from './navbar_mobile_nav_dropdn_shop/navbar_mobile_nav_dropdn_shop';
import NavbarMobileNavDropdnMedia from './navbar_mobile_nav_dropdn_media/navbar_mobile_nav_dropdn_media';
import NavbarMobileNavDropdnInfo from './navbar_mobile_nav_dropdn_info/navbar_mobile_nav_dropdn_info';

function NavbarMobileNavDropdnContent({ ddOpen, toggleDropdown }) {
  const showDropdown = ddOpen ? {
    opacity: 1,
    maxHeight: '81.5em',
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
const { bool, func } = PropTypes;
NavbarMobileNavDropdnContent.defaultProps = {
  navbarSize: '320px',
};
NavbarMobileNavDropdnContent.propTypes = {
  scrolling: bool.isRequired,
  ddOpen: bool.isRequired,
  toggleDropdown: func.isRequired,
};
export default NavbarMobileNavDropdnContent;
