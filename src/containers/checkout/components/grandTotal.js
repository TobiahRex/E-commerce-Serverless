import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function ShippingMethod() {
  return (
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
  );
}
