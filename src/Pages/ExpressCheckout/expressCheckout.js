import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';


export default function ExpressCheckout() {
  return (
    <div className="checkout__main">
      <div className="checkout__breadcrumb--container">
        <ul className="list">
          <li className="path">
            <Link className="path__link" to="/">Home</Link>
            <FontAwesome
              className="path__link--rightChevron"
              name="angle-right"
            />
          </li>
          <li className="path">
            Shopping Cart
          </li>
        </ul>
      </div>
      <div className="checkout__title">
        <h1>Shopping Cart</h1>
      </div>
    </div>
  );
}
