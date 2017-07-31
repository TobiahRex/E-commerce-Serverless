/* eslint-disable no-extra-boolean-cast */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';
import userActions from '../../redux/user';
import orderActions from '../../redux/orders';
import {
  EmptyMemberCart,
  DeleteFromMemberCart,
} from '../../graphql/mutations';
import { FetchMultipleProducts } from '../../graphql/queries';

import {
  propTypes,
  defaultProps,
} from './propTypes.imports';
import {
  BreadCrumb,
  EmptyCart,
  ShoppingCartWeb,
  ShoppingCartMobile,
  ShoppingCartWebProductRow,
  ShoppingCartMobileProductCard,
} from './component.imports';
import {
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
  checkNewUser as CheckNewUser,
  arrayDeepEquality as ArrayDeepEquality,
  composeFinalTotal as ComposeFinalTotal,
} from './utilities.imports';

class ShoppingCart extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  constructor(props) {
    super(props);

    this.state = {
      qty: props.qty,
      updatedCart: [],
      taxes: 0,
      error: false,
      grandTotal: 0,
      mobileActive: props.mobileActive,
      total: {
        discount: {
          qty: false,
          qtyAmount: 0,
          register: false,
          registerAmount: 0,
        },
        taxes: 0,
        grandTotal: 0,
        subTotal: 0,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      qty,
      total,
      updatedCart,
      mobileActive,
    } = nextProps;

    if (
      this.state.qty !== qty ||
      !_.isEqual(total, this.state.total) ||
      ArrayDeepEquality(updatedCart, this.state.userCart) ||
      this.state.mobileActive !== mobileActive
    ) {
      this.setState({
        qty,
        mobileActive,
        updatedCart,
        total: { ...total },
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
    * Function: "isArrayEqual"
    * 1) Uses lodash to determine if an array of nested values are different between nextProps "np" & this.props "tp".
    *
    * @param {object} np - nextProps
    * @param {object} tp - this.props
    *
    * @return {boolean} true/false.
    */

    const {
      FetchMultipleProducts: { FetchMultipleProducts: nextUserCart },
    } = nextProps,

      { FetchMultipleProducts:
        { FetchMultipleProducts: thisUserCart },
      } = this.props,

      reduxCartDiff = ArrayDeepEquality(
        nextProps.guestCart,
        this.props.guestCart,
      ),
      userCartDiff = ArrayDeepEquality(
        nextUserCart,
        thisUserCart,
      );

    if (!_.isEqual(nextProps, this.props) || reduxCartDiff || userCartDiff) {
      return true;
    }
    if (!_.isEqual(nextState, this.state)) return true;
    return false;
  }
  /**
  * 1) For each product currently in the cart, calculate the total for that item by multiplying the underlying price with the quantity requested.
  * 2) Add that to the individual subtotal (newly created key) to each productObj.
  * 3) Add that amount to the "grandTotal".
  * @NOTE - Mutates the original "productObj" by adding key "subTotal".
  *
  * @param {none} N/A
  *
  * @return {N/A} Set's new state for taxes & grandTotal.
  */

  /**
  * Function: "verifyQtyChange"
  * TODO) Need to add keys "error" & "errorMsg" to the user's shopping cart product values.
  * 1) Determine via switchblock, type of qty change.
  * 2) Iterate over cart, and find the product by _id to be changed.
  * 3) Change qty per "changeType".
  * // --
  * 4a) If "qty-plus" Increment "globalRequestQty" by each products quantity.
  * 4b) return all products into new array "newCart".
  * 5) Check "globalRequestQty" for total qty violations.
  * 6a) If qty violation (too many) is found. If found, iterate over array "newCart" and locate product to be fixed.
  * 6aa) 1) Once found, copy object to avoid inheritence. 2) Update key "error" to true. 3) Update key "errorMsg" with appropriate type of error.  Update key "qty" to a value one less than its violation value.
  * 6ab) Re-assign array "newCart" to new updated productArray.
  * 7) return final object with results.
  * // --
  * 4) If "qty-minus" 1) Iterate over cart.  2) Create new keys "error and "errorMsg" on the current productObj.
  * 5) If the current productObj matches the current productId.  1) Make copy of "productObj" to avoid prototypal inheritance. 2) Decrement the copied object's key of "qty" by a value of 1.
  * 6) Check to see if the product's qty that was just decremented is now a value of 0. if not...
  * 7) Add the updated product's qty to the total qty tracker "productToEditQty".  Otherwise...
  * 8) subtract a value of 1 from "productToEditQty" because it will be removed from the cart completely in a following step.
  * 9) return the modifed product object.
  * 10) Check to see if the total qty tracker variable "productToEditQty" is 0.  If so, remove the respective product object via filter, and re-assign "newCart" to the resulting filtered array.
  * 11) return final object with results.
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
              const newError = Object.assign({}, productObj.error);
              productWithError.error = newError;
              productWithError.error.soft = true;
              productWithError.error.message = 'Too much';
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
          if (productObj._id === productId) {
            const productCopy = _.clone(productObj, true);
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
      // guestCart,
      // userCart,
      updatedCart,
    } = this.props;

    let cartOwner = '';
    let result = null;

    if (loggedIn) {
      cartOwner = 'User';
      result = this.verifyQtyChange(changeType, productId, updatedCart);
    } else {
      cartOwner = 'Guest';
      result = this.verifyQtyChange(changeType, productId, updatedCart);
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
      * 2) Dispatches redux action by calling props method "saveUser".
      * 3) Redux action will update Redux state with updated user object.
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
      * 1) Filters the guest cart, by id of the product, found on the event target object.
      *
      * @param {array} (filtered cart) - product objects.
      *
      * @return N/A
      */
      saveGuest(guestCart.filter(({ _id }) => _id !== productId));
    }
  }

