/* eslint react/no-unused-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarSignedIn,
  NavbarNotSignedIn,
} from './components';

function Navbar({ activeUser }) {
  return (
    <div className="navbar__mobile--actions">
      {
        activeUser && !!activeUser._id ?
          <NavbarSignedIn profile={activeUser} /> :
          <NavbarNotSignedIn />
      }
    </div>
  );
}
const { objectOf, any } = PropTypes;
Navbar.propTypes = {
  activeUser: objectOf(any),
};
Navbar.defaultProps = {
  activeUser: {},
};
export default Navbar;
