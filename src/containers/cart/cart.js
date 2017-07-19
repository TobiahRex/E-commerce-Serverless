/* eslint-disable no-extra-boolean-cast */
// TODO: Need to updated UserCart Schema to track "error" & "errorMsg" (Same as GuestCart).

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';

import {
  DeleteFromMemberCart,
} from '../../graphql/mutations';
import userActions from '../../redux/user';
import orderActions from '../../redux/orders';
import {
  BreadCrumb,
  EmptyCart,
  ShoppingCartWeb,
  ShoppingCartMobile,
  ShoppingCartWebProductRow,
  ShoppingCartMobileProductCard,
} from './component.imports';

const { func, bool, string, number, arrayOf, shape, objectOf, any } = PropTypes;
class ShoppingCart extends Component {
  static propTypes = {
    qty: number.isRequired,
    push: func.isRequired,
    userId: string,
    newUser: bool.isRequired,
    taxRate: number.isRequired,
    loggedIn: bool.isRequired,
    saveUser: func.isRequired,
    saveGuest: func.isRequired,
    mobileActive: bool.isRequired,
    DeleteFromMemberCart: func.isRequired,
    userCart: arrayOf(
      shape({
        qty: number,
        strength: number,
        product: string,
      }),
    ),
    guestCart: arrayOf(
      shape({
        _id: string,
        qty: number,
        strength: number,
        userId: string,
        product: objectOf(any),
      }),
    ),
  }
  static defaultProps = {
    userId: '',
    userCart: null,
    guestCart: null,
  }
  constructor(props) {
    super(props);

    this.state = {
      qty: props.qty,
      updatedCart: [],
      taxes: 0,
      error: false,
      grandTotal: 0,
      mobileActive: props.mobileActive,
    };
  }

  componentWillReceiveProps(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();

    const {
      qty,
      taxRate,
      loggedIn,
      userCart,
      guestCart,
      mobileActive,
    } = nextProps;

    const updatedCart = loggedIn ? userCart : guestCart;

    const { taxes, grandTotal } = this.calculateTotalsDue(loggedIn ? userCart : guestCart);
    if (
      this.state.qty !== qty ||
      this.state.taxes !== taxes ||
      this.state.taxRate !== taxRate ||
      this.state.grandTotal !== grandTotal ||
      this.state.mobileActive !== mobileActive ||
      isArrayEqual(updatedCart, this.state.userCart)
    ) {
      this.setState({
        qty,
        taxes,
        grandTotal,
        updatedCart,
        mobileActive,
      });
    }
  }
  /**
  * Function: "calculateTotalsDue"
  * 1) For each product currently in the cart, calculate the total for that item by multiplying the underlying price with the quantity requested.
  * 2) Add that the individual subtotal to each juiceObj.
  * 3) Add that amount to the "grandTotal".
  *
  * @param {none} N/A
  *
  * @return {N/A} Set's new state for taxes & grandTotal.
  */
  calculateTotalsDue = (cart) => {
    let grandTotal = 0;

    cart.forEach((juiceObj) => {
      juiceObj.subTotal = juiceObj.qty * Number(juiceObj.price);
      grandTotal += juiceObj.subTotal;
    });

    const taxes = Number((grandTotal * this.props.taxRate).toFixed(2));
    grandTotal += taxes;

    return ({
      taxes,
      grandTotal,
    });
  }

