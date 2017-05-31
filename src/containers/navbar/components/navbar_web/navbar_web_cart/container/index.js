import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { NavbarCartMainButton, NavbarCartDropdnContent } from './imports';
import orderActions from '../../../../../../redux/orders/';
import userActions from '../../../../../../redux/user/';
import { DeleteFromMemberCart } from '../../../../../../graphQL/mutations';
import { FetchMultipleProducts } from '../../../../../../graphQL/queries';

const { number, string, shape, func, arrayOf, objectOf, object, any } = PropTypes;

class NavbarCart extends Component {
  static propTypes = {
    qty: number.isRequired,
    push: func.isRequired,
    guestCart: arrayOf(object),
    saveProfile: func.isRequired,
    updateToGuestCart: func.isRequired,
    DeleteFromMemberCart: func.isRequired,
    data: shape({
      FetchUserProfile: shape({
        qty: number,
        strength: number,
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
      }),
    }),
    activeUser: shape({
      _id: string,
      shopping: shape({
        cart: arrayOf(shape({
          qty: number,
          strength: number,
          product: string,
        })),
      }),
      name: objectOf(any),
      pictures: objectOf(any),
      authentication: objectOf(any),
      contactInfo: objectOf(any),
      permissions: objectOf(any),
      userStory: objectOf(any),
      marketHero: objectOf(any),
      socialProfileBlob: objectOf(any),
    }),
  }
  static defaultProps = {
    data: null,
    guestCart: null,
    activeUser: null,
  }

  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty(),

      reduxCart = isArrayEqual(nextProps.guestCart, this.props.guestCart);

    // data.FetchMultipleProducts will only exist if ApolloClient received non-null data.
    // 1. If data was returned before, and now, compare and evaluate.
    // 2. If data was not returned before, but now it has, automatically re-render.
    let dbCart;
    if (this.props.data) {                                                 // 1.
      dbCart = isArrayEqual(nextProps.data.FetchMultipleProducts, this.props.data.FetchMultipleProducts);
    } else if (!this.props.data && nextProps.data) { // 2.
      return true;
    }

    if (!_.isEqual(nextProps, this.props) || reduxCart || dbCart) return true;
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
      guestCart,
      activeUser,
      saveProfile,
      updateToGuestCart,
    } = this.props;

    let productId = e.target.dataset.id;
    if (!productId) productId = e.target.parentNode.dataset.id;

    if (activeUser) {
      this.props.DeleteFromMemberCart({
        variables: {
          productId,
          userId: activeUser._id,
        },
      })
      .then(({ data: { DeleteFromMemberCart: updatedUser } }) => {
        saveProfile(updatedUser);
      });
    } else {
      updateToGuestCart(
        guestCart.filter(({ _id }) => _id !== productId),
      );
    }
  }

  render() {
    const {
      qty,
      guestCart,
      data,
    } = this.props;

    let cartItems = [];
    if (!data && guestCart.length) {
      cartItems = guestCart;
    } else if (!data && !guestCart.length) {
      cartItems = [];
    } else if (data.FetchMultipleProducts) {
      cartItems = data.FetchMultipleProducts;
    }

    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          loading={!!data && data.loading}
          cartItems={cartItems}
          editCartItem={this.editCartItem}
          deleteFromCart={this.deleteFromCart}
          cartTotal={
            cartItems.length ?
            cartItems.reduce((acc, next) =>
              acc + (Number(next.price) * next.qty)
            , 0) : 0
          }
        />
      </div>
    );
  }
}
const calculateQty = (loggedIn, guestCart, userProfile) => {
  const cart = loggedIn ? userProfile.shopping.cart : guestCart;
  if (!cart.length) return 0;
  return cart.reduce((accum, { qty }) => accum + qty, 0);
};

const NavbarCartWithState = connect(
  ({ user, auth, orders }) => ({
    qty: calculateQty(auth.loggedIn, orders.cart, user.profile),
    guestCart: orders.cart,
    activeUser: user.profile,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),

    updateToGuestCart: updatedCartProducts =>
    dispatch(orderActions.updateToGuestCart(updatedCartProducts)),

    saveProfile: updatedUser => dispatch(userActions.saveProfile(updatedUser)),
  }),
)(NavbarCart);

const NavbarCartWithStateAndGraphQL = compose(
  graphql(FetchMultipleProducts, {
    options: ({ activeUser: { shopping: { cart } } }) => {
      const ids = cart.reduce((accum, { product: id }) => {
        accum.push(id);
        return accum;
      }, []);
      return ({
        variables: {
          ids,
        },
      });
    },
    skip: ({ activeUser }) => {
      if (activeUser && activeUser.shopping.cart.length) return false;
      return true;
    },
  }),
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(NavbarCartWithState);

export default NavbarCartWithStateAndGraphQL;
