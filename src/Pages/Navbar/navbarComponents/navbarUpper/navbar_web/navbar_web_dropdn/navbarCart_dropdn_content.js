import React, { PureComponent } from 'react';

import NavbarCartPromotion from './navbarCart_dropdn_promotion';
import NavbarCartRecentadd from './navbarCart_dropdn_recentadd';
import NavbarCartTotalPrice from './navbarCart_dropdn_totalPrice';
import NavbarCartActionLinks from './navbarCart_dropdn_actionLinks';
import NavbarCartProducts from './navbarCart_dropdn_products';

class NavbarCartDropdnContent extends PureComponent {
  render() {
    const products = {
      image: 'https://s3-ap-southeast-2.amazonaws.com/nj2jp/keyLimPie_zero_tightCrop_smallSize.jpg',
      title: 'Keylime Pie',
      quantity: 3,
      price: 30,
      nicotine: 6,
    };

    return (
      <span className="dropdown-content">
        <div className="container">
          <NavbarCartPromotion />
          <NavbarCartRecentadd />
          <NavbarCartProducts
            products={products}
          />
          <NavbarCartTotalPrice />
          <NavbarCartActionLinks />
        </div>
      </span>
    );
  }
}

export default NavbarCartDropdnContent;

/* TODO
1. Remove dummy data.
*/
