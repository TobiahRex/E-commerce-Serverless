import React, { PureComponent } from 'react';

import NavbarLowerShop from './navbar_web_nav/navbarNavs_shop/navbarNavs_shop';
import NavbarLowerMedia from './navbar_web_nav/navbarNavs_media/navbarNavs_media';
import NavbarLowerInfo from './navbar_web_nav/navbarNavs_info/navbarNavs_info';

class NavbarLower extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <div className="navbar-actionSection-lower">
        <NavbarLowerShop />
        <NavbarLowerMedia />
        <NavbarLowerInfo />
      </div>
    );
  }
}

export default NavbarLower;
