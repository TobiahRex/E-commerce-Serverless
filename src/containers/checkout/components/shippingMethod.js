import React from 'react';

export default function ShippingMethod() {
  return (
    <div className="checkout__grid">
      <div className="checkout__shipping-method">
        <div className="title">
          <h3>Shipping Method</h3>
        </div>
        <div className="input__row">
          <div className="input__row--free-shipping">
            <input
              type="checkbox"
              checked
              onChange={e => console.log(e.target.value)}
            />
            <p>Free International Shipping.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
