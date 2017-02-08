import React, { PureComponent } from 'react';

import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserAction from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

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
