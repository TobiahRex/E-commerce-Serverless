import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const propTypes = {
  activePage: PropTypes.string,
};
NavbarMobileNavTitle.propTypes = propTypes;

export default function NavbarMobileNavTitle({ activePage }) {
  console.info('location: ', window.location.pathName);
  return (
    <div className="navbar-mobile-nav-title">
      <h5>{activePage}</h5>
    </div>
  );
}
