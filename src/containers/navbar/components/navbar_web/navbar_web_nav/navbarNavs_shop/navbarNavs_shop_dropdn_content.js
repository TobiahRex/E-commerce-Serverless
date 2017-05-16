import React, { PropTypes } from 'react';

import NavbarNavsShopDropdnTopthird from './navbarNavs_shop_dropdn_topThird';
import NavbarNavsShopDropdnMidthird from './navbarNavs_shop_dropdn_midThird';
import NavbarNavsShopDropdnBottomthird from './navbarNavs_shop_dropdn_bottomThird';

const propTypes = {
  popularProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarNavsShopDropdnContent(props) {
  const { popularProducts, toggleNavbarDropdown } = props;

  return (
    <span className="shop__ddn-content" >
      <span className="ddn-content__parent">
        <NavbarNavsShopDropdnTopthird />
        <NavbarNavsShopDropdnMidthird
          popularProducts={popularProducts}
          toggleNavbarDropdown={toggleNavbarDropdown}
        />
        <NavbarNavsShopDropdnBottomthird
          toggleNavbarDropdown={toggleNavbarDropdown}
        />
      </span>
    </span>
  );
}

NavbarNavsShopDropdnContent.propTypes = propTypes;
export default NavbarNavsShopDropdnContent;
