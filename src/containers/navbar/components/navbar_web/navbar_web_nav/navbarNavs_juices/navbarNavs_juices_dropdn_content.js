import React from 'react';
import PropTypes from 'prop-types';

import NavbarNavsJuicesDropdnTopthird from './navbarNavs_juices_dropdn_topThird';
import NavbarNavsJuicesDropdnMidthird from './navbarNavs_juices_dropdn_midThird';
import NavbarNavsJuicesDropdnBottomthird from './navbarNavs_juices_dropdn_bottomThird';

const { arrayOf, object, func } = PropTypes;

const propTypes = {
  popularProducts: arrayOf(object),
  toggleNavbarDropdown: func.isRequired,
};

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
NavbarNavsJuicesDropdnContent.propTypes = propTypes;
NavbarNavsJuicesDropdnContent.defaultProps = {
  popularProducts: [],
};
export default NavbarNavsJuicesDropdnContent;
