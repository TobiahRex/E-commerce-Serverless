import React from 'react';

import NavbarUpper from './navbarUpper';
import NavbarLower from './navbarLower';

const propTypes = {
};

function NavbarActionSection() {
  return (
    <div className="navbar-actionSection">
      <NavbarUpper />
      <NavbarLower />
    </div>
  );
}
NavbarActionSection.propTypes = propTypes;
export default NavbarActionSection;
