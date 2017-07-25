import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import {
  BreadCrumb,
  BillingAddress,
  ShippingAddress,
  ShippingMethod,
  CreditCardInfo,
  ProductReview,
  GrandTotal,
  ErrorDialogue,
} from './component.imports';

const { arrayOf, object } = PropTypes;

class ExpressCheckout extends Component {
  static propTypes = {
    cart: arrayOf(object),
  }
  static defaultProps = {
    cart: [],
  }
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  render() {
    return (
      <div className="checkout__container">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Express Checkout"
        />
        <div className="checkout__title">
          <h1>Express Checkout</h1>
        </div>
        <div className="checkout__body grid" data-masonry='{ "itemSelector": ".checkout__grid", "columnWidth": 340, "gutter": 22 }'>
          <div className="checkout__grid">
            <ProductReview />
            <ShippingMethod />
          </div>
          <div className="checkout__grid">
            <BillingAddress />
            <ShippingAddress />
          </div>
          <div className="checkout__grid">
            <CreditCardInfo />
            <GrandTotal />
            <ErrorDialogue />
          </div>
        </div>
      </div>
    );
  }
}
export default ExpressCheckout;
