import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { graphql, compose } from 'react-apollo';
import localeActions from '../../../../redux/locale';
import NavbarLanguage from './navbar_web_language/';
import NavbarUserActions from './navbar_web_userActions/';
import NavbarCart from './navbar_web_cart/container/';
import orderActions from '../../../../redux/orders/';
import { UpdateToMemberCart } from '../../../../graphQL/mutations';

const { string, number, func, arrayOf, objectOf, any, shape } = PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    push: func.isRequired,
    qty: number.isRequired,
    saveLanguage: func.isRequired,
    activeUser: objectOf(any),
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
  static defaultProps = {
    activeUser: null,
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
    const {
      qty,
      products,
      activeUser,
      activeLanguage,
    } = this.props;
    return (
      <div className="navbar-actionSection-upper">
        <div className="navbar-actionSection-upper-options">
          <NavbarLanguage
            onLanguageChange={this.onLanguageChange}
            activeLanguage={activeLanguage}
          />
        </div>

        <NavbarUserActions activeUser={activeUser} />

        <div className="navbar actionSection upper mycart-container">
          <NavbarCart
            qty={qty}
            products={products}
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

const NavbarUpperWithState = connect(
  ({ locale, auth, orders, user }) => ({
    qty: calculateQty(auth.loggedIn, orders.cart),
    products: orders.cart[auth.loggedIn ? 'member' : 'guest'],
    activeUser: user.profile,
    activeLanguage: locale.activeLanguage,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),

    updateToGuestCart: updatedCartProducts =>
    dispatch(orderActions.updateToGuestCart(updatedCartProducts)),
  }),
)(NavbarUpper);

const NavbarUpperWithStateAndGraphQL = compose(
  graphql(UpdateToMemberCart, { name: 'updateToMemberCart' }),
)(NavbarUpperWithState);

export default NavbarUpperWithStateAndGraphQL;
