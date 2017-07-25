import React from 'react';
import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

import {
  BillingAddress,
  ShippingAddress,
} from './component.imports';


export default function ExpressCheckout() {
  return (
    <div className="checkout__container">
      <div className="checkout__breadcrumb--container">
        <ul className="list">
          <li className="path">
            <Link className="path__link" to="/">Home</Link>
            <FontAwesome
              className="path__link--right-chevron"
              name="angle-right"
            />
          </li>
          <li className="path">
            Express Checkout
          </li>
        </ul>
      </div>
      <div className="checkout__title">
        <h1>Express Checkout</h1>
      </div>
      <div className="checkout__body grid" data-masonry='{ "itemSelector": ".checkout__grid", "columnWidth": 340, "gutter": 22 }'>
        <BillingAddress />
        <ShippingAddress />
        <div className="checkout__grid">
          <div className="checkout__grand-total">
            <div className="title">
              <h3>Total</h3>
            </div>

            <div className="analysis-container">
              <div className="analysis-container--subtotal">
                <p>Subtotal</p>
                <p><FontAwesome name="usd" />{'\u00A0'}90.00</p>
              </div>
              <div className="analysis-container--shipping">
                <p>Shipping & Handling</p>
                <p><i>Free</i></p>
              </div>
              <div className="analysis-container--discount">
                <p>New Member Discount</p>
                <p><FontAwesome name="usd" />{'\u00A0'}-9.00</p>
              </div>
              <div className="analysis-container--taxes">
                <p>Taxes</p>
                <p><FontAwesome name="usd" />{'\u00A0'}8.10</p>
              </div>
              <div className="analysis-container--grand-total">
                <h3>Grand Total</h3>
                <h3><FontAwesome name="usd" />{'\u00A0'}8.10</h3>
              </div>
            </div>
            <div className="terms-agreement">
              <input type="checkbox" className="checkbox" value={'\f067'} />
              <p>I have read & agree to all <Link to="/terms_and_conditions">
                Terms & Conditions
              </Link></p>
            </div>
            <div className="purchase-btn">
              <button
                onClick={() => console.info('PLACE ORDER')}
              >
                <span className="btn-flex-parent">
                  <FontAwesome name="barcode" />
                  {'\u00A0'}
                  <p>Place Order Now</p>
                </span>
              </button>
            </div>
          </div>
          <div className="checkout__error-dialogue">
            <p>
              <FontAwesome className="error-icon" name="times-circle" />
              <span className="error-title">ERROR: </span>
              There was an error placing your order: Credit card information was invalid.
            </p>
          </div>
          <div className="checkout__loading-icon"  style={{ display: 'none' }}>
            <FontAwesome className="spinner-icon" name="spinner" spin />
            <p>One moment please</p>
            <p>while we process your order...</p>
          </div>
          <div className="checkout__back-home-btn ">
            <button className="sweep-right" onClick={() => browserHistory.push('/')}>Back To Homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
}
