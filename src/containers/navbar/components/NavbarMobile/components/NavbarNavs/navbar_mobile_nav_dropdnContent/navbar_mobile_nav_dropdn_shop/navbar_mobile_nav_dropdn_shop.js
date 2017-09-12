import React from 'react';
import PropTypes from 'prop-types';
import NavbarMobileNavDropdnShopTitle from './navbar_mobile_nav_dropdn_shop_title';
import NavbarMobileNavDropdnShopDropdnContent from './navbar_mobile_nav_dropdn_shop_dropdownContent';

const { func } = PropTypes;
const propTypes = { toggleDropdown: func.isRequired };

function NavbarMobileNavDropdnShop({ toggleDropdown }) {
  return (
    <li className="navbar-mobile-nav-dropdown-shop">
      <div className="navbar-mobile-nav-dropdown-shop-dropdown" onClick={console.log}>
        <NavbarMobileNavDropdnShopTitle />
        <NavbarMobileNavDropdnShopDropdnContent toggleDropdown={toggleDropdown} />
      </div>
    </li>
  );
}

NavbarMobileNavDropdnShop.propTypes = propTypes;
export default NavbarMobileNavDropdnShop;