  /**
  * Function: "verifyQtyChange"
  * 1) Determine via switchblock, type of qty change.
  * 2) Iterate over cart, and find the product by _id to be changed.
  * 3) Change qty per "changeType".
  * 4) Increment "globalRequestQty" by each products quantity.
  * 4) return all products into new array "newCart".
  * 5) Check "globalRequestQty" for total qty violations.
  * 6a) If violation is found, iterate over array "newCart" and locate product to updated.
  * 6aa) Once found, copy object to avoid inheritence. Update key "error" to true. Update key "errorMsg" with appropriate type of error.  Update key "qty" to non-violating value.
  * 6ab) Re-assign array "newCart" to new updated productArray.
  * 7) return final value as object.
  *
  * @param {string} qtyChangeType, {string} productId, {array} cart
  *
  * @return
  * Success: {object} KEYS: "error", "newCart"
  * Error: {object} Error message
  */
  verifyQtyChange = (qtyChangeType, productId, cart) => {
    let globalError = false;

    switch (qtyChangeType) {
      case 'qty-plus': {
        let globalRequestQty = 0;

        let newCart = cart.map((productObj) => {
          productObj.error = false;
          productObj.errorMsg = '';

          if (productObj._id === productId) {
            const productCopy = Object.assign({}, productObj);
            productCopy.qty += 1;
            globalRequestQty += productCopy.qty;
            return productCopy;
          }
          globalRequestQty += productObj.qty;
          return productObj;
        });

        if (globalRequestQty > 4) {
          globalError = true;
          newCart = newCart.map((productObj) => {
            if (productObj._id === productId) {
              const productWithError = Object.assign({}, productObj);
              productWithError.error = true;
              productWithError.errorMsg = 'Too much';
              productWithError.qty -= 1;
              return productWithError;
            }
            return productObj;
          });
        }

        return ({
          error: globalError,
          newCart: [...newCart],
        });
      }
      case 'qty-minus': {
        let productToEditQty = 0;
        let newCart = cart.map((productObj) => {
          productObj.error = false;
          productObj.errorMsg = '';

          if (productObj._id === productId) {
            const productCopy = Object.assign({}, productObj);
            productCopy.qty -= 1;

            if (productCopy.qty !== 0) {
              productToEditQty += productCopy.qty;
            } else {
              productToEditQty -= 1;
            }

            return productCopy;
          }
          return productObj;
        });

        if (productToEditQty < 1) {
          newCart = newCart.filter(({ _id }) => _id !== productId);
        }

        return ({
          error: globalError,
          newCart: [...newCart],
        });
      }
      default: throw Error('Switch block did not catch @ "verifyQtyChange".');
    }
  }
  /**
  * Function: "qtyHandler"
  * 1) Determines the id and the type of qty change the user requested.
  * 2) Determines which type of cart the user is currently operating with: "guest" or "user".
  * 3) calls "verifyQtyChange" passing 3 arguments.  All 3 determined in the prev. 2 steps.
  * 4a) Step 3 returns a "result" object.  If the key "problem" has a non-falsey value, it calls the appropriate qty update method for either the "guest" || "user" cart from the Component props.
  * 4b) If the key "problem" has a truthy value, then local state is updated by calling "setState" assigning appropriate values for "error" & "errorMsg".
  * 5) Step 4a must explicitly set the "error" & "errorMsg" fields to initial values.
  * @param {e} object - the click event object.
  *
  * @return {new state} - returns new state with new qty value.
  */
  qtyHandler = (e) => {
    const productId = e.target.dataset.id || e.target.parentNode.dataset.id;
    const changeType = e.target.dataset.tag || e.target.parentNode.dataset.tag;

    const {
      loggedIn,
      guestCart,
      userCart,
    } = this.props;

    let result = null;
    let cartOwner = '';

    if (loggedIn) {
      result = this.verifyQtyChange(changeType, productId, userCart);
      cartOwner = 'User';
    } else {
      result = this.verifyQtyChange(changeType, productId, guestCart);
      cartOwner = 'Guest';
    }
    if (result.error) {
      this.setState(prevState => ({
        ...prevState,
        error: result.error,
        updatedCart: [...result.newCart],
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: false,
        updatedCart: [...result.newCart],
      }), () => {
        this.props[`save${cartOwner}`]([...result.newCart]);
      });
    }
  }
  /**
  * Function: "deleteFromCart"
  * 1) Find the product id from the event target object.
  * 2) Filter either "activeUser" cart, or "guestCart" by the id found in step 1.
  * 3) Call either "saveUser" if user is logged in.  Or call "saveGuestCart" if user is a guest.
  *
  * @param {object} e - Event object.
  *
  * @return {na} no return.
  */
  deleteFromCart = (e) => {
    const {
      userId,
      saveUser,
      loggedIn,
      guestCart,
      saveGuest,
    } = this.props;

    const productId = e.target.dataset.id || e.target.parentNode.dataset.id;

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
        variables: { userId, productId },
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
      saveGuest(guestCart.filter(({ _id }) => _id !== productId));
    }
  }

  clearShoppingCart = (e) => {
    const {
      userId,
      saveUser,
      loggedIn,
      guestCart,
      saveGuest,
    } = this.props;

    if (loggedIn) {
      this.props.ClearShoppingCart({
        variables: { userId },
      })
      .then(({ data: { ClearShoppingCart: updatedUser } }) => {
        saveUser(updatedUser);
      });
    } else {
      saveGuest([]);
    }
  }

  routerPush = (e) => {
    this.props.push(e.target.dataset.slug || e.target.parentNode.dataset.slug);
  }

  /**
  * Function: "showProductRow"
  * 1) Depending on view (mobile or web) dynamically assign cart values to repsective components.
  *
  * @param {none} N/A
  *
  * @return {N/A} Return either Web or Mobile version of Shopping Cart child component.
  */
  showProductRow = (
    cart,
    taxes,
    grandTotal,
    mobileActive,
  ) => (
    cart.map((juiceObj, i) => {
      if (mobileActive === false) {
        return (
          <ShoppingCartWebProductRow
            key={`shopping-cart-table-row-${juiceObj._id}`}
            keyNum={i}
            juiceObj={juiceObj}
            qtyHandler={this.qtyHandler}
            deleteFromCart={this.deleteFromCart}
          />
        );
      }
      return (
        <ShoppingCartMobileProductCard
          key={`shopping-cart-table-row-${juiceObj._id}`}
          keyNum={i}
          juiceObj={juiceObj}
          qtyHandler={this.qtyHandler}
          deleteFromCart={this.deleteFromCart}
        />
      );
    })
  );

  /**
  * Function: "showShoppingCart"
  * 1) Dynamically render device cart based on mobile or web version.
  *
  * @param {none} N/A
  *
  * @return {component} - Return either Web or Mobile version of parent Shopping Cart component.
  */
  showShoppingCart = (
    cart,
    taxes,
    newUser,
    grandTotal,
    mobileActive,
  ) => {
    if (mobileActive === false) {
      return (
        <ShoppingCartWeb
          cart={cart}
          taxes={taxes}
          newUser={newUser}
          grandTotal={grandTotal}
          routerPush={this.routerPush}
          mobileActive={mobileActive}
          showProductRow={this.showProductRow}
        />
      );
    }
    return (
      <ShoppingCartMobile
        cart={cart}
        taxes={taxes}
        newUser={newUser}
        grandTotal={grandTotal}
        routerPush={this.routerPush}
        mobileActive={mobileActive}
        showProductRow={this.showProductRow}
      />
    );
  }

  render() {
    const { loggedIn, userCart, guestCart, newUser } = this.props;
    const { taxes, grandTotal, mobileActive, updatedCart } = this.state;
    const cartHasProducts = userCart.length || guestCart.length;

    let cart = loggedIn ? userCart : guestCart;
    if (updatedCart.length) cart = updatedCart;

    return (
      <div className="shopping-cart-main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Shopping Cart"
        />
        <div className="shopping-cart-main-title">
          <h1>Shopping Cart</h1>
        </div>
        { !cartHasProducts ?

          <EmptyCart /> :

          this.showShoppingCart(
            cart,
            taxes,
            newUser,
            grandTotal,
            mobileActive,
          )
        }
      </div>
    );
  }
}
const calculateCartQty = cart =>
cart.reduce((accum, next) => {
  if (!!next.qty) {
    accum += next.qty;
    return accum;
  }
  return accum;
}, 0);

const checkNewUser = (user, loggedIn) => {
  if (!loggedIn) return false;
  return user.authentication.logins.length && !user.shopping.cart.length;
};

const ShoppingCartWithData = compose(
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(ShoppingCart);

const ShoppingCartWithDataAndState = connect(({ mobile, orders, auth, user }) => ({
  qty: calculateCartQty(auth.loggedIn ? user.profile.shopping.cart : orders.cart),
  mobileActive: mobile.mobileType || false,
  taxRate: orders.taxRate.totalRate,
  loggedIn: auth.loggedIn || false,
  userId: user._id || '',
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
  newUser: checkNewUser(user, auth.loggedIn),
}),
dispatch => ({
  push: location => dispatch(push(location)),
  saveUser: updatedProfile => dispatch(userActions.saveUser(updatedProfile)),
  saveGuest: updatedCart => dispatch(orderActions.saveGuestCart(updatedCart)),
}))(ShoppingCartWithData);
export default ShoppingCartWithDataAndState;
