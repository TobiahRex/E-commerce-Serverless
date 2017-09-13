import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  FormattedMessage as IntlMsg,
  FormattedNumber as IntlInt,
} from 'react-intl';
import _ from 'lodash';
import {
  NavbarCartProductsCardImage,
  NavbarCartProductsCardInfo,
  NavbarCartProductsCardActions,
} from './';

const { bool, func, object, number, arrayOf } = PropTypes;

class NavbarCartProducts extends Component {
  static propTypes = {
    loading: bool.isRequired,
    cartItems: arrayOf(object),
    cartTotal: number.isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  };
  static defaultProps = {
    cartItems: [],
  }

  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty(),

      productsDiff = isArrayEqual(nextProps.cartItems, this.props.cartItems);

    if (!_.isEqual(nextProps, this.props) || productsDiff) return true;
    return false;
  }

  filterImages = (images) => {
    if (!images.length) return '';

    const helper = ({ purpose }) => purpose === 'card';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }

  renderListContent = ({ cartItems, loading }) => {
    if (loading) {
      return (
        <div className="products-list-empty">
          <FontAwesome name="spinner" size="3x" pulse />
          <br />
          <br />
          <IntlMsg id="navbar.cart.loading" />
        </div>
      );
    } else if (!cartItems.length && !loading) {
      return (
        <div className="products-list-empty">
          <IntlMsg id="navbar.cart.empty" />
        </div>
      );
    }
    return this.renderCartItems(cartItems);
  }

  renderCartItems = productItems => productItems.map((productObj) => {
    const {
      _id,
      qty,
      product: {
        title,
        price,
        images,
        nicotineStrength,
        slug,
      },
    } = productObj;

    return (
      <li
        className="products-list-card"
        key={_id}
      >
        <NavbarCartProductsCardImage
          imageUrl={this.filterImages(images)}
          title={title}
        />

        <NavbarCartProductsCardInfo
          qty={qty}
          title={title}
          price={price}
          nicotineStrength={nicotineStrength}
        />

        <NavbarCartProductsCardActions
          productId={_id}
          slug={slug}
          editCartItem={this.props.editCartItem}
          deleteFromCart={this.props.deleteFromCart}
        />
      </li>);
  });

  render() {
    let currency = '';
    switch (IntlLocale) {
      case 'en': currency = 'usd'; break;
      case 'ja': currency = 'jpy'; break;
      default: currency = 'usd';
    }
    /* eslint-disable react/style-prop-object */
    return (
      <div>
        <div className="products">
          <ul className="products-list">
            {this.renderListContent(this.props)}
          </ul>
        </div>
        <div className="total-price">
          <span className="total-price-title">
            <IntlMsg id="navbar.cart.total-price" />
          </span>
          <span className="total-price-amount">
            <IntlInt
              style="currency"
              currency={currency}
              value={this.props.cartTotal}
              minimumFractionDigits="2"
              maximumFractionDigits="2"
            />
          </span>
        </div>
      </div>
    );
  }
}
export default NavbarCartProducts;