  emptyCart = () => {
    const {
      userId,
      saveUser,
      loggedIn,
      saveGuest,
    } = this.props;

    if (loggedIn) {
      this.props.EmptyMemberCart({ variables: { userId } })
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
    cart.map((productObj) => {
      if (mobileActive === false) {
        return (
          <ShoppingCartWebProductRow
            key={`shopping-cart-table-row-${productObj._id}`}
            productObj={productObj}
            qtyHandler={this.qtyHandler}
            deleteFromCart={this.deleteFromCart}
          />
        );
      }
      return (
        <ShoppingCartMobileProductCard
          key={`shopping-cart-table-row-${productObj._id}`}
          productObj={productObj}
          qtyHandler={this.qtyHandler}
          deleteFromCart={this.deleteFromCart}
          emptyCart={this.emptyCart}
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
    newUser,
    mobileActive,
    total,
  ) => {
    if (mobileActive === false) {
      return (
        <ShoppingCartWeb
          cart={cart}
          taxes={total.taxes}
          grandTotal={total.grandTotal}
          emptyCart={this.emptyCart}
          routerPush={this.routerPush}
          mobileActive={mobileActive}
          showProductRow={this.showProductRow}
          total={total}
        />
      );
    }
    return (
      <ShoppingCartMobile
        cart={cart}
        taxes={total.taxes}
        newUser={newUser}
        grandTotal={total.grandTotal}
        routerPush={this.routerPush}
        mobileActive={mobileActive}
        showProductRow={this.showProductRow}
        total={total}
      />
    );
  }

  render() {
    const {
      newUser,
      loggedIn,
      userCart,
      guestCart,
      FetchMultipleProducts: allProducts,
    } = this.props;

    const {
      total,
      mobileActive,
    } = this.state;

    const cart = DetermineCartType({
      loggedIn,
      userCart,
      guestCart,
      FetchMultipleProducts: allProducts,
    }, ZipUserCart);
    const cartHasProducts = !!cart.length;

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
            newUser,
            mobileActive,
            total,
          )
        }
      </div>
    );
  }
}
/**
* Function: "calculateCartQty"
* 1) calls a reduce method on the input "cart" array.
* 2) verifies the next object has a key of "qty", if not, returns the final accumulated value. If so...
* 3) Increments the accumulated value by the value of "qty".  Returns the result to the next iteration.
*
* @param {array} cart - an array of product objects.
*
* @return {number} accum - the final qty number;
*/
const calculateCartQty = cart =>
cart.reduce((accum, next) => {
  if (!!next.qty) {
    accum += next.qty;
    return accum;
  }
  return accum;
}, 0);

/**
* Function: "checkNewUser"
* 1) If the user is not logged in, then obviously there is no user.
* 2) If the user is logged in but they have not purchased any new products, then return true.
*
* @param {object} user - the user object.
* @param {bool} loggedIn - flag for if the user is logged in or not.
*
* @return {bool} - Determines eligibility for the 10% new user discount.
*/

const ShoppingCartWithState = connect((state, ownProps) => {
  const total = ComposeFinalTotal(ownProps);

  const cart = DetermineCartType(ownProps, ZipUserCart);

  return ({
    total,
    updatedCart: cart,
  });
}, null)(ShoppingCart);

const ShoppingCartWithStateAndData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: ({ loggedIn, userCart, guestCart }) => {
      let ids = [];

      if (!loggedIn) ids = guestCart.map(({ _id }) => _id);

      if (!!userCart.length) ids = userCart.map(({ productId }) => productId);

      return ({
        variables: { ids },
      });
    },
  }),
  graphql(EmptyMemberCart, { name: 'EmptyMemberCart' }),
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(ShoppingCartWithState);

const ShoppingCartWithStateAndData2 = connect(({ mobile, orders, auth, user }) => ({
  qty: calculateCartQty(auth.loggedIn ? user.profile.shopping.cart : orders.cart),
  mobileActive: !!mobile.mobileType || false,
  taxRate: orders.taxRate.totalRate,
  loggedIn: auth.loggedIn || false,
  userId: user._id ? user._id : '',
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
  newUser: CheckNewUser(user, auth.loggedIn),
}),
dispatch => ({
  push: location => dispatch(push(location)),
  saveUser: updatedProfile => dispatch(userActions.saveUser(updatedProfile)),
  saveGuest: updatedCart => dispatch(orderActions.saveGuestCart(updatedCart)),
}))(ShoppingCartWithStateAndData);
export default ShoppingCartWithStateAndData2;
