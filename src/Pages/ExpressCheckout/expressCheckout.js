import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';


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
      <div className="checkout__body grid" data-masonry='{ "itemSelector": ".checkout--grid", "columnWidth": 340, "gutter": 22 }'>
        <div className="checkout--grid">
          <div className="checkout__billing">
            <div className="title">
              <h3>Billing Address</h3>
            </div>
            <div className="input__row">
              <div className="input__row--first-name">
                <p>First Name</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
              <div className="input__row--last-name">
                <p>Last Name</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>
            <div className="input__row">
              <div className="input__row--email">
                <p>Email</p>{'\u00A0'}<p className="required">*</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="checkout__shipping">
            <h3>Shipping Address</h3>
          </div>
        </div>
        <div className="checkout--grid">
          <div className="checkout__shipping-method">
            <h3>Shipping Method</h3>
          </div>
          <div className="checkout__credit-card">
            <h3>Credit Card Information</h3>
          </div>
          <div className="checkout__order-review">
            <h3>Order Review</h3>
          </div>
        </div>
        <div className="checkout--grid">
          <div className="checkout__grand-total ">
            <h3>Grand Total</h3>
          </div>
          <div className="checkout__error-dialogue ">
            <h3>Error</h3>
          </div>
          <div className="checkout__back-home-btn ">
            <button>Back To Homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
}
