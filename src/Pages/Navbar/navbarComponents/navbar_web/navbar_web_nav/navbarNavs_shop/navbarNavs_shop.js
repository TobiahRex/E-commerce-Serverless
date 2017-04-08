import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
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

  toggleNavbarDropdown = (urlSuffix) => {
    // document.getElementsByClassName('shop-dropdown-content')[0].style.display = 'none';
    this.props.push(`/juices/${urlSuffix}`); //eslint-disable-line
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
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...routerActions }, dispatch);

export default connect(null, mapDispatchToProps)(NavbarNavsShop);
