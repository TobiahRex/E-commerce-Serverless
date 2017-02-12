import React, { PropTypes } from 'react';

import NavbarMobileNavDropdnShopTitle from './navbar_mobile_nav_dropdn_shop_title';
import NavbarMobileNavDropdnShopDropdnContent from './navbar_mobile_nav_dropdn_shop_dropdownContent';

const propTypes = {
  toggleDropdown: PropTypes.func,
};

function NavbarMobileNavDropdnShop({ toggleDropdown }) {
  return (
    <li className="navbar-mobile-nav-dropdown-shop">
      <div className="navbar-mobile-nav-dropdown-shop-dropdown">
        <NavbarMobileNavDropdnShopTitle />
        <NavbarMobileNavDropdnShopDropdnContent toggleDropdown={toggleDropdown} />
      </div>
    </li>
  );
}

NavbarMobileNavDropdnShop.propTypes = propTypes;
export default NavbarMobileNavDropdnShop;
