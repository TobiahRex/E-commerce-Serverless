import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
      id: string,
      qty: number,
      price: string,
      strength: number,
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
    if (nextProps !== this.props) {
      this.setState({ activeLanguage: nextProps.activeLanguage });
    }
  }

  onLanguageChange = (language) => {
    this.props.saveLanguage(language);
    this.setState({ activeLanguage: language });
  }

  editProduct = (e) => {

  }

  deleteProduct = (e) => {
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
