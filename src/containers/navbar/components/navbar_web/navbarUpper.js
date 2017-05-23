import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import localeActions from '../../../../redux/locale';
import NavbarLanguage from './navbar_web_language/';
import NavbarUserActions from './navbar_web_userActions/';
import NavbarCart from './navbar_web_cart/container/';
import orderActions from '../../../../redux/orders/';


const { string, number, func, arrayOf, shape } = PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    push: func.isRequired,
    qty: number.isRequired,
    saveLanguage: func.isRequired,
    activeLanguage: string.isRequired,
    products: arrayOf(shape({
      id: string,
      qty: number,
      title: string,
      price: string,
      imageUrl: string,
      routeTag: string,
      strength: number,
      nicotine_strengths: arrayOf(string),
    })).isRequired,
    updateToGuestCart: func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
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

  shouldComponentUpdate(nextProps, nextState) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();
    const productsDiff = isArrayEqual(nextProps, this.props);

    if (
      !_.isEqual(nextProps, this.props) ||
      !_.isEqual(nextState, this.state) ||
      productsDiff
    ) return true;
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
    this.props.push('/cart');
  }

  deleteFromCart = (e) => {
    let productId = e.target.dataset.id;
    if (!productId) productId = e.target.parentNode.dataset.id;

    const updatedCartProducts = this.props.products
    .filter(({ id }) => id !== productId);
    this.props.updateToGuestCart(updatedCartProducts);
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
            products={this.props.products}
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

    updateToGuestCart: updatedCartProducts =>
    dispatch(orderActions.updateToGuestCart(updatedCartProducts)),
  }),
)(NavbarUpper);
/* Nested Component Map:
1. NavbarOptions = func
2. NavbarUserActions == func
3. NavbarCart = func
*/
