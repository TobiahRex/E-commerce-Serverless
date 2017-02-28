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
      <div className="checkout__body">
        <div className="checkout__title">
          <h1>Express Checkout</h1>
        </div>
        <div className="checkout__billing">

        </div>
        <div className="checkout__shipping-Method">

        </div>
        <div className="checkout__grand-total">

        </div>
      </div>
    </div>
  );
}
