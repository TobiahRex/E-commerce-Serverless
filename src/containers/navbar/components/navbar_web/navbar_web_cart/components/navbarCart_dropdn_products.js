import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import {
  NavbarCartProductsCardImage,
  NavbarCartProductsCardInfo,
  NavbarCartProductsCardActions,
} from '../container/imports';

const {
  func,
  object,
  number,
  arrayOf,
} = PropTypes;

class NavbarCartProducts extends Component {
  static propTypes = {
    cartItems: arrayOf(object).isRequired,
    cartTotal: number.isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  };
  emptyCart = () => (
    <div className="products-list-empty">
      Your Cart Is Currently Empty
    </div>
  );
  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();
    const productsDiff = isArrayEqual(nextProps.cartItems, this.props.cartItems);

    if (!_.isEqual(nextProps, this.props) || productsDiff) return true;
    return false;
  }
  filterImages = (images) => {
    if (!images.length) return '';

    const helper = ({ purpose }) => purpose === 'card';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }
  renderCartItems = productItems =>
  productItems.map((item) => {
    console.log('%citem', 'background:orange;', item);

    const {
      id,
      qty,
      title,
      price,
      strength,
      images,
      routeTag,
    } = item;
    return (
      <li
        className="products-list-card"
        key={`${id}-${strength}`}
      >
        <NavbarCartProductsCardImage
          imageUrl={this.filterImages(images)}
          title={title}
        />

        <NavbarCartProductsCardInfo
          qty={qty}
          title={title}
          price={price}
          strength={strength}
        />

        <NavbarCartProductsCardActions
          productId={id}
          routeTag={routeTag}
          editCartItem={this.props.editCartItem}
          deleteFromCart={this.props.deleteFromCart}
        />
      </li>
    );
  });
  render() {
    return (
      <div>
        <div className="products">
          <ul className="products-list">
            {this.props.cartItems.length
              ? this.renderCartItems(this.props.cartItems)
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
