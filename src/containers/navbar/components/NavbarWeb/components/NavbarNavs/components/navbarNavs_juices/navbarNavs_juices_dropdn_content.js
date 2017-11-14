import React from 'react';
import PropTypes from 'prop-types';

import NavbarNavsJuicesDropdnTopthird from './navbarNavs_juices_dropdn_topThird';
import NavbarNavsJuicesDropdnMidthird from './navbarNavs_juices_dropdn_midThird';
import NavbarNavsJuicesDropdnBottomthird from './navbarNavs_juices_dropdn_bottomThird';

function NavbarNavsJuicesDropdnContent(props) {
  const { popularProducts, toggleNavbarDropdown } = props;

  return (
    <span className="shop__ddn-content" >
      <span className="ddn-content__parent">
        <NavbarNavsJuicesDropdnTopthird />
        <NavbarNavsJuicesDropdnMidthird
          popularProducts={popularProducts}
          toggleNavbarDropdown={toggleNavbarDropdown}
        />
        <NavbarNavsJuicesDropdnBottomthird
          toggleNavbarDropdown={toggleNavbarDropdown}
        />
      </span>
    </span>
  );
}
const { arrayOf, object, func } = PropTypes;
NavbarNavsJuicesDropdnContent.propTypes = {
  popularProducts: arrayOf(object),
  toggleNavbarDropdown: func.isRequired,
};
NavbarNavsJuicesDropdnContent.defaultProps = { popularProducts: [] };
export default NavbarNavsJuicesDropdnContent;
