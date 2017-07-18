/* eslint-disable no-extra-boolean-cast */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';

import {
  BreadCrumb,
  EmptyCart,
  ShoppingCartWeb,
  ShoppingCartMobile,
  ShoppingCartWebProductRow,
  ShoppingCartMobileProductCard,
} from './component.imports';

import {
  DeleteFromMemberCart,
} from '../../graphql/mutations';
import userActions from '../../redux/user';
import orderActions from '../../redux/orders';

const { func, bool, string, number, arrayOf, shape, objectOf, any } = PropTypes;
class ShoppingCart extends Component {
  static propTypes = {
    qty: number.isRequired,
    push: func.isRequired,
    userId: string,
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
      taxes: 0,
      error: null,
      errorMsg: '',
      grandTotal: 0,
      mobileActive: props.mobileActive,
    };
  }

  componentWillReceiveProps({ mobileActive, taxRate, qty }) {
    const { taxes, grandTotal } = this.calculateTotalsDue();

    if (this.state.mobileActive !== mobileActive) {
      this.setState({ mobileActive, taxes, grandTotal, qty });
    }
    if (this.state.qty !== qty) {
      this.setState({ mobileActive, taxes, grandTotal, qty });
    }
    if (this.state.taxRate !== taxRate) {
      this.setState({ taxRate, taxes, grandTotal, qty });
    }
    if (this.state.grandTotal !== grandTotal) {
      this.setState({ taxRate, taxes, grandTotal, qty });
    }
    if (this.state.taxes !== taxes) {
      this.setState({ taxRate, taxes, grandTotal, qty });
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
  calculateTotalsDue = () => {
    const { loggedIn, userCart, guestCart } = this.props;
    let grandTotal = 0;
    const juiceItems = loggedIn ? userCart : guestCart;

    juiceItems.forEach((juiceObj) => {
      juiceObj.subTotal = (juiceObj.qty * Number(juiceObj.price));
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
  * Function: "composedGlobalCartInfo"
  * 1a) Creates variable {number} "globalRequestQty" and assigns it a value either from this.state.qty if being executed for the first time. Or...
  * 1b) Reduces all quantities for items in the current global cart (either from Guest or from User) and assigns that value to "globalRequestQty".
  * 2) Also, records all {string} "_id"'s of items currently in the cart.  This is needed to properly update the analytics and availability values for those repsective products.
  * 3) Finally create's an {array of objects} "updatedCart" variable.  If the user has chosen any product that has inititated this invocation, and that product shares similar qualities (flavor, nicotineStrength, size) with other items in the cart, then those items should not be added to the cart an additional time.  Rather the quantity for those like items should be updated.
  *
  * @param none
  *
  * @return {object} - object containing values 1) "updatedCart" (updated quanitty values for either the user cart if the user is logged in, or the guest cart if the user is not logged in.), 2) "prevCartIds" used to determine whether we have to "update" the items in an existing cart, or "create" a new cart. 3) "globalRequestQty" the overall quantity of items the user is requesting.
  */
  composeGlobalCartInfo = (productId, qtyChangeType) => {
    // When run the first time (no previous items in the cart) then a flag {bool} "updated" is a value of "false".  This will make {number} "globalRequestQty" to be assigned the value of {number} "this.state.qty".

    // If this function is run a subsequent time (items already exist in the cart) then the variable {bool} "updated" will become "true" &  "globalRequestQty" will be assigned it's value based on a reduce across all items in the current cart.
    const prevCartIds = [];

    const {
      loggedIn,
      guestCart,
      userCart,
    } = this.props;

    // Update the User/Guest cart quantity with like items.
    let updatedCart = [];
    let updated = false;

    // If user has items in their cart && logged in check & update "like items".
    if (loggedIn && userCart.length) {
      updated = true;

      const updatedUserCart = userCart.map((userCartProduct) => {
        // Apollo & GraphQL add "__typename" property for id purposes to query results.  When mutating the result, this property must be removed if object is to be used in a subsequent query/mutation different than it's originating query.
        if (!!userCartProduct.__typename) delete userCartProduct.__typename; // eslint-disable-line

        if (!!userCartProduct.product &&
          (userCartProduct.product === productId)
        ) {
          switch (qtyChangeType) {
            case 'qty-plus': userCartProduct.qty += 1; break;
            case 'qty-minus': userCartProduct.qty -= 1; break;
            default: throw Error('Could not change quantity.');
          }
        }

        return userCartProduct;
      });
      updatedCart = [...updatedUserCart];
      // If user has items in their cart & is a guest, check & update "like items"
    } else if (!loggedIn && guestCart.length) {
      updated = true;
      const updatedGuestCart = guestCart.map((guestCartProduct) => {
        if (
          !!guestCartProduct._id &&
          guestCartProduct._id === productId
        ) {
          switch (qtyChangeType) {
            case 'qty-plus': guestCartProduct.qty += 1; break;
            case 'qty-minus': guestCartProduct.qty -= 1; break;
            default: throw Error('Could not change quantity.');
          }
        }

        return guestCartProduct;
      });
      updatedCart = [...updatedGuestCart];
    }

    //  Add up all the product quantities to check for qty violations later. Also save the id's of all items to know which items are NEW and OLD so we know whether to call "Add" or "Update" respectively.
    const globalRequestQty = !updated ?
    1 :
    updatedCart.reduce((accum, nextObj) => {
      if (nextObj && !!nextObj._id) prevCartIds.push(nextObj._id);

      // "product" = object on Guest cart, & string on Member cart.
      if (typeof nextObj.product === 'string') prevCartIds.push(nextObj.product);

      if (nextObj && !!nextObj.qty) accum += nextObj.qty;
      return accum;
    }, 0);
    // --- Return results to "addToCartHandler".
    return {
      cartType: loggedIn ? 'User' : 'Guest',
      updatedCart,
      prevCartIds,
      globalRequestQty,
    };
  }

  /**
  * 1) receives event object and determines if "+" or "-" button has been clicked.
  * 2a) If "+" button has been chosen, compares the current total to the state total.  If the total amount exceeds 4, an error is thrown.  If amount is less than or equal to 4, the component state is allowed to update.
  * 2b) If the "-" button has been chosen, determines if the total qty already saved to local state is between 1 and 4.  If so, allows a decrement of 1.
  * 3) Returns new local state value for "qty".
  * BUG - Need to add "GLOBAL" qty value to this function.
  * @param {e} object - the click event object.
  *
  * @return {new state} - returns new state with new qty value.
  */
  qtyHandler = (e) => {
    const productId = e.target.dataset.id || e.target.parentNode.dataset.id;
    const changeType = e.target.dataset.tag || e.target.parentNode.dataset.tag;

    const { cartType, globalRequestQty, updatedCart } = this.composeGlobalCartInfo(productId, changeType);
    const qtyToCheck = 1;

    if (changeType === 'qty-plus') {
      if ((globalRequestQty + this.state.qty + qtyToCheck) < 5) {
        this.setState(prevState => ({
          ...prevState,
          // qty: (prevState.qty += 1),
          error: false,
          errorMsg: '',
        }), () => {
          this.props[`save${cartType}`](updatedCart);
        });
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
          errorMsg: 'Too much',
        }));
      }
    } else if (changeType === 'qty-minus') {
      const { qty } = this.state;

      if (qty >= 1 && qty <= 4) {
        this.setState(prevState => ({
          ...prevState,
          qty: (prevState.qty -= 1),
          error: false,
          errorMsg: '',
        }), () => {
          this.props[`save${cartType}`](updatedCart);
        });
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
          errorMsg: 'Not enough',
        }));
      }
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
  showProductRow = (args) => {
    const {
      cart,
      taxes,
      error,
      errorMsg,
      grandTotal,
      mobileActive,
    } = args;

    return (
      cart.map((juiceObj, i) => {
        if (mobileActive === false) {
          return (
            <ShoppingCartWebProductRow
              key={`shopping-cart-table-row-${juiceObj._id}`}
              keyNum={i}
              error={error}
              errorMsg={errorMsg}
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
            taxes={taxes}
            error={error}
            errorMsg={errorMsg}
            grandTotal={grandTotal}
            juiceObj={juiceObj}
            qtyHandler={this.qtyHandler}
            deleteFromCart={this.deleteFromCart}
          />
        );
      })
    );
  }

  /**
  * Function: "showShoppingCart"
  * 1) Dynamically render device cart based on mobile or web version.
  *
  * @param {none} N/A
  *
  * @return {component} - Return either Web or Mobile version of parent Shopping Cart component.
  */
  showShoppingCart = (
    taxes,
    error,
    errorMsg,
    grandTotal,
    mobileActive,
    cart,
  ) => {
    if (mobileActive === false) {
      return (
        <ShoppingCartWeb
          cart={cart}
          taxes={taxes}
          error={error}
          errorMsg={errorMsg}
          grandTotal={grandTotal}
          routerPush={this.props.push}
          mobileActive={mobileActive}
          showProductRow={this.showProductRow}
        />
      );
    }
    return (
      <ShoppingCartMobile
        cart={cart}
        taxes={taxes}
        error={error}
        errorMsg={errorMsg}
        grandTotal={grandTotal}
        routerPush={this.props.push}
        mobileActive={mobileActive}
        showProductRow={this.showProductRow}
      />
    );
  }


  render() {
    const { loggedIn, userCart, guestCart } = this.props;
    const { taxes, error, errorMsg, grandTotal, mobileActive } = this.state;
    const cartHasProducts = userCart.length || guestCart.length;
    console.log('this.state: ', this.state);
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
            taxes,
            error,
            errorMsg,
            grandTotal,
            mobileActive,
            loggedIn ? userCart : guestCart,
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
}),
dispatch => ({
  push: location => dispatch(push(location)),
  saveUser: updatedProfile => dispatch(userActions.saveUser(updatedProfile)),
  saveGuest: updatedCart => dispatch(orderActions.saveGuestCart(updatedCart)),
}))(ShoppingCartWithData);
export default ShoppingCartWithDataAndState;
