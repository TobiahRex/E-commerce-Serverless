import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function ShippingPolicy() {
  return (
    <div className="shipping-main">
      <div className="shipping-breadcrumb-container">
        <ul className="shipping-breadcrumb-list">
          <li className="shipping-breadcrumb-path">
            Home
            <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
          </li>
          <li className="shipping-breadcrumb-path">
            Shipping Policy
          </li>
        </ul>
      </div>
      <div className="shipping-main-title">
        <h1>Shipping Policy</h1>
      </div>
    </div>
  );
}

/* TODO make sure you add the success modal styles dynamically.
See the style sheet for detials.
*/
