import React from 'react';
import NavbarNavsMediaDropdnTopthird from './navbarNavs_media_dropdn_topThird';
import NavbarNavsMediaDropdnMidthird from './navbarNavs_media_dropdn_midThird';
import NavbarNavsMediaDropdnBottomthird from './navbarNavs_media_dropdn_bottomThird';

const NavbarNavsMediaDropdnContent = () => (
  <span className="media-dropdown-content">
    <span className="media-dropdown-content-parent">
      <NavbarNavsMediaDropdnTopthird />
      <NavbarNavsMediaDropdnMidthird />
      <NavbarNavsMediaDropdnBottomthird />
    </span>
  </span>
);

export default NavbarNavsMediaDropdnContent;
