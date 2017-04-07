import React, { PropTypes } from 'react';

import NavbarUpper from './navbarUpper';
import NavbarLower from './navbarLower';

const propTypes = {
  activeUser: PropTypes.objectOf(PropTypes.any).isRequired,
  logoutUser: PropTypes.func.isRequired,
  dropdownDisplay: PropTypes.bool.isRequired,
  toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarActionSection(props) {
  return (
    <div className="navbar-actionSection">
      <NavbarUpper
        activeUser={props.activeUser}
        logoutUser={props.logoutUser}
      />
      <NavbarLower
        toggleNavbarDropdown={props.toggleNavbarDropdown}
        dropdownDisplay={props.dropdownDisplay}
      />
    </div>
  );
}
NavbarActionSection.propTypes = propTypes;
export default NavbarActionSection;
