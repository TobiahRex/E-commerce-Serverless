import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { NavbarCartMainButton, NavbarCartDropdnContent } from './imports';

const { number, arrayOf, object, func } = PropTypes;

class NavbarCart extends Component {
  static propTypes = {
    qty: number.isRequired,
    products: arrayOf(object).isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();
    const productsDiff = isArrayEqual(nextProps.products, this.props.products);

    if (!_.isEqual(nextProps, this.props) || productsDiff) return true;
    return false;
  }
  render() {
    const { qty, products, editCartItem, deleteFromCart } = this.props;
    console.log('%cNavbar Cart: qty', 'background:red;', qty);

    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          products={products}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
          cartTotal={
            products.length ?
            products.reduce((acc, next) =>
              acc + (Number(next.price) * next.qty)
            , 0) : 0
          }
        />
      </div>
    );
  }
}
export default NavbarCart;
