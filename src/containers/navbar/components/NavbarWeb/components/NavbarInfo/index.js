import React from 'react';
import PropTypes from 'prop-types';
import {
  InfoLeft,
  InfoRight,
} from './components';

function NavbarInfo({ renderKey, reRenderNavbar }) {
  return (
    <div className="navbar-big__info-dropdown" key={renderKey}>
      <div className="info-dropdown__floating-info-container" data-ix="nav-b-info-hover">
        <InfoLeft reRenderNavbar={reRenderNavbar} />
        <InfoRight reRenderNavbar={reRenderNavbar} />
        <div className="floating-info-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
const { number, func } = PropTypes;
NavbarInfo.propTypes = {
  renderKey: number.isRequired,
  reRenderNavbar: func.isRequired,
};
export default NavbarInfo;
