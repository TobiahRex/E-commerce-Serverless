import React, { PropTypes, PureComponent } from 'react';


/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.

2. "Recommend Another Juice Line" needs to send the user to the "/contact_us" page.

*/

class NavbarNavsShopDropdnMidthird extends PureComponent {
  static propTypes = {
    popular_juices: PropTypes.arrayOf(PropTypes.object),
  }

  renderJuiceCards = (juices) => {
    if (juices.length) {
      return juices.map((juice, i) =>
      <div className="shop-dropdown-content-midThird-juices-card">
        <div className="shop-dropdown-content-midThird-juices-card-title">
          <h4>{juice.title}</h4>
        </div>
        <div className="shop-dropdown-content-midThird-juices-card-image">
          <img className="shop-dropdown-content-midThird-juices-card-image-src" src={juice.image} alt="juice-pohoto" />
        </div>
      </div>
      );
    }
  }

  render() {
    return (
      <div className="shop-dropdown-content-midThird">
        <div className="shop-dropdown-content-midThird-title">
          <h2>
            <i>Switch Juice</i>
          </h2>
        </div>
        <div className="shop-dropdown-content-midThird-juices">
          <div className="shop-dropdown-content-midThird-juices-card">
            <div className="shop-dropdown-content-midThird-juices-card-title">
              <h4>French Vanilla Mocha</h4>
            </div>
            <div className="shop-dropdown-content-midThird-juices-card-image" />
          </div>
          <div className="shop-dropdown-content-midThird-juices-card">
            <div className="shop-dropdown-content-midThird-juices-card-title">
              <h4>Keylime Pie</h4>
            </div>
            <div className="shop-dropdown-content-midThird-juices-card-image" />
          </div>
          <div className="shop-dropdown-content-midThird-juices-card">
            <div className="shop-dropdown-content-midThird-juices-card-title">
              <h4>Pina Colada</h4>
            </div>
            <div className="shop-dropdown-content-midThird-juices-card-image" />
          </div>
          <div className="shop-dropdown-content-midThird-juices-card">
            <div className="shop-dropdown-content-midThird-juices-card-title">
              <h4>Fruity Bamm Bamm</h4>
            </div>
            <div className="shop-dropdown-content-midThird-juices-card-image" />
          </div>
          <div className="shop-dropdown-content-midThird-juices-card">
            <div className="shop-dropdown-content-midThird-juices-card-title">
              <h4>Strawberries {('N\'')} Cream</h4>
            </div>
            <div className="shop-dropdown-content-midThird-juices-card-image" />
          </div>
          <div className="shop-dropdown-content-midThird-juices-card">
            <div className="shop-dropdown-content-midThird-juices-card-title">
              <h4>Papple Berry</h4>
            </div>
            <div className="shop-dropdown-content-midThird-juices-card-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarNavsShopDropdnMidthird;
