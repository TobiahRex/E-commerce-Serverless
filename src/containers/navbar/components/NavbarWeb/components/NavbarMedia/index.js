import React from 'react';
import PropTypes from 'prop-types';
import {
  MediaTop,
  MediaMid,
  MediaLow,
} from './components';

function NavbarMedia({ renderKey, reRenderNavbar }) {
  return (
    <div className="navbar-big__media-dropdown" key={renderKey}>
      <div className="media-dropdown__floating-media-container" data-ix="nav-b-media-hover">
        <MediaTop reRenderNavbar={reRenderNavbar} />
        <MediaMid reRenderNavbar={reRenderNavbar} />
        <MediaLow reRenderNavbar={reRenderNavbar} />
        <div className="floating-media-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
const { number, func } = PropTypes;
NavbarMedia.propTypes = {
  renderKey: number.isRequired,
  reRenderNavbar: func.isRequired,
};
export default NavbarMedia;
