import React, { PureComponent } from 'react';

import NavbarOptions from './navbarUpper/navbar_web/navbarOptions';
import NavbarUserAction from './navbarUpper/navbar_web/navbarUserActions';
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
