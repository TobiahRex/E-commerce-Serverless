import React, { PureComponent } from 'react';

import NavbarNavsMediaDropdnContent from './navbarNavs_media_dropdnContent';

class NavbarNavsMedia extends PureComponent {
  render() {
    return (
      <div className="navbar-actionSection-lower-media">
        <span className="media-main-button">
          <div className="media-main-button-title">
            <span>MEDIA</span>
          </div>
        </span>
        <NavbarNavsMediaDropdnContent />
      </div>
    );
  }
}

export default NavbarNavsMedia;
