/* eslint-disable no-lone-blocks, import/first*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';
import { FormattedMessage as IntlMsg, injectIntl, intlShape } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import orderActions from '../../../../../redux/orders/';
import userActions from '../../../../../redux/user/';
import {
  FindProductById,
  AddToMemberCart,
  EditToMemberCart,
  FindProductsByFlavor,
} from './graphql.imports';
import {
  MainTitle,
  BreadCrumb,
  ActionBtns,
  SuccessModal,
  BulkSaleModal,
  RegisterModal,
  ProductDisplay,
} from './component.imports';

import {
  arrayDeepEquality as ArrayDeepEquality,
} from './utilities.imports';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'product.breadcrumb.paths1': bcPaths1,
          'product.breadcrumb.lastCrumb': lastCrumb,
          'product.title.main': mainTitle,
          'product.title.vendor': vendorTitle,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
      mainTitle,
      vendorTitle,
    };

    this.state = {
      qty: 0,
      error: false,
      added: false,
      product: null,
      errorMsg: '',
      showBulkModal: false,
      chosenStrength: 0,
      showSuccessModal: false,
      showRegisterModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      loggedIn,
    } = nextProps;

    if (loggedIn !== this.props.loggedIn) this.setState(() => ({ loggedIn }));
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

    if (
      !_.isEqual(nextProps.data, this.props.data) ||
      !ArrayDeepEquality(nextProps.userCart, this.props.userCart) ||
      !ArrayDeepEquality(nextProps.guestCart, this.props.guestCart) ||
      !_.isEqual(nextProps, this.props)
    ) return true;

    if (!_.isEqual(nextState, this.state)) return true;

    return false;
  }

  /**
  * Function: "modalHandler"
  * 1) receives "event" - and extracts parent element & tag element values.
  * 2) Filters parent element via Switch block.
  * 3) Once parent element has been identified, filters tag element via nested switch block.
  * 4) Based on the type of modal that's been chosen by user, either "toggleModal" or "toggleModalAndGo" is called.  The difference between the two is that "toggleModal" simply shows static information but does not allow navigation to outside components.  "toggleModalAndGo" does allow navigation to outside components and is given the location as an input argument when called.
  *
  * @param {object} e - event object.
  *
  * @return {function call} - calls "toggleModal" || "toggleModalAndGo"
  */
  modalHandler = (e) => {
    let parentEl = e.target.dataset.parent;
    let tagEl = e.target.dataset.tag;

    if (!parentEl) parentEl = e.target.parentNode.dataset.parent;
    if (!tagEl) tagEl = e.target.parentNode.dataset.tag;

    const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];

    switch (parentEl) {
      case 'success': {
        switch (tagEl) {
          case 'view-cart':
            this.toggleModalAndGo('showSuccessModal', '/cart'); break;
          case 'view-checkout':
            this.toggleModalAndGo('showSuccessModal', '/express_checkout'); break;
          default: this.toggleModal('showSuccessModal');
        }
      } break;
      case 'promotion-bulk': {
        switch (tagEl) {
          case 'view-juices':
            this.toggleModalAndGo('showBulkModal', `/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`); break;
          default: this.toggleModal('showBulkModal');
        }
      } break;
      case 'promotion-register': {
        switch (tagEl) {
          case 'view-signup':
            this.toggleModalAndGo('showRegisterModal', '/login'); break;
          default: this.toggleModal('showRegisterModal');
        }
      } break;
      default: this.toggleModal();
    }
  }

  /**
  * Function: "toggleModal"
  * 1) recieves name of modal as input argument.
  * 2) sets the show state variable for that modal to "true".
  *
  * @param {string} modal - name of the modal to show.
  *
  * @return {new state} - returns new state with new modal show value.
  */
  toggleModal = (modal) => {
    this.setState(prevState => ({ [modal]: !prevState[modal] }));
  }

  /**
  * Function: "toggleModalAndGo"
  * 1) recieves name of modal as input argument & destination name for in-modal navigation buttons.
  * 2) sets the show state variable for that modal to "true".
  *
  * @param {string} modal - name of the modal to show.
  * @param {string} location - name of the destination for nav buttons.
  *
  * @return {new state} - returns new state with new modal show value.
  */
  toggleModalAndGo = (modal, location) => {
    this.setState(prevState => ({
      [modal]: !prevState[modal],
    }), () => this.props.push(location));
  }

  /**
  * Function: "qtyHandler"
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
    const buttonEl = e.target.dataset.tag || e.target.parentNode.dataset.tag;

    const qtyToCheck = 1;
    const { globalRequestQty } = this.composeGlobalCartInfo();

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
  * Function: "nicotineHandler"
  * 1) Extract productId & nicotine Strength value from click event object.
  * 2) Fetch all db products matching the clicked flavor.
  * 3) Filter results by the id of the clicked product's id.
  * 4) Save result to component's state.
  * NOTE - need to save "chosenStrength" to state, to highlight the nicotine strength the user chooses visually.
  *
  * @param {e} object - the click event object.
  *
  * @return {new state} - returns new state with chosen product from local DB && nicotine strength value.
  */
  nicotineHandler = (e) => {
    const productId = e.target.dataset.product || e.target.parentNode.dataset.product;
    const nicStrength = e.target.dataset.nicotinestrength || e.target.parentNode.dataset.nicotinestrength;

    const product = this.props.data.FindProductsByFlavor
    .filter(({ _id }) => _id === productId)[0];

    this.setState(() => ({
      product,
      error: false,
      errorMsg: '',
      chosenStrength: Number(nicStrength),
    }));
  }

  /**
  * Function: "composeGlobalCartInfo"
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

    const {
      loggedIn,
      guestCart,
      userCart,
    } = this.props;

    const {
        qty: requestQty,  // alias
        product: stateProduct,
      } = this.state,
      prevCartIds = [];

    // Update the User/Guest cart quantity with like items.
    let updatedCart = [],
      updated = true;
    // If user has items in their cart && logged in check & update "like items".
    if (loggedIn && userCart.length) {
      updated = true;
      const updatedUserCart = userCart
      .map((userCartProduct) => {
        // Apollo & GraphQL add "__typename" property for id purposes to query results.  When mutating the result, this property must be removed if object is to be used in a subsequent query/mutation different than it's originating query.
        if (!!userCartProduct.__typename) {
          delete userCartProduct.__typename;
        }

        if (
          !!userCartProduct.product &&
          userCartProduct.product === stateProduct._id
        ) {
          userCartProduct.qty += requestQty;
        }

        return userCartProduct;
      });

      updatedCart = [...updatedUserCart];

    // If user has items in their cart & is a guest, check & update "like items"
    } else if (!loggedIn && !!guestCart.length) {
      updated = true;
      const updatedGuestCart = guestCart.map((guestCartProduct) => {
        if (
          !!guestCartProduct._id &&
          guestCartProduct._id === stateProduct._id
        ) {
          guestCartProduct.qty += requestQty;
        }

        return guestCartProduct;
      });
      updatedCart = [...updatedGuestCart];
    }

    // --- Add up all the product quantities to check for qty violations later. -- Also save the id's of all items to know which items are NEW and OLD to call "Add" or "Update" respectively.
    const globalRequestQty = !updated ? requestQty : updatedCart.reduce((accum, nextObj) => {
      if (nextObj && !!nextObj.qty) {
        accum += nextObj.qty;
        if (!!nextObj._id) prevCartIds.push(nextObj._id);
        if (!!nextObj.product) prevCartIds.push(nextObj.product);
      }
      return accum;
    }, 0);

    return {
      updatedCart,
      prevCartIds,
      globalRequestQty,
    };
  }

  /**
  * Function: "addToCartHandler"
  * 1) Verify that the user specified a quantity.  If not - show error msg. If they have, continue...
  * 2) Verify that the user specified a nicotineStrength. If not - show error msg. If they have, continue...
  * 3) call "composeGlobalCartInfo" and destructure the 3 return values into their own constants.
  * 4) destructure "this.state", and create a flag variable called {bool} "deltaQty" which will help detect errors in too much or too little quantity when adding item to the cart.
  * 5) Verify that "globalRequestQty" is not exceeding the 4 count limit.  If so, show "Max Items" error message. Otherwise...
  * 6) Verify that for this instance, the user is not choose too high a number for "qty".  If so, show applicable error message about too many items. If not, continue..
  * 7) Destructure "userId" & "loggedIn" from this.props.  If the user is loggedIn, we'll update the loggedIn user's cart using the id.  Otherwise, we'll update the guest cart and the userId will not be needed.
  * 8) Define const "currentGuestProduct" which is an object that contains the product saved to state "nicotineHandler" was called.  And the requested qty.
  * 9) Define const "currentMemberProduct" which is an object that contains the product id as "productId", that saved to state when "nicotineHandler" was called. And the requested qty.
  * // ---------------------------------------------------------
  * 10a) If user is logged in, and there's already products in their cart, but if the current product is not one of them, add it.
  * 11a) If user is NOT logged in, and there's already products in their cart, but the current product is not one of them, add it.
  * 12a) If the user is logged in, and there's already products in their cart, then reset the component's local state.  Once complete, call the GraphQL mutation "EditToMemberCart", passing in the user's id, and the updated array of products as variables.
  * 13a) Once GraphQL mutation is complete, update the redux state with the new user's profile information.
  * // ---------------------------------------------------------
  * 10b) If the user is logged in, BUT there's no items in their cart yet, then reset component's state.
  * 11b) Once complete, call the GraphQL mutation "AddToMemberCart" , passing in the user's id, and the updated array of products as variables.
  * 12b) Once GraphQL mutation is complete, update the redux state with the new user's profile information.
  * // ---------------------------------------------------------
  * 10c) If the user is a NOT logged in, and there's already items in their cart, then reset component's state,
  * 11c) Once complete dispatch a redux action called "saveGuestCart" passing in the array of updated products which will update a pre-existing array in the Redux store.
  * // ---------------------------------------------------------
  * 10d) If the user is NOT logged in, and there's no items in their cart, then reset component's state,
  * 11d) Once complete dispatch a redux action called "addToGuestCart" and pass in the single object "currentGuestProduct".
  *
  * @param none
  *
  * @return {object} -
  */
  addToCartHandler = () => {
    if (this.state.qty === 0) {
      this.setState(() => ({
        error: true,
        errorMsg: 'You must choose a quantity of at least 1.',
      }));
    } else if (!this.state.chosenStrength) {
      this.setState(() => ({
        error: true,
        errorMsg: 'No strength',
      }));
    } else {
      const {
        updatedCart,
        prevCartIds,
        globalRequestQty,
      } = this.composeGlobalCartInfo();

      const {
          qty,
          product,
        } = this.state,

        deltaQty = (globalRequestQty > 4) && (globalRequestQty - 4);

      if (globalRequestQty > 4) {
        this.setState({
          qty: 0,
          error: true,
          errorMsg: 'Max items',
          chosenStrength: 0,
        });
      } else if (deltaQty > 0) {
        this.setState(() => ({
          qty: 0,
          error: true,
          errorMsg: `You have too many items in your cart.  Please remove ${deltaQty} items from your cart to add the requested quantity.`,
        }));
      } else if (!deltaQty) {
        const { userId, loggedIn } = this.props,

          currentGuestProduct = {
            qty,
            ...product,
          },

          currentMemberProduct = {
            qty,
            product: product._id,
          };

        // If user is logged in, and there's already products in their cart, but the current product is not one of them, add it.
        if (
          loggedIn &&
          updatedCart.length &&
          !prevCartIds.includes(product._id)
        ) updatedCart.push(currentMemberProduct);

        // If user is NOT logged in, and there's already products in their cart, but the current product is not one of them, add it.
        if (
          !loggedIn &&
          updatedCart.length &&
          !prevCartIds.includes(product._id)
        ) updatedCart.push(currentGuestProduct);


        if (loggedIn) {
          if (updatedCart.length) {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.EditToMemberCart({
                variables: {
                  userId,
                  products: updatedCart,
                },
              })
              .then(({ data: { EditToMemberCart: updatedUser } }) => {
                this.props.saveUser(updatedUser);
              });
            });
          } else {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.AddToMemberCart({
                variables: {
                  qty,
                  userId,
                  product: product._id,
                },
              })
              .then(({ data: { AddToMemberCart: updatedUser } }) => {
                this.props.saveUser(updatedUser);
              });
            });
          }
        } else if (!loggedIn) {
          if (updatedCart.length) {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.saveGuestCart(updatedCart);
            });
          } else {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.addToGuestCart(currentGuestProduct);
            });
          }
        }
      }
    }
  }


  routerPush = (e) => {
    this.props.push(e.target.dataset.slug || e.target.parentNode.dataset.slug);
  }

  /**
  * Function: "componentDidUpdate"
  * Resets the state variable "added" to false to reset dynamic animations after user adds item to their cart.
  * @param none.
  *
  * @return none.
  */
  componentDidUpdate() {
    if (this.state.added) {
      setTimeout(() => {
        this.setState({ added: false });
      }, 5000);
    }
  }

  render() {
    const {
      qty,
      error,
      added,
      errorMsg,
      showBulkModal,
      chosenStrength,
      showSuccessModal,
      showRegisterModal,
    } = this.state;

    const {
      data,
      taxRate,
      loggedIn,
    } = this.props;

    return (
      <div className="juice-page__main">
        <BreadCrumb
          paths={[this.intl.bcPaths1]}
          classes={['home', 'home']}
          destination={['/', 'juices']}
          lastCrumb={data.FindProductsByFlavor ? data.FindProductsByFlavor[0].product.title : this.intl.lastCrumb}
        />
        {
          data.FindProductsByFlavor ?
            <MainTitle
              vendor={data.FindProductsByFlavor[0].product.vendor[IntlLocale]}
              mainTitle={data.FindProductsByFlavor[0].product.mainTitle[IntlLocale]}
            /> : ''
        }
        {
          data.loading ?
          (<h1 className="main__loading">
            <FontAwesome name="spinner" pulse size="3x" />
            <br />
            <IntlMsg id="product.single.loading" />
          </h1>) :
          <ProductDisplay
            qty={qty}
            added={added}
            error={error}
            errorMsg={errorMsg}
            loggedIn={loggedIn}
            qtyHandler={this.qtyHandler}
            chosenStrength={chosenStrength}
            modalHandler={this.modalHandler}
            nicotineHandler={this.nicotineHandler}
            addToCartHandler={this.addToCartHandler}
            productsArray={data.FindProductsByFlavor ? data.FindProductsByFlavor : []}
          />
        }
        <ActionBtns
          routerBack={this.props.goBack}
          routerPush={this.routerPush}
        />

        <SuccessModal
          qty={qty}
          productTitle={data.FindProductById ? data.FindProductById.product.title : ''}
          showModal={showSuccessModal}
          modalHandler={this.modalHandler}
        />

        <BulkSaleModal
          taxRate={taxRate}
          showModal={showBulkModal}
          modalHandler={this.modalHandler}
        />

        <RegisterModal
          taxRate={taxRate}
          loggedIn={loggedIn}
          showModal={showRegisterModal}
          modalHandler={this.modalHandler}
        />
      </div>
    );
  }
}

