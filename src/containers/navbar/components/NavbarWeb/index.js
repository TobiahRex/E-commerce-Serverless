import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import './assets/styles/style.css';
import {
  localeActions,
  WebflowJs,
  WebflowAnimations,
  WebflowAnimations2,
  orderActions,
  userActions,
  DeleteFromMemberCart,
  FetchMultipleProducts,
  FetchMultipleProductsOptions,
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
} from './assets/utils';
import {
  NavbarMain,
  NavbarProducts,
  NavbarMedia,
  NavbarInfo,
  NavbarCartDropdown,
} from './components';

class NavbarWeb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      activeLanguage: '',
      renderKey: 1,
    };
  }

  componentDidMount() {
    WebflowJs();
    WebflowAnimations();
    WebflowAnimations2();
  }

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

  handleLangChange = (e) => {
    // Depending on what element the user clicks, an upward dom traversal will take place from a max element depth of 5, thus 5 possibilities.
    const language = e.target.dataset.language || e.target.parentNode.dataset.language || e.target.parentNode.parentNode.dataset.language || e.target.parentNode.parentNode.parentNode.dataset.language || e.target.parentNode.parentNode.parentNode.parentNode.dataset.language;

    this.setState(prevState => ({
      activeLanguage: language,
      renderKey: prevState.renderKey + 1,
    }),
    () => {
      this.props.saveLanguage(language);
      this.props.push(location);
    });
  }

  /**
  * Function: "editCartItem"
  * 1) Navigate to the cart page.
  */
  editCartItem = () => {
    this.setState(prevState => ({
      renderKey: prevState.renderKey + 1,
    }), () => {
      this.props.push('/cart');
    });
  };

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
      .then(({ data: { DeleteFromCart: updatedUser } }) => {
        this.setState(prevState => ({
          renderKey: prevState.renderKey + 1,
        }), () => {
          saveUser(updatedUser);
        });
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
      this.setState(prevState => ({
        renderKey: prevState.renderKey + 1,
      }), () => {
        saveGuestCart(guestCart.filter(({ _id }) => _id !== productId));
      });
    }
  }

  reRenderNavbar = () => {
    this.setState(prevState => ({
      ...prevState,
      renderKey: prevState.renderKey + 1,
    }));
  }

  fireAnimations = () => {
    WebflowAnimations();
    WebflowAnimations2();
  }

  render() {
    const {
      activeLanguage,
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
      <nav className="navbar-big">
        <NavbarMain
          qty={qty}
          activeLanguage={activeLanguage}
          handleLangChange={this.handleLangChange}
          reRenderNavbar={this.reRenderNavbar}
          renderKey={this.state.renderKey}
          fireAnimations={this.fireAnimations}
        />
        <NavbarProducts
          reRenderNavbar={this.reRenderNavbar}
          renderKey={this.state.renderKey}
        />
        <NavbarMedia
          reRenderNavbar={this.reRenderNavbar}
          renderKey={this.state.renderKey}
        />
        <NavbarInfo
          reRenderNavbar={this.reRenderNavbar}
          renderKey={this.state.renderKey}
        />
        <NavbarCartDropdown
          reRenderNavbar={this.reRenderNavbar}
          loading={!!fetchProductsResult && fetchProductsResult.loading}
          cartItems={cartItems}
          editCartItem={this.editCartItem}
          deleteFromCart={this.deleteFromCart}
          renderKey={this.state.renderKey}
          cartTotal={
            cartItems.length ?
            cartItems.reduce((acc, next) =>
              acc + (Number(next.product.price) * next.qty), 0,
            ) : 0
          }
        />
      </nav>
    );
  }
}
const NavbarWithData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: FetchMultipleProductsOptions,
  }),
  graphql(DeleteFromMemberCart, { name: 'DeleteFromMemberCart' }),
)(NavbarWeb);

const NavbarWebWithLifecycleAndState = connect(
  ({ user, auth, orders, locale, routing }) => ({
    qty: 0,
    userId: auth.loggedIn ? user.profile._id : '',
    loggedIn: auth.loggedIn,
    guestCart: orders.cart,
    userCart: auth.loggedIn ? user.profile.shopping.cart : [],
    location: routing.locationBeforeTransitions.pathname,
    activeLanguage: locale.activeLanguage,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),
    saveGuestCart: updatedCartProducts =>
    dispatch(orderActions.saveGuestCart(updatedCartProducts)),
    saveUser: updatedUser => dispatch(userActions.saveUser(updatedUser)),
  }),
)(NavbarWithData);

const {
  any,
  bool,
  func,
  shape,
  number,
  object,
  string,
  arrayOf,
  objectOf,
} = PropTypes;
NavbarWeb.propTypes = {
  location: string.isRequired,
  activeLanguage: string.isRequired,
  saveLanguage: func.isRequired,
  push: func.isRequired,
  qty: number.isRequired,
  userId: string.isRequired,
  loggedIn: bool.isRequired,
  guestCart: arrayOf(object),
  saveUser: func.isRequired,
  saveGuestCart: func.isRequired,
  DeleteFromMemberCart: func.isRequired,
  FetchMultipleProducts: objectOf(any).isRequired,
  data: shape({
    FetchUserProfile: shape({
      qty: number,
      strength: number,
      product: shape({
        sku: string,
        title: string,
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
  userCart: arrayOf(
    shape({
      qty: number,
      productId: string,
    }),
  ),
};
NavbarWeb.defaultProps = {
  data: null,
  guestCart: null,
  userCart: null,
};


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
export default NavbarWebWithLifecycleAndState;
