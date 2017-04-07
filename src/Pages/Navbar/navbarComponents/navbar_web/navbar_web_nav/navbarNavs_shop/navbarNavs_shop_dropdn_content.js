import React, { PureComponent, PropTypes } from 'react';

import NavbarNavsShopDropdnTopthird from './navbarNavs_shop_dropdn_topThird';
import NavbarNavsShopDropdnMidthird from './navbarNavs_shop_dropdn_midThird';
import NavbarNavsShopDropdnBottomthird from './navbarNavs_shop_dropdn_bottomThird';

class NavbarNavsShopDropdnContent extends PureComponent {
  static propTypes = {
    dropdownDisplay: PropTypes.bool.isRequired,
    hideNavbarDropdown: PropTypes.func.isRequired,
  }

  render() {
    const { dropdownDisplay } = this.props;
    const display = dropdownDisplay ? 'block' : 'none';

    return (
      <span className="shop-dropdown-content" style={{ display }}>
        <span className="shop-dropdown-content-parent">
          <NavbarNavsShopDropdnTopthird />
          <NavbarNavsShopDropdnMidthird />
          <NavbarNavsShopDropdnBottomthird hideNavbarDropdown={this.hideNavbarDropdown} />
        </span>
      </span>
    );
  }
}

export default NavbarNavsShopDropdnContent;
