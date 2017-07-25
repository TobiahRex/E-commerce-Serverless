import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function ShippingMethod() {
  return (
    <div>
      <div className="checkout__error-dialogue">
        <p>
          <FontAwesome className="error-icon" name="times-circle" />
          <span className="error-title">ERROR: </span>
          There was an error placing your order: Credit card information was invalid.
        </p>
      </div>
      <div className="checkout__loading-icon" style={{ display: 'none' }}>
        <FontAwesome className="spinner-icon" name="spinner" spin />
        <p>One moment please</p>
        <p>while we process your order...</p>
      </div>
      <div className="checkout__back-home-btn ">
        <button className="sweep-right" onClick={() => browserHistory.push('/')}>Back To Homepage</button>
      </div>
    </div>
  );
}