const SingleProductIntl = injectIntl(SingleProduct);
/**
* NOTE: This component calls GraphQL compose function first, and provides the results to the react-redux-connect function as props.
*
* 1) Redux's "connect" function maps state & dispatch to props on "SingleProduct" and returns HOC - "SingleProductWithState"
* 2) React Apollo's "compose" function, composes multiple GraphQL queries and mutations onto the HOC returned in Step 1. - Redux's mapped props are available to these graphql functions if needed due to step 1.  Returns HOC "SingleProductWithStateAndData".
* 3) This final HOC is the default export.
*
*/
const SingleProductWithState = connect(null,
  dispatch => ({
    push: location => dispatch(push(location)),

    goBack: () => dispatch(goBack()),

    saveUser: updatedUser => dispatch(userActions.saveUser(updatedUser)),

    addToGuestCart: productObj =>
    dispatch(orderActions.addToGuestCart(productObj)),

    saveGuestCart: updatedCartProducts =>
    dispatch(orderActions.saveGuestCart(updatedCartProducts)),

    addToReduxProfileCart: cart => dispatch(userActions.addToReduxProfileCart(cart)),

    addToReduxMemberCart: products => dispatch(orderActions.addToReduxMemberCart(products)),

    updateToReduxMemberCart: products => dispatch(orderActions.updateToReduxMemberCart(products)),
  }),
)(SingleProductIntl);

