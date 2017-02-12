import React, { PropTypes } from 'react';

const propTypes = {
  activePage: PropTypes.string,
};
NavbarMobileNavTitle.propTypes = propTypes;

export default function NavbarMobileNavTitle({ activePage }) {
  return (
    <div className="navbar-mobile-nav-title">
      <h5>{activePage}</h5>
    </div>
  );
}
