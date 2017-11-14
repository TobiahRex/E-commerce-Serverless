import React from 'react';
import { Link } from 'react-router';
import {
  MediaTop,
  MediaMid,
  MediaLow,
} from './components';

function NavbarNavs() {
  return (
    <div className="navbar-big__media-dropdown">
      <div className="media-dropdown__floating-media-container" data-ix="nav-b-media-hover">
        <MediaTop />
        <MediaMid />
        <MediaLow />
        <div className="floating-media-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
export default NavbarNavs;
