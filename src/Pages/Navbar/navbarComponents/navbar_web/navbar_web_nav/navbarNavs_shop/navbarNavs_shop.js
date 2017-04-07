import React, { PureComponent, PropTypes } from 'react';

import NavbarNavsShopDropdnContent from './navbarNavs_shop_dropdn_content';

class NavbarNavsShop extends PureComponent {
  static propTypes = {
    dropdownDisplay: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className="navbar-actionSection-lower-shop">
        <span className="shop-main-button ">
          <div className="shop-main-button-title">
            <span>SHOP</span>
          </div>
        </span>
        <NavbarNavsShopDropdnContent dropdownDisplay={this.props.dropdownDisplay} />
      </div>
    );
  }
}

export default NavbarNavsShop;
