import React, { PropTypes, PureComponent } from 'react';

import NavbarNavsShopDropdnJuiceCards from './navbarNavs_shop_dropdn_midThird_juiceCard';
/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.

*/

class NavbarNavsShopDropdnMidthird extends PureComponent {
  static propTypes = {
    popular_juices: PropTypes.arrayOf(PropTypes.object),
  }

  renderJuiceCards = (juices) => {
    if (juices.length) {
      return juices.map((juiceObj, i) =>
        <NavbarNavsShopDropdnJuiceCards
          key={`shop-dropdown-content-midThird-juices-${i + 1}`}
          juiceInfo={juiceObj}
        />
      );
    }
    return '<JUICE CARDS>';
  }

  render() {
    const dummyJuiceinfo = [{ // TODO - remove this dummy data.
      title: 'Fruitty Bamm Bamm',
      imageSrc: './Images/nj2jp_juice_card_fbb.png',
      urlSuffix: 'fruity_bamm_bamm',
    }, {
      title: 'French Vanilla Mocha',
      imageSrc: './Images/nj2jp_juice_card_fvm.png',
      urlSuffix: 'french_vanilla_mocha',
    }, {
      title: 'Keylime Pie',
      imageSrc: './Images/nj2jp_juice_card_klp.png',
      urlSuffix: 'keylime_pie',
    }, {
      title: 'Pina Colada',
      imageSrc: './Images/nj2jp_juice_card_pc.png',
      urlSuffix: 'pina_colada',
    }, {
      title: 'Fruitty Bamm Bamm',
      imageSrc: './Images/nj2jp_juice_card_fbb.png',
      urlSuffix: 'fruity_bamm_bamm',
    }, {
      title: 'Strawberries N\' Cream',
      imageSrc: './Images/nj2jp_juice_card_fbb.png',
      urlSuffix: 'strawberries_n_cream',
    }];

    return (
      <div className="shop-dropdown-content-midThird">
        <div className="shop-dropdown-content-midThird-title">
          <h2>
            <i>Switch Juice</i>
          </h2>
        </div>
        <div className="shop-dropdown-content-midThird-juices">
          {this.renderJuiceCards(dummyJuiceinfo)}
        </div>
      </div>
    );
  }
}

export default NavbarNavsShopDropdnMidthird;
