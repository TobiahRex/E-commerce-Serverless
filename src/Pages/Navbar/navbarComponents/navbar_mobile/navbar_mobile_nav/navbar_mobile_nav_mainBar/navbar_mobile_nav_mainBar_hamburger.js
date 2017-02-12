import React, { PropTypes } from 'react';

const propTypes = {
  mobileNavbarExpanded: PropTypes.bool,
};
NavbarMobileNavTitle.propTypes = propTypes;

export default function NavbarMobileNavTitle({ mobileNavbarExpanded }) {
  return (
    <div className="navbar-mobile-nav-hamburger">
      <div className="navbar-mobile-nav-hamburger-icon">
        <a
          onClick={event.preventDefault}
          href=""
          className="navbar-mobile-nav-hamburger-icon-button"
        >
          <span />
        </a>
      </div>
    </div>
  );
}

/* NOTE
- I'm not sure this prop is necessary.  First see if you can build the hamburger transition only with SASS.

*/
