import React, { PropTypes } from 'react';

import NavbarNavsShopDropdnTopthird from './navbarNavs_shop_dropdn_topThird';
import NavbarNavsShopDropdnMidthird from './navbarNavs_shop_dropdn_midThird';
import NavbarNavsShopDropdnBottomthird from './navbarNavs_shop_dropdn_bottomThird';

const propTypes = {
  popJuices: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarNavsShopDropdnContent(props) {
  const { popJuices, toggleNavbarDropdown } = props;

  return (
    <span className="shop-dropdown-content" >
      <span className="shop-dropdown-content-parent">
        <NavbarNavsShopDropdnTopthird />
        <NavbarNavsShopDropdnMidthird
          popJuices={popJuices}
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
