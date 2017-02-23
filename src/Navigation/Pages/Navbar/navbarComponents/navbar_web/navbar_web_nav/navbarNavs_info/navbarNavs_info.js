import React, { PureComponent } from 'react';

import NavbarNavsInfoDropdnContent from './navbarNavs_info_dropdn_content';

class NavbarNavsInfo extends PureComponent {
  render() {
    return (
      <div className="navbar-actionSection-lower-info">
        <span className="info-main-button">
          <div className="info-main-button-title">
            <span>INFO</span>
          </div>
        </span>
        <NavbarNavsInfoDropdnContent />
      </div>
    );
  }
}

export default NavbarNavsInfo;
