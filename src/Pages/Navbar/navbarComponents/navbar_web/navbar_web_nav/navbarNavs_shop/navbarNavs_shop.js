import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
  static styles = {
    hide: 'hide',
    show: '',
  }
  constructor(props) {
    super(props);

    this.state = {
      dropdownDisplay: false,
    };
  }

  toggleNavbarDropdown = (e) => {
    console.warn('ddn element = ', e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementByClassName('shop-dropdown-content').style.display = 'none';
  }

  render() {
    return (
      <div className="navbar-actionSection-lower-shop" >
        <Link
          to="/juices"
          className="shop-main-button"
        >
          <div className="shop-main-button-title">
            <span>SHOP</span>
          </div>
        </Link>

        <NavbarNavsShopDropdnContent
          popJuices={dummyJuiceinfo}
          toggleNavbarDropdown={this.toggleNavbarDropdown}
        />
      </div>
    );
  }
}

export default NavbarNavsShop;
