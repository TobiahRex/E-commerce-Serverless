import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import NavbarNavsShopDropdnContent from './navbarNavs_shop_dropdn_content';

class NavbarNavsShop extends Component {
  static styles = {
    hide: 'hide',
    show: '',
  }
  static propTypes = {
    popJuices: PropTypes.arrayOf(PropTypes.any).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      dropdownDisplay: false,
    };
  }

  toggleNavbarDropdown = (urlSuffix) => {
    this.props.push(`/juice/${urlSuffix}`);
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
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarNavsShop);
