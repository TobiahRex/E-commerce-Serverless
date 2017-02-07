import React, { PureComponent } from 'react';

import NavbarOptions from './navbarUpper/navbarOptions';
import NavbarUserAction from './navbarUpper/navbarUserActions';
import NavbarCart from './navbarCart';

class NavbarUpper extends PureComponent {
  render() {
    return (
      <div className="navbar actionSection upper">
        <NavbarOptions />
        <NavbarUserAction />
        <NavbarCart />
      </div>
    );
  }
}

export default NavbarUpper;
