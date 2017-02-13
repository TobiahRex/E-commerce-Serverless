import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const propTypes = {
  activePage: PropTypes.string,
};
NavbarMobileNavTitle.propTypes = propTypes;

export default function NavbarMobileNavTitle() {
  /*
  1. remove the forward slash. filter with regex expression
  2. split on underscore.
  3. iterate over length, and for each item,
  if the word is "and" replaced with &
  capitalize its first letter.
  4. return and join on spaces.
  */

  return (
    <div className="navbar-mobile-nav-title">
      <h5>
        {}
      </h5>
    </div>
  );
}
