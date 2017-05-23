import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import localeActions from '../../../../redux/locale';
import NavbarLanguage from './navbar_web_language/';
import NavbarUserActions from './navbar_web_userActions/';
import NavbarCart from './navbar_web_cart/container/';


const { string, number, func, arrayOf, shape } = PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    push: func.isRequired,
    qty: number.isRequired,
    saveLanguage: func.isRequired,
    activeLanguage: string.isRequired,
    products: arrayOf(shape({
      qty: number,
      strength: number,
      id: string,
      title: string,
      price: string,
      nicotine_strengths: arrayOf(string),
      imageUrl: string,
      routeTag: string,
    })).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      activeLanguage: props.activeLanguage,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { activeLanguage, products } = nextProps;
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({
        products,
        activeLanguage,
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();
    const productsDiff = isArrayEqual(nextProps, this.props);

    if (!_.isEqual(nextProps, this.props) || productsDiff) return true;
    return false;
  }

  onLanguageChange = (language) => {
    this.props.saveLanguage(language);
    this.setState({ activeLanguage: language });
  }

  editCartItem = (e) => {
    let route = e.target.dataset.route;
    let id = e.target.dataset.id;
    if (!route) route = e.target.parentNode.dataset.route;
    if (!id) id = e.target.parentNode.dataset.id;
    this.props.push(`/juice/${route}?id=${id}`);
    /* TODO: Edit Product @ Single Product Page
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
      products: prevState.products
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
            qty={this.props.qty}
            products={this.state.products}
            editCartItem={this.editCartItem}
            deleteFromCart={this.deleteFromCart}
          />
        </div>
      </div>
    );
  }
}
const calculateQty = (loggedIn, cartObj) => {
  const cart = cartObj[loggedIn ? 'member' : 'guest'];
  if (!cart.length) return 0;
  return cart.reduce((accum, { qty }) => accum + qty, 0);
};

export default connect(
  ({ locale, auth, orders }) => ({
    activeLanguage: locale.activeLanguage,
    qty: calculateQty(auth.loggedIn, orders.cart),
    products: orders.cart[auth.loggedIn ? 'member' : 'guest'],
  }),
  dispatch => ({
    push: location => dispatch(push(location)),
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),
  }),
)(NavbarUpper);
/* Nested Component Map:
1. NavbarOptions = func
2. NavbarUserActions == func
3. NavbarCart = func
*/