const SingleProductWithStateAndData = compose(
  graphql(FindProductsByFlavor, {
    options: ({ location }) => ({
      name: 'FindProductsByFlavor',
      variables: {
        flavor: location.pathname.split('/')[2],
      },
    }),
  }),
  graphql(AddToMemberCart, { name: 'AddToMemberCart' }),
  graphql(EditToMemberCart, { name: 'EditToMemberCart' }),
  graphql(FindProductById, { skip: true, name: 'FindProductById' }),
)(SingleProductWithState);

const SingleProductWithStateAndData2 = connect(
({ orders, auth, routing, user }) => ({
  userId: user.profile ? user.profile._id : '',
  flavor: routing.locationBeforeTransitions.pathname.split('/')[1],
  taxRate: orders.taxRate.totalRate,
  loggedIn: auth.loggedIn || false,
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
}))(SingleProductWithStateAndData);

const {
  any,
  func,
  number,
  bool,
  string,
  shape,
  arrayOf,
  objectOf,
} = PropTypes;

const ProductShape = shape({
  _id: string,
  product: shape({
    qty: number,
    price: string,
    title: string,
    slug: string,
    strength: number,
    mainTitle: string,
    nicotineStrength: string,
    images: arrayOf(shape({
      purpose: string,
      url: string,
    })),
    quantities: shape({
      available: number,
      inCarts: number,
      purchased: number,
    }),
  }),
});

SingleProduct.propTypes = {
  intl: intlShape.isRequired,
  push: func.isRequired,
  goBack: func.isRequired,
  userId: string,
  flavor: string,
  taxRate: number.isRequired,
  loggedIn: bool.isRequired,
  saveUser: func.isRequired,
  addToGuestCart: func.isRequired,
  AddToMemberCart: func.isRequired,
  saveGuestCart: func.isRequired,
  EditToMemberCart: func.isRequired,
  addToReduxMemberCart: func.isRequired,
  addToReduxProfileCart: func.isRequired,
  updateToReduxMemberCart: func.isRequired,
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
  data: shape({
    FindProductById: ProductShape,
    FindProductsByFlavor: arrayOf(ProductShape),
  }).isRequired,
};
SingleProduct.defaultProps = {
  userId: '',
  flavor: '',
  userCart: null,
  guestCart: null,
};

export default SingleProductWithStateAndData2;
