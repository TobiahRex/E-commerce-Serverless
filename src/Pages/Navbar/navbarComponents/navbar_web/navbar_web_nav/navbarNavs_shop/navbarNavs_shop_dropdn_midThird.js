import React, { PropTypes } from 'react';

import NavbarNavsShopDropdnJuiceCards from './navbarNavs_shop_dropdn_midThird_juiceCard';
/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.

*/
const propTypes = {
  popJuices: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarNavsShopDropdnMidthird(props) {
  function renderJuiceCards(juices) {
    return juices.map((juiceObj, i) => (
      <NavbarNavsShopDropdnJuiceCards
        key={`shop-dropdown-content-midThird-juices-${i + 1}`}
        juiceInfo={juiceObj}
        toggleNavbarDropdown={this.props.toggleNavbarDropdown}
      />),
    );
  }

  return (
    <div className="shop-dropdown-content-midThird">
      <div className="shop-dropdown-content-midThird-title">
        <h2>
          <i>Switch Juice</i>
        </h2>
      </div>
      <div className="shop-dropdown-content-midThird-juices">
        {renderJuiceCards(props.popJuices)}
      </div>
    </div>
  );
}
NavbarNavsShopDropdnMidthird.propTypes = propTypes;
export default NavbarNavsShopDropdnMidthird;
