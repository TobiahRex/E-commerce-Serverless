import React, { PureComponent } from 'react';

import NavbarNavsInfoDropdnLefthalf from './navbarNavs_info_dropdn_leftHalf';
import NavbarNavsInfoDropdnRighthalf from './navbarNavs_info_dropdn_rightHalf';

class NavbarNavsInfoDropdnContent extends PureComponent {
  render() {
    return (
      <span className="info-dropdown-content">
        <span className="info-dropdown-content-parent">
          <NavbarNavsInfoDropdnLefthalf />
          <NavbarNavsInfoDropdnRighthalf />
        </span>
      </span>
    );
  }
}

export default NavbarNavsInfoDropdnContent;
