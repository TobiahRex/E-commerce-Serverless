import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { NavbarCartMainButton, NavbarCartDropdnContent } from './imports';
import orderActions from '../../../../../../redux/orders/';
import { UpdateToMemberCart } from '../../../../../../graphQL/mutations';

const { number, string, shape } = PropTypes;

class NavbarCart extends Component {
  static propTypes = {
    qty: number.isRequired,
    cartItems: shape({
      qty: number,
      strength: string,
      product: shape({
        title: string,
        sku: string,
        price: string,
        vendor: string,
        flavor: string,
        images: shape({
          purpose: string,
          url: string,
        }),
      }),
    }).isRequired,
  };

  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();
    const productsDiff = isArrayEqual(nextProps.products, this.props.products);

    if (!_.isEqual(nextProps, this.props) || productsDiff) return true;
    return false;
  }

  editCartItem = (e) => {
    let route = e.target.dataset.route;
    let id = e.target.dataset.id;
    if (!route) route = e.target.parentNode.dataset.route;
    if (!id) id = e.target.parentNode.dataset.id;
    this.props.push('/cart');
  }

  deleteFromCart = (e) => {
    const {
      updateToGuestCart,
      activeUser: { shopping: { cart } },
    } = this.props;

    let productId = e.target.dataset.id;
    if (!productId) productId = e.target.parentNode.dataset.id;

    const updatedCartProducts = cart.filter(({ id }) => id !== productId);
    updateToGuestCart(updatedCartProducts);
  }

  render() {
    const { qty, cartItems, editCartItem, deleteFromCart } = this.props;
    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          cartItems={cartItems}
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
const calculateQty = (loggedIn, guestCart, userProfile) => {
  const cart = loggedIn ? guestCart : userProfile.shopping.cart;
  if (!cart.length) return 0;
  return cart.reduce((accum, { qty }) => accum + qty, 0);
};

const NavbarCartWithState = connect(
  ({ locale, user, auth, orders }) => ({
    qty: calculateQty(auth.loggedIn, orders.cart, user.profile),
    activeUser: user.profile,
    activeLanguage: locale.activeLanguage,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),

    updateToGuestCart: updatedCartProducts =>
    dispatch(orderActions.updateToGuestCart(updatedCartProducts)),
  }),
)(NavbarCart);

const NavbarUpperWithStateAndGraphQL = compose(
  graphql(UpdateToMemberCart, { name: 'UpdateToMemberCart' }),
)(NavbarCartWithState);

export default NavbarUpperWithStateAndGraphQL;
