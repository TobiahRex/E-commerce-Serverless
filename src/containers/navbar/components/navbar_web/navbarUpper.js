import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import localeActions from '../../../../redux/locale';
import NavbarLanguage from './navbar_web_language/';
import NavbarUserActions from './navbar_web_userActions/';
import NavbarCart from './navbar_web_cart/';


const { string, number, func, arrayOf, shape } = PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    activeLanguage: string.isRequired,
    qty: number.isRequired,
    cartProducts: arrayOf(shape({
      qty: number,
      strength: number,
      id: string,
      title: string,
      price: string,
      nicotine_strengths: arrayOf(string),
      imageUrl: string,
      routeTag: string,
    })).isRequired,
    saveLanguage: func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      activeLanguage: props.activeLanguage,
      qty: props.qty,
      cartProducts: props.cartProducts,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { activeLanguage, qty, cartProducts } = nextProps;
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({
        activeLanguage,
        qty,
        cartProducts,
      });
    }
  }

  onLanguageChange = (language) => {
    this.props.saveLanguage(language);
    this.setState({ activeLanguage: language });
  }

  editCartItem = (e) => {
    let route = e.target.dataset.route;
    if (!route) {
      route = e.target.parentNode.dataset.route;
    }
    this.push(`/juice/${route}`);
    /* TODO: Edit Product @ Single Product Page
      Idea 1) dynamically render the contents from the cart into the Single Product page on load, if there is a matching item.

      Idea 2) set a flag on orders for "edit = true"; If the user is on the Single product page, then do the work of filtering the cart per the location they navigated to, and pre-populate the contents for "qty" & "nic strength" with the users choices.
    */
  }

  deleteFromCart = (e) => {
    let productId = e.target.dataset.id;
    if (!productId) {
      productId = e.target.parentNode.dataset.id;
    }

    this.setState(prevState => ({
      ...prevState,
      cartProducts: prevState.cartProducts
        .filter(({ id }) => id !== productId),
    }));
  }

  render() {
    return (
      <div className="navbar-actionSection-upper">
        <div className="navbar-actionSection-upper-options">
          <NavbarLanguage
            onLanguageChange={this.onLanguageChange}
            activeLanguage={this.props.activeLanguage}
          />
        </div>
        <NavbarUserActions />
        <div className="navbar actionSection upper mycart-container">
          <NavbarCart
            qty={this.state.qty}
            cartProducts={this.state.cartProducts}
            editCartItem={this.editCartItem}
            deleteFromCart={this.deleteFromCart}
          />
        </div>
      </div>
    );
  }
}
const calculateQty = (loggedIn, cartObj) => (
  cartObj[loggedIn ? 'member' : 'guest']
  .reduce((accum, next) => {
    if (next.id) {
      accum += 1;
      return accum;
    }
    return accum;
  }, 0)
);

export default connect(
  ({ locale, auth, orders }) => ({
    activeLanguage: locale.activeLanguage,
    qty: calculateQty(auth.loggedIn, orders.cart),
    cartProducts: orders.cart[auth.loggedIn ? 'member' : 'guest'],
  }),
  dispatch => ({
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),
  }),
)(NavbarUpper);
/* Nested Component Map:
1. NavbarOptions = func
2. NavbarUserActions == func
3. NavbarCart = func
*/
