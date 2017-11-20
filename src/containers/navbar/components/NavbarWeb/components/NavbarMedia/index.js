import React from 'react';
import PropTypes from 'prop-types';
import {
  MediaTop,
  MediaMid,
  MediaLow,
} from './components';

function NavbarMedia({ renderKey }) {
  return (
    <div className="navbar-big__media-dropdown" key={renderKey}>
      <div className="media-dropdown__floating-media-container" data-ix="nav-b-media-hover">
        <MediaTop />
        <MediaMid />
        <MediaLow />
        <div className="floating-media-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
NavbarMedia.propTypes = {
  renderKey: PropTypes.number.isRequired,
};
export default NavbarMedia;
