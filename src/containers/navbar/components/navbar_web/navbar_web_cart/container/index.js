import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),

    updateToGuestCart: updatedCartProducts =>
    dispatch(orderActions.updateToGuestCart(updatedCartProducts)),
  }),
)(NavbarUpper);

const NavbarUpperWithStateAndGraphQL = compose(
  graphql(UpdateToMemberCart, { name: 'UpdateToMemberCart' }),
)(NavbarCartWithState);

export default NavbarUpperWithStateAndGraphQL;
