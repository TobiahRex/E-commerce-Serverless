import React from 'react';
import PropTypes from 'prop-types';
import {
  InfoLeft,
  InfoRight,
} from './components';

function NavbarInfo({ renderKey }) {
  return (
    <div className="navbar-big__info-dropdown" key={renderKey}>
      <div className="info-dropdown__floating-info-container" data-ix="nav-b-info-hover">
        <InfoLeft />
        <InfoRight />
        <div className="floating-info-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
NavbarInfo.propTypes = {
  renderKey: PropTypes.number.isRequired,
};
export default NavbarInfo;
