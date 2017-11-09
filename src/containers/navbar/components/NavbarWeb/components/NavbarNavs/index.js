import React from 'react';
import {
  NavbarNavHdr,
} from './';

function NavbarNavs() {
  return (
    <div className="action-section__navbar-action-bottom">
      <div className="navbar-action-bottom__nav-container">
        <NavbarNavHdr
          link="/juices"
          header="navbar.nav.juices.title"
          ix="nav-b-juice-hover"
        />
        <NavbarNavHdr header="navbar.nav.media.title" ix="nav-b-media-hover" />
        <NavbarNavHdr header="navbar.nav.info.title" ix="nav-b-info-hover" />
      </div>
    </div>
  );
}
export default NavbarNavs;
