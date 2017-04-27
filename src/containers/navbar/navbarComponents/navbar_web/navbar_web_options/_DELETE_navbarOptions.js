import React from 'react';
import PropTypes from 'prop-types';
/* TODO:
1. Pass down via props the respective class methods shown below.
- Lang change: Will set a flag in state that all SMART components will be receiving to determine how to render the language info.

- Currency Change: <Same as lang change.>

*/

function NavbarOptions(props) {
  return (
    <div className="navbar-actionSection-upper-options">
      {props.children}
    </div>
  );
}
const { objectOf, any } = PropTypes;
NavbarOptions.propTypes = {
  children: objectOf(any).isRequired,
};
export default NavbarOptions;
