import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import NavbarNavsShopDropdnContent from './navbarNavs_shop_dropdn_content';

const { arrayOf, shape, func, number, string } = PropTypes;

class NavbarNavsShop extends Component {
  static styles = {
    hide: 'hide',
    show: '',
  }
  static propTypes = {
    popularProducts: arrayOf(
      shape({
        _id: string,  // MongoID (casted from ObjectID).
        product: shape({
          mainTitle: string,
          title: string,
          price: string,
          sku: string,
          sizes: arrayOf(string),
          nicotine_strengths: arrayOf(string),
          images: arrayOf(
            shape({
              purpose: string,
              url: string,
            })),
          routeTag: string,
          vendor: string,
          blurb: string,
          quantities: shape({
            available: number,
            in_cart: number,
          }),
        }),
        reviews: arrayOf(
          shape({
            reviews_id: string,
            user_id: string,
          }),
        ),
      })),
    push: func.isRequired,
  }
  static defaultProps = {
    popularProducts: [],
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
          popularProducts={this.props.popularProducts}
          toggleNavbarDropdown={this.toggleNavbarDropdown}
        />
      </div>
    );
  }
}
export default connect(({ products }) => ({
  popularProducts: products.popularProducts,
}), dispatch => ({
  push: location => dispatch(push(location)),
}))(NavbarNavsShop);
