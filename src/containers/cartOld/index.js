/* eslint-disable no-extra-boolean-cast */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import { injectIntl, intlShape, FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import userActions from '../../redux/user';
import orderActions from '../../redux/orders';
import {
  EmptyMemberCart,
  DeleteFromMemberCart,
  EditToMemberCart,
} from '../../graphql/mutations';
import {
  FetchMultipleProducts,
  FetchMultipleProductsOptions,
} from '../../graphql/queries';
import {
  BreadCrumb,
  EmptyCart,
  ShoppingCartWeb,
  ShoppingCartMobile,
  ShoppingCartWebProductRow,
  ShoppingCartMobileProductCard,
} from './components';
import {
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
  checkNewUser as CheckNewUser,
  arrayDeepEquality as ArrayDeepEquality,
  composeFinalTotal as ComposeFinalTotal,
} from './utilities.imports';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'cart.breadCrumb.paths1': bcPaths1,
          'cart.breadCrumb.lastCrumb': lastCrumb,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
    };

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
      !ArrayDeepEquality(updatedCart, this.state.userCart) ||
      this.state.mobileActive !== mobileActive
    ) {
      this.setState(prevState => ({
        ...prevState,
        qty,
        mobileActive,
        updatedCart,
        total: { ...total },
      }));
    }
  }
  /**
  * Function: "shouldComponentUpdate"
  * a) "isArrayEqual" - Checks deeply nested array values inside "nextProps" for new values. If found - allows re-render.  If not found, stops re-render.
  *
  * 1) Determines if userCart & guestCart are different upon receiving new props - if so, re-render allowed. If not, re-render NOT allowed.
  *
  * @param {object} nextProps - New props.
  * @param {object} nextState - New State.
  *
  * @return {boolean} true/false.
  */
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
      FetchMultipleProducts: {
        FetchMultipleProducts: nextUserCart,
      },
    } = nextProps;

    const {
      FetchMultipleProducts: {
        FetchMultipleProducts: thisUserCart,
      },
    } = this.props;

    if (
      !_.isEqual(nextProps, this.props) ||
      !ArrayDeepEquality(nextProps.guestCart, this.props.guestCart) ||
      !ArrayDeepEquality(nextUserCart, thisUserCart)
    ) return true;

    if (
      !_.isEqual(nextState, this.state) ||
      !ArrayDeepEquality(nextState.updatedCart, this.state.updatedCart)
    ) return true;

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
              productWithError.error.message = { en: 'Too much' };
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
        this.props[`save${cartOwner}Cart`]([...result.newCart]);
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
      saveGuestCart,
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
      saveGuestCart(guestCart.filter(({ _id }) => _id !== productId));
    }
  }

  emptyCart = () => {
    const {
      userId,
      saveUser,
      loggedIn,
      saveGuestCart,
    } = this.props;

    if (loggedIn) {
      this.props.EmptyMemberCart({ variables: { userId } })
      .then(({ data: { EmptyMemberCart: updatedUser } }) => {
        saveUser(updatedUser);
      });
    } else {
      saveGuestCart([]);
    }
  }

  routerPush = (e) => {
    this.props.push(
      e.target.dataset.slug ||
      e.target.parentNode.dataset.slug || e.target.parentNode.parentNode.dataset.slug,
    );
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
    } = this.props;

    const {
      total,
      mobileActive,
      updatedCart,
    } = this.state;

    const cartHasProducts = !!updatedCart.length;

    return (
      <div className="shopping-cart-main">
        <BreadCrumb
          paths={[this.intl.bcPaths1]}
          classes={['home']}
          destination={['']}
          lastCrumb={this.intl.lastCrumb}
        />
        <div className="shopping-cart-main-title">
          <h1>
            <IntlMsg id="cart.title" />
          </h1>
        </div>
        { !cartHasProducts ?

          <EmptyCart /> :

          this.showShoppingCart(
            updatedCart,
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
const calculateCartQty = (auth, userObj, ordersObj) => {
  const cart = auth.loggedIn ? userObj.profile.shopping.cart : ordersObj.cart;

  return cart.reduce((accum, next) => {
    if (!!next.qty) {
      accum += next.qty;
      return accum;
    }
    return accum;
  }, 0);
};

const ShoppingCartWithIntl = injectIntl(ShoppingCart);

const ShoppingCartWithState = connect(
  (state, ownProps) => {
    const total = ComposeFinalTotal(ownProps);
    const cart = DetermineCartType(ownProps, ZipUserCart);
    return ({
      total,
      updatedCart: cart,
    });
  }, (dispatch, ownProps) => ({
    push: location => dispatch(push(location)),
    saveGuestCart: updatedCart => dispatch(orderActions.saveGuestCart(updatedCart)),
    saveUser: userProfile => dispatch(userActions.saveUser(userProfile)),
    saveUserCart: (updatedCart) => {
      const products = updatedCart.map(({ qty, _id }) => ({
        qty,
        product: _id,
      }));

      ownProps.EditToMemberCart({
        variables: { userId: ownProps.userId, products },
      })
      .then(({ data: { EditToMemberCart: updatedUser } }) => {
        dispatch(userActions.saveUser(updatedUser));
      });
    },
  }),
)(ShoppingCartWithIntl);

const ShoppingCartWithStateAndData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: FetchMultipleProductsOptions,
  }),
  graphql(EmptyMemberCart, { name: 'EmptyMemberCart' }),
  graphql(EditToMemberCart, { name: 'EditToMemberCart' }),
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(ShoppingCartWithState);

const ShoppingCartWithStateAndData2 = connect(
  ({ mobile, orders, auth, user }) => ({
    qty: calculateCartQty(auth, user, orders),
    userId: user.profile ? user.profile._id : '',
    taxRate: orders.taxRate,
    newUser: CheckNewUser(user, auth.loggedIn),
    loggedIn: auth.loggedIn || false,
    userCart: auth.loggedIn ? user.profile.shopping.cart : [],
    guestCart: orders.cart,
    mobileActive: !!mobile.mobileType || false,
  }),
)(ShoppingCartWithStateAndData);
export default ShoppingCartWithStateAndData2;

const {
  any,
  func,
  bool,
  shape,
  object,
  string,
  number,
  arrayOf,
  objectOf,
} = PropTypes;

ShoppingCart.propTypes = {
  intl: intlShape.isRequired,
  qty: number.isRequired,
  push: func.isRequired,
  userId: string,
  newUser: bool.isRequired,
  updatedCart: arrayOf(object),
  taxRate: shape({
    cityRate: number,
    stateRate: number,
    totalRate: number,
  }).isRequired,
  loggedIn: bool.isRequired,
  saveUser: func.isRequired,
  saveUserCart: func.isRequired,
  saveGuestCart: func.isRequired,
  mobileActive: bool.isRequired,
  EmptyMemberCart: func.isRequired,
  DeleteFromMemberCart: func.isRequired,
  FetchMultipleProducts: objectOf(any).isRequired,
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
  total: shape({
    discount: shape({
      qty: bool,
      qtyAmount: number,
      register: bool,
      registerAmount: number,
    }),
    taxes: number,
    grandTotal: number,
    subTotal: number,
  }),
};
ShoppingCart.defaultProps = {
  userId: '',
  userCart: [],
  guestCart: [],
  updatedCart: [],
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
