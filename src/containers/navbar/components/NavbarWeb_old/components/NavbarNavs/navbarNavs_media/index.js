import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

import NavbarNavsMediaDropdnContent from './navbarNavs_media_dropdnContent';

const NavbarNavsMedia = () => (
  <div className="navbar-actionSection-lower-media">
    <Link
      to={'/media'}
      className="media-main-button"
    >
      <div className="media-main-button-title">
        <IntlMsg id="navbar.nav.media.title" />
      </div>
    </Link>
    <NavbarNavsMediaDropdnContent />
  </div>
);

export default NavbarNavsMedia;
