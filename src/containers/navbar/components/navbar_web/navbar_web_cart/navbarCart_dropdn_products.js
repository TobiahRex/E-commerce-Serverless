import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import {
  NavbarCartProductsCardImage,
  NavbarCartProductsCardInfo,
  NavbarCartProductsCardActions,
} from './imports';

const {
  arrayOf,
  object,
  func,
  number,
} = PropTypes;

class NavbarCartProducts extends Component {
  static propTypes = {
    cartTotal: number.isRequired,
    cartProducts: arrayOf(object).isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  };
  emptyCart = () => (
    <div className="products-list-empty">
      Your Cart Is Currently Empty
    </div>
  );
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }
  filterImages = (images) => {
    const helper = ({ purpose }) => purpose === 'card';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }
  renderProducts = (products) => {
    const productEL = products.map((juiceObj) => {
      const {
        id,
        title,
        qty,
        price,
        strength,
        images,
        routeTag,
      } = juiceObj;
      console.warn('juiceObj: ', juiceObj);
      return (
        <li
          className="products-list-card"
          key={new Buffer(`${routeTag}${title}`, 'utf8').toString('base64')}
        >
          <NavbarCartProductsCardImage imageUrl={this.filterImages(images)} title={title} />
          <NavbarCartProductsCardInfo
            title={title}
            qty={qty}
            price={price}
            strength={strength}
          />
          <NavbarCartProductsCardActions
            juiceId={id}
            routeTag={routeTag}
            editCartItem={this.props.editCartItem}
            deleteFromCart={this.props.deleteFromCart}
          />
        </li>
      );
    });
    console.log('productEl: ', productEL);
    return productEL;
  }
  render() {
    return (
      <div>
        <div className="products">
          <ul className="products-list">
            {this.props.cartProducts.length
              ? this.renderProducts(this.props.cartProducts)
              : this.emptyCart()}
          </ul>
        </div>
        <div className="total-price">
          <span className="total-price-title">Total Price</span>
          <span className="total-price-amount">
            <FontAwesome name="usd" />&nbsp;
            {this.props.cartTotal || '00'}.00
          </span>
        </div>
      </div>
    );
  }
}
export default NavbarCartProducts;
