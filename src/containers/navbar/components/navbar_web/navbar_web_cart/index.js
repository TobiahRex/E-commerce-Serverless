import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { NavbarCartMainButton, NavbarCartDropdnContent } from './imports';

const { number, arrayOf, object, func } = PropTypes;

class NavbarCart extends Component {
  static propTypes = {
    qty: number.isRequired,
    cartProducts: arrayOf(object).isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  };
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }
  render() {
    const { qty, cartProducts, editCartItem, deleteFromCart } = this.props;

    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          cartProducts={cartProducts}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
          cartTotal={
            cartProducts.length ?
            cartProducts.reduce((acc, { price }) => acc + Number(price), 0) : 0
          }
        />
      </div>
    );
  }
}
export default NavbarCart;
