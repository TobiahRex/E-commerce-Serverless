import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';
import {
  localeActions,
  WebflowJs,
} from './assets/utils';
import {
  NavbarLogoSxn,
  NavbarLanguage,
  NavbarAuthSxn,
  NavbarCart,
  NavbarNavs,
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
    };
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
    const language = e.target.dataset.language || e.target.dataset.parentNode.language;

    this.setState(() => ({
      activeLanguage: language,
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
  deleteFromCart = () => {
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
      this.props.DeleteFromCart({
        variables: {
          userId,
          productId,
        },
      })
      .then(({ data: { DeleteFromCart: updatedUser } }) => {
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
    const { activeLanguage } = this.props;
    return (
      <nav className="navbar-big">
        <div className="navbar-big__nav-section">
          <div className="nav-section__navbar-content">
            <NavbarLogoSxn />
            <div className="navbar-content__action-section">
              <div className="action-section__navbar-action-top">
                <NavbarLanguage
                  handleLangChange={this.handleLangChange}
                  activeLanguage={activeLanguage}
                />
                <div className="navbar-action-top__right-side">
                  <NavbarAuthSxn />
                  <NavbarCart />
                </div>
              </div>
              <NavbarNavs />
            </div>
          </div>
        </div>
        <NavbarProducts />
        <NavbarMedia />
        <NavbarInfo />
        <NavbarCartDropdown />
      </nav>
    );
  }
}
const { func, string } = PropTypes;
NavbarWeb.propTypes = {
  location: string.isRequired,
  activeLanguage: string.isRequired,
  saveLanguage: func.isRequired,
  push: func.isRequired,
};
const NavbarWebWithLifecycle = lifecycle({
  componentDidMount: () => {
    WebflowJs();
    // WebflowAnimations();
    // WebflowAnimations2();
  },
  componentDidUpdate: () => {
    // WebflowJs();
    // WebflowAnimations();
    // WebflowAnimations2();
  },
})(NavbarWeb);

const NavbarWebWithLifecycleAndState = connect(
  ({ locale, routing }) => ({
    activeLanguage: locale.activeLanguage,
    location: routing.locationBeforeTransitions.pathname,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),
  }),
)(NavbarWebWithLifecycle);

export default NavbarWebWithLifecycleAndState;
