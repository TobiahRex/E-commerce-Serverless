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

const { string, func, objectOf, any } = PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    push: func.isRequired,
    activeUser: objectOf(any),
    saveLanguage: func.isRequired,
    activeLanguage: string.isRequired,
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
    const { activeLanguage } = nextProps;
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ activeLanguage });
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
    const {
      updateToGuestCart,
      activeUser: { shopping: { cart } },
    } = this.props;

    let productId = e.target.dataset.id;
    if (!productId) productId = e.target.parentNode.dataset.id;

    const updatedCartProducts = cart.filter(({ id }) => id !== productId);
    updateToGuestCart(updatedCartProducts);
  }

  render() {
    const { activeUser, activeLanguage } = this.props;
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
            activeUser={activeUser}
            editCartItem={this.editCartItem}
            deleteFromCart={this.deleteFromCart}
          />
        </div>
      </div>
    );
  }
}

const NavbarUpperWithState = connect(
  ({ locale, user }) => ({
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
  graphql(UpdateToMemberCart, { name: 'UpdateToMemberCart' }),
)(NavbarUpperWithState);

export default NavbarUpperWithStateAndGraphQL;
