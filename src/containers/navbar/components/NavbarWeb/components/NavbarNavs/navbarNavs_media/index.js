import React from 'react';
import { Link } from 'react-router';

import NavbarNavsMediaDropdnContent from './navbarNavs_media_dropdnContent';

const NavbarNavsMedia = () => (
  <div className="navbar-actionSection-lower-media">
    <Link
      to={'/media'}
      className="media-main-button"
    >
      <div className="media-main-button-title">
        <span>MEDIA</span>
      </div>
    </Link>
    <NavbarNavsMediaDropdnContent />
  </div>
);

export default NavbarNavsMedia;
