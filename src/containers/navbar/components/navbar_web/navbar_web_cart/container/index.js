/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { propTypes, defaultProps } from './propTypes.imports';
import { NavbarCartMainButton, NavbarCartDropdnContent } from './imports';
import orderActions from '../../../../../../redux/orders/';
import userActions from '../../../../../../redux/user/';
import { DeleteFromMemberCart } from '../../../../../../graphQL/mutations';
import { FetchMultipleProducts } from '../../../../../../graphQL/queries';


class NavbarCart extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty(),

      { FetchMultipleProducts:
        { FetchMultipleProducts: nextUserCart },
      } = nextProps,
      { FetchMultipleProducts:
        { FetchMultipleProducts: thisUserCart },
      } = this.props,

      reduxCartDiff = isArrayEqual(nextProps.guestCart, this.props.guestCart),
      userCartDiff = isArrayEqual(nextUserCart, thisUserCart);

    if (!_.isEqual(nextProps, this.props) || reduxCartDiff || userCartDiff) {
      return true;
    }
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

    if (!!activeUser._id) {
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
      updateToGuestCart(guestCart.filter(({ _id }) => _id !== productId));
    }
  }

  zipUserCart = (userProfile, multipleProducts) => {
    const zip = (left, right, combinerFunction) => {
      let counter;
      const results = [];

      for (
        counter = 0;
        counter < Math.min(left.length, right.length);
        counter += 1
      ) {
        results[counter] = combinerFunction(left[counter], right[counter]);
      }
      return results;
    };

    const profileCart = userProfile.shopping.cart;
    return zip(profileCart, multipleProducts, (userCart, productCart) => ({
      _id: productCart._id,
      qty: userCart.qty,
      nicotineStrength: userCart.nicotineStrength,
      ...productCart.product,
    }));
  }

  render() {
    const {
      qty,
      loggedIn,
      guestCart,
      activeUser,
      FetchMultipleProducts: userCartResult,
    } = this.props;

    let cartItems = [];
    if (!loggedIn && guestCart.length) {
      cartItems = guestCart;
    } else if (loggedIn) {
      cartItems = this.zipUserCart(activeUser, userCartResult.FetchMultipleProducts);
    }

    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          loading={!!userCartResult.FetchMultipleProducts && userCartResult.loading}
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
  const userCart = !!userProfile && Object.prototype.hasOwnProperty.call(userProfile, 'shopping') && userProfile.shopping.cart,
    cart = loggedIn ? userCart : guestCart;

  if (!cart.length) return 0;
  return cart.reduce((accum, { qty }) => accum + qty, 0);
};

const NavbarCartWithData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: ({ activeUser }) => {
      if (!activeUser.shopping) return ({ variables: { ids: [''] } });

      const ids = activeUser.shopping.cart.reduce((accum, { product: id }) => {
        accum.push(id);
        return accum;
      }, []);
      return ({
        variables: {
          ids,
        },
      });
    },
  }),
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(NavbarCart);

const NavbarCartWithStateAndGraphQL = connect(
  ({ user, auth, orders }) => ({
    qty: calculateQty(auth.loggedIn, orders.cart, user.profile),
    loggedIn: auth.loggedIn,
    guestCart: orders.cart,
    activeUser: user.profile || { empty: true },
  }),
  dispatch => ({
    push: location => dispatch(push(location)),

    updateToGuestCart: updatedCartProducts =>
    dispatch(orderActions.updateToGuestCart(updatedCartProducts)),

    saveProfile: updatedUser => dispatch(userActions.saveProfile(updatedUser)),
  }),
)(NavbarCartWithData);

export default NavbarCartWithStateAndGraphQL;
