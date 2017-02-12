import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import NavbarMobileNavDropdnMediaTitle from './navbar_mobile_nav_dropdn_media_title';
import NavbarMobileNavDropdnMediaDropdnContent from './navbar_mobile_nav_dropdn_media_dropdownContent';

export default function NavbarMobileNavDropdnMedia() {
  return (
    <li className="navbar-mobile-nav-dropdown-media">
      <div className="navbar-mobile-nav-dropdown-media-dropdown">
        <NavbarMobileNavDropdnMediaTitle />
        <NavbarMobileNavDropdnMediaDropdnContent />
      </div>
    </li>

  );
}
