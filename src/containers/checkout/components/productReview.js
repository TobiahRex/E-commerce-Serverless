import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function CreditCardInfo() {
  return (
    <div className="checkout__product-review">
      <div className="title">
        <h3>Product Review</h3>
      </div>

      <table className="table__container">
        <thead className="table__header">
          <tr className="header__row">
            <th className="header__row--product-name">Product Name</th>
            <th className="header__row--qty">Qty</th>
            <th className="header__row--subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr className="body__row">
            <td className="body__row--product-name">
              <div className="image__container">
                <img alt="Juice" className="image--source" />
              </div>
              <div className="description__container">
                <p>Fruity Bamm-Bamm</p>
                <p>Nicotine Strength: <i>6mg</i></p>
              </div>
            </td>
            <td className="body__row--product-qty">
              <div className="qty--container">
                <p>3</p>
              </div>
            </td>
            <td className="body__row--product-subtotal">
              <div className="product-subtotal-container">
                <p><FontAwesome name="usd" />{'\u00A0'}90.00</p>
              </div>
            </td>
          </tr>
          <tr className="body__row">
            <td className="body__row--product-name">
              <div className="image__container">
                <img alt="Juice" className="image--source" />
              </div>
              <div className="description__container">
                <p>French Vanilla Mocha</p>
                <p>Nicotine Strength: <i>8mg</i></p>
              </div>
            </td>
            <td className="body__row--product-qty">
              <div className="qty--container">
                <p>1</p>
              </div>
            </td>
            <td className="body__row--product-subtotal">
              <div className="product-subtotal-container">
                <p><FontAwesome name="usd" />{'\u00A0'}30.00</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="checkout__comments">
        <textarea cols="40" rows="5" value={'Comments'} />
      </div>

      <div className="input__row">
        <div className="input__row--newsletter">
          <input
            type="checkbox"
            onChange={e => console.log(e.target.value)}
          />
          <p>Sign Up for Newsletter</p>
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--guest-warning">
          <p><span className="warning-bold">Warning: </span>You are currently checking out as a “Guest”. If you would like to save your checkout info for future purchases, register now and we will save your information & you will receive 10% off your first order as a new member.</p>
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--guest-register">
          <button className="guest-register sweep-right" onClick={() => browserHistory.push('/register')}>
            Register & Save 10%
          </button>
        </div>
      </div>
    </div>
  );
}
