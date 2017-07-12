import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';

import {
  BreadCrumb,
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
      taxes: 0,
      grandTotal: 0,
      mobileActive: props.mobileActive,
    };
  }

  componentWillReceiveProps({ mobileActive, taxRate }) {
    const { taxes, grandTotal } = this.calcProductAnalysis();

    if (this.state.mobileActive !== mobileActive) {
      this.setState({ mobileActive, taxes, grandTotal });
    }
    if (this.state.taxRate !== taxRate) {
      this.setState({ taxRate, taxes, grandTotal });
    }
  }

  /**
  * 1) receives event object and determines if "+" or "-" button has been clicked.
  * 2a) If "+" button has been chosen, compares the current total to the state total.  If the total amount exceeds 4, an error is thrown.  If amount is less than or equal to 4, the component state is allowed to update.
  * 2b) If the "-" button has been chosen, determines if the total qty already saved to local state is between 1 and 4.  If so, allows a decrement of 1.
  * 3) Returns new local state value for "qty".
  *
  * @param none
  *
  * @return {object} - object containing values 1) "updatedCart" (updated quanitty values for either the user cart if the user is logged in, or the guest cart if the user is not logged in.), 2) "prevCartIds" used to determine whether we have to "update" the items in an existing cart, or "create" a new cart. 3) "globalRequestQty" the overall quantity of items the user is requesting.
  */
  composeGlobalCartInfo = () => {
    // When run the first time (no previous items in the cart) then a flag "updated" is a value of false.  This will make "globalRequestQty" to be assigned the "qty" value from state directly.

    // If this function is run a subsequent time (items already exist in the cart) then "globalRequestQty" will be assigned it's value based on a reduce across all items.
    const prevCartIds = [];

    const {
      loggedIn,
      guestCart,
      userCart,
    } = this.props;

    const {
      qty: requestQty,  // alias
      product: stateProduct,
    } = this.state;

    // Update the User/Guest cart quantity with like items.
    let updatedCart = [];
    let updated = false;

    // If user has items in their cart && logged in check & update "like items".
    if (loggedIn && userCart.length) {
      updated = true;

      const updatedUserCart = userCart.map((userCartProduct) => {
        // Apollo & GraphQL add "__typename" property for id purposes to query results.  When mutating the result, this property must be removed if object is to be used in a subsequent query/mutation different than it's originating query.
        if (Object.prototype.hasOwnProperty.call(userCartProduct, '__typename')) delete userCartProduct.__typename;

        if (
          Object.prototype.hasOwnProperty.call(userCartProduct, 'product') && (userCartProduct.product === stateProduct._id)
        ) userCartProduct.qty += requestQty;

        return userCartProduct;
      });
      updatedCart = [...updatedUserCart];
      // If user has items in their cart & is a guest, check & update "like items"
    } else if (!loggedIn && guestCart.length) {
      updated = true;
      const updatedGuestCart = guestCart
      .map((guestCartProduct) => {
        if (
          Object.prototype.hasOwnProperty.call(guestCartProduct, '_id') &&
          guestCartProduct._id === stateProduct._id
        ) guestCartProduct.qty += requestQty;

        return guestCartProduct;
      });
      updatedCart = [...updatedGuestCart];
    }

    // --- Add up all the product quantities to check for qty violations later. -- Also save the id's of all items to know which items are NEW and OLD to call "Add" or "Update" respectively.
    const globalRequestQty = !updated ? requestQty : updatedCart
    .reduce((accum, nextObj) => {
      if (nextObj && Object.prototype.hasOwnProperty.call(nextObj, '_id')) prevCartIds.push(nextObj._id);

      // "product" = object on Guest cart, & string on Member cart.
      if (typeof nextObj.product === 'string') prevCartIds.push(nextObj.product);

      accum += nextObj.qty;
      return accum;
    }, 0);
    // --- Return results to "addToCartHandler".
    return {
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
    const { globalRequestQty } = this.composeGlobalCartInfo();
    const qtyToCheck = 1;

    let buttonEl = e.target.dataset.tag;
    if (!buttonEl) buttonEl = e.target.parentNode.dataset.tag;

    if (buttonEl === 'qty-plus') {
      if ((globalRequestQty + this.state.qty + qtyToCheck) < 5) {
        this.setState(prevState => ({
          ...prevState,
          qty: (prevState.qty += 1),
          error: false,
          errorMsg: '',
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
          errorMsg: 'Too much',
        }));
      }
    } else if (buttonEl === 'qty-minus') {
      const { qty } = this.state;

      if (qty >= 1 && qty <= 4) {
        this.setState(prevState => ({
          ...prevState,
          qty: (prevState.qty -= 1),
          error: false,
          errorMsg: '',
        }));
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

      guestCart,
      saveGuest,
    } = this.props;

    let productId = e.target.dataset.id;
    if (!productId) productId = e.target.parentNode.dataset.id;

    if (userId) {
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
          productId,
          userId,
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
      saveGuest(guestCart.filter(({ _id }) => _id !== productId));
    }
  }

  routerPush = (e) => {
    let slug = e.target.dataset.slug;

    if (!slug) slug = e.target.parentNode.dataset.slug;
    console.log('slug: ', slug);
    this.props.push(slug);
  }

  /**
  * Function: "calcProductAnalysis"
  * 1) For each product currently in the cart, calculate the total for that item by multiplying the underlying price with the quantity requested.
  * 2) Add that the individual subtotal to each juiceObj.
  * 3) Add that amount to the "grandTotal".
  *
  * @param {none} N/A
  *
  * @return {N/A} Set's new state for taxes & grandTotal.
  */
  calcProductAnalysis = () => {
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
  * Function: "renderDeviceCart"
  * 1) Dynamically render device cart based on mobile or web version.
  *
  * @param {none} N/A
  *
  * @return {component} - Return either Web or Mobile version of parent Shopping Cart component.
  */
  renderDeviceCart = (cartItems) => {
    const { grandTotal, taxes } = this.state;
    if (this.props.mobileActive === false) {
      return (
        <ShoppingCartWeb
          taxes={taxes}
          cartItems={cartItems}
          grandTotal={grandTotal}
          renderWebJuices={this.renderJuices}
          routerPush={this.props.push}
        />
      );
    }
    return (
      <ShoppingCartMobile
        taxes={taxes}
        grandTotal={grandTotal}
        cartItems={cartItems}
        renderMobileJuices={this.renderJuices}
        routerPush={this.props.push}
      />
    );
  }

  /**
  * Function: "renderJuices"
  * 1) Depending on view (mobile or web) dynamically assign cart values to repsective components.
  *
  * @param {none} N/A
  *
  * @return {N/A} Return either Web or Mobile version of Shopping Cart child component.
  */
  renderJuices = cartItems => (
    cartItems.map((juiceObj, i) => {
      console.log('juiceObj: ', juiceObj);
      const { grandTotal, taxes } = this.state;

      if (this.state.mobileActive === false) {
        return (
          <ShoppingCartWebProductRow
            key={`shopping-cart-table-row-${juiceObj.name}`}
            keyNum={i}
            juiceObj={juiceObj}
          />
        );
      }
      return (
        <ShoppingCartMobileProductCard
          key={`shopping-cart-table-row-${juiceObj.name}`}
          keyNum={i}
          taxes={taxes}
          juiceObj={juiceObj}
          grandTotal={grandTotal}
        />
      );
    })
  );

  render() {
    const { loggedIn, userCart, guestCart } = this.props;
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
        {this.renderDeviceCart(
          loggedIn ? userCart : guestCart,
        )}
      </div>
    );
  }
}

const ShoppingCartWithData = compose(
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(ShoppingCart);

const ShoppingCartWithDataAndState = connect(({ mobile, orders, auth, user }) => ({
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
  saveGuest: updatedGuest => dispatch(orderActions.saveGuest(updatedGuest)),
}))(ShoppingCartWithData);
export default ShoppingCartWithDataAndState;
