import React from 'react';
import {
  InfoLeft,
  InfoRight,
} from './components';

function NavbarInfo() {
  return (
    <div className="navbar-big__info-dropdown">
      <div className="info-dropdown__floating-info-container" data-ix="nav-b-info-hover">
        <InfoLeft />
        <InfoRight />
        <div className="floating-info-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
export default NavbarInfo;
