import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import NavbarNavsInfoDropdnContent from './navbarNavs_info_dropdn_content';

const NavbarNavsInfo = () => (
  <div className="navbar-actionSection-lower-info">
    <span className="info-main-button">
      <div className="info-main-button-title">
        <IntlMsg id="navbar.nav.info.title" />
      </div>
    </span>
    <NavbarNavsInfoDropdnContent />
  </div>
);

export default NavbarNavsInfo;
