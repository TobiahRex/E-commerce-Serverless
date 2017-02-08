import React, { PropTypes, PureComponent } from 'react';


/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.

2. "Recommend Another Juice Line" needs to send the user to the "/contact_us" page.

*/

class NavbarNavsShopDropdnJuiceCards extends PureComponent {
  static propTypes = {
    popular_juices: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <div
        className="shop-dropdown-content-midThird-juices-card"
      >
        <div className="shop-dropdown-content-midThird-juices-card-title">
          <h4>{juice.title}</h4>
        </div>
        <div className="shop-dropdown-content-midThird-juices-card-image">
          <img
            className="shop-dropdown-content-midThird-juices-card-image-src"
            src={juice.image} alt={`${juice.image} juice`}
          />
        </div>
      </div>
    );
  }
}

export default NavbarNavsShopDropdnJuiceCards;
