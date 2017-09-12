import React from 'react';
import NavbarNavsInfoDropdnLefthalf from './navbarNavs_info_dropdn_leftHalf';
import NavbarNavsInfoDropdnRighthalf from './navbarNavs_info_dropdn_rightHalf';

const NavbarNavsInfoDropdnContent = () => (
  <span className="info-dropdown-content">
    <span className="info-dropdown-content-parent">
      <NavbarNavsInfoDropdnLefthalf />
      <NavbarNavsInfoDropdnRighthalf />
    </span>
  </span>
);

export default NavbarNavsInfoDropdnContent;
