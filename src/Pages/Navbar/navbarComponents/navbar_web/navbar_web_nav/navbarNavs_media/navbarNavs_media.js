import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import NavbarNavsMediaDropdnContent from './navbarNavs_media_dropdnContent';

class NavbarNavsMedia extends PureComponent {
  render() {
    return (
      <div className="navbar-actionSection-lower-media">
        <Link
          to={'/media'}
          className="media-main-button">
          <div className="media-main-button-title">
            <span>MEDIA</span>
          </div>
        </Link>
        <NavbarNavsMediaDropdnContent />
      </div>
    );
  }
}

export default NavbarNavsMedia;
