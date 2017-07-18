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
      error: false,
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
  * Function: "verifyQtyChange"
  * 1a)
  *
  * @param none
  *
  * @return {object} -
  */
  verifyQtyChange = (qtyChangeType, productId, cart, cartType) => {
    switch (qtyChangeType) {
      case 'qty-plus': {
        let globalRequestQty = 0;
        const updatedCart = cart.map(({ _id, qty }) => {
          if (_id === productId) {
            qty += 1;
            globalRequestQty += qty;
          }
          globalRequestQty += qty;
        });

        if (globalRequestQty < 5) {
          return ({
            cartType,
            problem: '',
            cart: updatedCart,
          });
        }
        return ({
          cartType,
          problem: 'Too much',
          cart: [],
        });
      } break;
      case 'qty-minus': {

        let globalRequestQty = 0;
        const updatedCart = cart.map(({ _id, qty }) => {
          if (_id === productId) {
            qty -= 1;
            globalRequestQty -= qty;
          }
          globalRequestQty -= qty;
        });

        if (globalRequestQty >= 1 && globalRequestQty <= 4) {
          return ({
            cartType,
            problem: '',
            cart: [...updatedCart],
          });
        } else {
          return ({
            cartType,
            cart: [],
            problem: 'Not enough',
          });
        }
      } break;
      default: throw Error('Could not verify quantity change.');
    }
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

    const {
      loggedIn,
      guestCart,
      userCart,
    } = this.props;

    let result = null;

    if (loggedIn) {
      result = this.verifyQtyChange(changeType, productId, userCart);
    } else {
      result = this.verifyQtyChange(changeType, productId, guestCart);
    }

    if (result.problem) {
      this.setState(prevState => ({
        ...prevState,
        error: true,
        errorMsg: result.problem,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: false,
        errorMsg: '',
      }), () => this.props[`save${result.cartType}`]([...result.cart]));
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
  showProductRow = (
    cart,
    taxes,
    error,
    errorMsg,
    grandTotal,
    mobileActive,
  ) => (
    cart.map((juiceObj, i) => {
      console.log('%cjuiceObj', 'background:red;', juiceObj);
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
