import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import { Link } from 'react-router';
import NavbarNavsShopDropdnContent from './navbarNavs_shop_dropdn_content';

class NavbarNavsShop extends Component {
  static styles = {
    hide: 'hide',
    show: '',
  }
  static propTypes = {
    popJuices: PropTypes.objectOf(PropTypes.any).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      dropdownDisplay: false,
    };
  }

  toggleNavbarDropdown = (urlSuffix) => {
    // document.getElementsByClassName('shop-dropdown-content')[0].style.display = 'none';
    this.props.push(`/juice/${urlSuffix}`); //eslint-disable-line
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
          popJuices={this.props.popJuices}
          toggleNavbarDropdown={this.toggleNavbarDropdown}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => ({
  popJuices: products.popJuices,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...routerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavbarNavsShop);
