import React, { PureComponent } from 'react';

import NavbarNavsShopDropdnContent from './navbarNavs_shop_dropdn_content';

class NavbarNavsShop extends PureComponent {
  render() {
    return (
      <div className="navbar-actionSection-lower-shop">
        <span className="shop-main-button">
          <div className="shop-main-button-title">
            <span>SHOP</span>
          </div>
        </span>
        <NavbarNavsShopDropdnContent />
      </div>
    );
  }
}

export default NavbarNavsShop;
