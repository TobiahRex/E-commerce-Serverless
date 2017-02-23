import React, { PureComponent } from 'react';

import NavbarNavsShopDropdnTopthird from './navbarNavs_shop_dropdn_topThird';
import NavbarNavsShopDropdnMidthird from './navbarNavs_shop_dropdn_midThird';
import NavbarNavsShopDropdnBottomthird from './navbarNavs_shop_dropdn_bottomThird';

class NavbarNavsShopDropdnContent extends PureComponent {
  render() {
    return (
      <span className="shop-dropdown-content">
        <span className="shop-dropdown-content-parent">
          <NavbarNavsShopDropdnTopthird />
          <NavbarNavsShopDropdnMidthird />
          <NavbarNavsShopDropdnBottomthird />
        </span>
      </span>
    );
  }
}

export default NavbarNavsShopDropdnContent;
