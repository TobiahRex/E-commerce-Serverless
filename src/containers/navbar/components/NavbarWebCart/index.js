/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import orderActions from '../../../../redux/orders/';
import userActions from '../../../../redux/user/';
import { DeleteFromMemberCart } from '../../../../graphql/mutations';
import {
  FetchMultipleProducts,
  FetchMultipleProductsOptions,
} from '../../../../graphql/queries';
import {
  NavbarCartMainButton,
  NavbarCartDropdnContent,
} from './imports';
import { propTypes, defaultProps } from './propTypes.imports';
import {
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
} from './utilities.imports';

class NavbarCart extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  shouldComponentUpdate(nextProps) {
    /**
    * Function: "isArrayEqual"
    * 1) Uses lodash to determine if an array of nested values are different between nextProps "np" & this.props "tp".
    *
    * @param {object} np - nextProps
    * @param {object} tp - this.props
    *
    * @return {boolean} true/false.
    */
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

  /**
  * Function: "editCartItem"
  * 1) Navigate to the cart page.
  */
  editCartItem = () => this.props.push('/cart');

  /**
  * Function: "deleteFromCart"
  * 1) Find the product id from the event target object.
  * 2) Filter either "userCart" cart, or "guestCart" by the id found in step 1.
  * 3) Call either "saveUser" if user is logged in.  Or call "saveGuestCart" if user is a guest.
  *
  * @param {object} e - Event object.
  *
  * @return {na} no return.
  */
  deleteFromCart = (e) => {
    const productId = e.target.dataset.id || e.target.parentNode.dataset.id;
    const {
      userId,
      loggedIn,
      guestCart,
      saveUser,
      saveGuestCart,
    } = this.props;

    if (loggedIn) {
      /**
      * Function: "DeleteFromMemberCart"
      * 1) Executes GraphQL mutation "DeleteFromMemberCart" - Removes product from users local db profile, and returns the updated user.
      * 2) Dispatches redux action by calling props methods "saveUser".
      * 3) Redux action will update the user profile saved in Redux.
      *
      * @param {object} variables - GraphQL required variables.
      *
      * @return {promise} - Resolved or Rejected promise result.
      */
      this.props.DeleteFromMemberCart({
        variables: {
          userId,
          productId,
        },
      })
      .then(({ data: { DeleteFromMemberCart: updatedUser } }) => {
        saveUser(updatedUser);
      });
    } else {
      /**
      * Function: "saveGuestCart"
      * 1) Filters the current guest cart by the id of the product found on the event target object.
      *
      * @param {array} (filter result) - filtered ids.
      *
      * @return N/A
      */
      saveGuestCart(guestCart.filter(({ _id }) => _id !== productId));
    }
  }

  render() {
    const {
      loggedIn,
      guestCart,
      userCart,  // only contains id's and quantities.
      FetchMultipleProducts: fetchProductsResult,
    } = this.props;

    const cartItems = DetermineCartType({
      loggedIn,
      guestCart,
      userCart,
      FetchMultipleProducts: fetchProductsResult,
    }, ZipUserCart);

    let qty = 0;
    if (!!cartItems.length) {
      qty = cartItems.reduce((accum, next) => accum + next.qty, 0);
    }

    return (
      <div className="navbar actionSection upper mycart-container">
        <div className="mycart-main">
          <NavbarCartMainButton qty={qty} />

          <NavbarCartDropdnContent
            loading={!!fetchProductsResult && fetchProductsResult.loading}
            cartItems={cartItems}
            editCartItem={this.editCartItem}
            deleteFromCart={this.deleteFromCart}
            cartTotal={
              cartItems.length ?
              cartItems.reduce((acc, next) =>
                acc + (Number(next.product.price) * next.qty)
              , 0) : 0
            }
          />
        </div>
      </div>
    );
  }
}

/**
* GraphQL & Redux Higher Order Component Control Flow:
* 1) NavbarCartWithData - Receives the result from calling the Higher Order Component "compose" from react-apollo.  The compose function, is first called, creating various GraphQL query and mutation methods - "FetchMultipleProducts" & "DeleteFromMemberCart".  Once compose is complete, it returns a function, that is given the component "NavbarCart" as an argument.  NavbarCart will then inherit as "props" - the 2 graphql methods created in the previous step.  The final resulting component is assigned to "NavbarCartWithData" as a new component.
*
* 2) NavbarCartWithStateAndGraphQL - Receives the result from calling the Higher Order Component "connect" from 'react-redux'.  The "connect" function, receives 2 functions as arguments, typically named: "mapStateToProps" & "mapDispatchToProps".  In the code below, I've condensed them to anonymous functions instead.
* 3) These two functions assign as "props" on the resulting component from step 1, methods and slices of the global redux state.  It does this by returning a function, that is then immediately invoked with the argument "NavbarCartWithData".  The final result will be a new component, with all the GraphQL methods created in Step 1 && all the Redux methods and state created in step 2.
* 4) NOTE that the order when calling "compose" & "connect" matters very much.  Depending on which is called first, either Server-side data will be available to Redux's methods (when calling "connect") as possible arguments, OR, Redux state data will be available to GraphQL methods (when calling "compose") as possible argument.  Whichever wraps the base Component ("compose" || "connect"), will be receiving the others results as possible input arguments.
*
* @param {boolean} loggedIn - User logged in flag.
* @param {array} guestCart - Array of values.
* @param {object} userProfile - Parent object for all user's information.
*
* @return {number} result - Final reduced quantity of all items in the cart.
*/
const NavbarCartWithData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: FetchMultipleProductsOptions,
  }),
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(NavbarCart);

const NavbarCartWithStateAndData = connect(
  ({ user, auth, orders }) => ({
    qty: 0,
    userId: auth.loggedIn ? user.profile._id : '',
    loggedIn: auth.loggedIn,
    guestCart: orders.cart,
    userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  }),
  dispatch => ({
    push: location => dispatch(push(location)),
    saveGuestCart: updatedCartProducts =>
    dispatch(orderActions.saveGuestCart(updatedCartProducts)),

    saveUser: updatedUser => dispatch(userActions.saveUser(updatedUser)),
  }),
)(NavbarCartWithData);

export default NavbarCartWithStateAndData;
