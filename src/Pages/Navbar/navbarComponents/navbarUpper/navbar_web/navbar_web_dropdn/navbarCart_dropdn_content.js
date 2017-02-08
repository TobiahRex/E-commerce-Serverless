import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import NavbarCartPromotion from './navbarCart_dropdn_promotion';
import NavbarCartRecentadd from './navbarCart_dropdn_recentadd';
import NavbarCartTotalPrice from './navbarCart_dropdn_totalPrice';
import NavbarCartActionLinks from './navbarCart_dropdn_actionLinks';
import NavbarCartProducts from './navbarCart_dropdn_products';

class NavbarCartDropdnContent extends PureComponent {
  render() {
    return (
      <span className="dropdown-content">
        <div className="container">
          <NavbarCartPromotion />
          <NavbarCartRecentadd />
          <NavbarCartProducts />
          <NavbarCartTotalPrice />
          <NavbarCartActionLinks />
        </div>
      </span>
    );
  }
}

export default NavbarCartDropdnContent;
