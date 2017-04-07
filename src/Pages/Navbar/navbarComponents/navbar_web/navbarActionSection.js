import React, { PropTypes } from 'react';

import NavbarUpper from './navbarUpper';
import NavbarLower from './navbarLower';

const propTypes = {
  toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarActionSection({ toggleNavbarDropdown }) {
  return (
    <div className="navbar-actionSection">
      <NavbarUpper />
      <NavbarLower toggleNavbarDropdown={toggleNavbarDropdown} />
    </div>
  );
}
NavbarActionSection.propTypes = propTypes;
export default NavbarActionSection;
