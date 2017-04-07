import React, { Component, PropTypes } from 'react';

import NavbarNavsShopDropdnContent from './navbarNavs_shop_dropdn_content';

const dummyJuiceinfo = [{ // TODO - remove this dummy data.
  title: 'Fruitty Bamm Bamm',
  imageSrc: '../Images/nj2jp_juice_card_fbb.png',
  urlSuffix: 'fruity_bamm_bamm',
}, {
  title: 'French Vanilla Mocha',
  imageSrc: '../Images/nj2jp_juice_card_fvm.png',
  urlSuffix: 'french_vanilla_mocha',
}, {
  title: 'Keylime Pie',
  imageSrc: '../Images/nj2jp_juice_card_klp.png',
  urlSuffix: 'keylime_pie',
}, {
  title: 'Pina Colada',
  imageSrc: '../Images/nj2jp_juice_card_pc.png',
  urlSuffix: 'pina_colada',
}, {
  title: 'Fruitty Bamm Bamm',
  imageSrc: '../Images/nj2jp_juice_card_fbb.png',
  urlSuffix: 'fruity_bamm_bamm',
}, {
  title: 'Strawberries N\' Cream',
  imageSrc: '../Images/nj2jp_juice_card_fbb.png',
  urlSuffix: 'strawberries_n_cream',
}];

class NavbarNavsShop extends Component {
  static propTypes = {
    dropdownDisplay: PropTypes.bool.isRequired,
    toggleNavbarDropdown: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      dropdownDisplay: false,
    };
  }

  toggleNavbarDropdown = () => {
    this.setState({ dropdownDisplay: !this.state.dropdownDisplay });
  }

  render() {
    return (
      <div
        className="navbar-actionSection-lower-shop"
        onEnter={() => this.toggleNavbarDropdown()}
      >
        <span className="shop-main-button ">
          <div className="shop-main-button-title">
            <span>SHOP</span>
          </div>
        </span>
        <NavbarNavsShopDropdnContent
          popJuices={dummyJuiceinfo}
          dropdownDisplay={this.state.dropdownDisplay}
          toggleNavbarDropdown={this.toggleNavbarDropdown}
        />
      </div>
    );
  }
}

export default NavbarNavsShop;
