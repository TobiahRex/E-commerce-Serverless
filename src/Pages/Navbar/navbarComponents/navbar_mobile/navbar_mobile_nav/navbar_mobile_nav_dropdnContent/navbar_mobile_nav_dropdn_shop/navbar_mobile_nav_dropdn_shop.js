import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import NavbarMobileNavDropdnShopTitle from './navbar_mobile_nav_dropdn_shop_title';
import NavbarMobileNavDropdnShopDropdnContent from './navbar_mobile_nav_dropdn_shop_dropdnContent';


export default function NavbarMobileNavDropdnShop() {
  return (
    <li className="navbar-mobile-nav-dropdown-shop">
      <div className="navbar-mobile-nav-dropdown-shop-dropdown">
        <NavbarMobileNavDropdnShopTitle />
        <NavbarMobileNavDropdnShopDropdnContent />
      </div>
    </li>
  );
}
