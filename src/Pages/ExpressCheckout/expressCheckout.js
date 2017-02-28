import React from 'react';
import { Link, browserHistory } from 'react-router';
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
      <div className="checkout__body grid" data-masonry='{ "itemSelector": ".checkout__grid", "columnWidth": 340, "gutter": 22 }'>
        <div className="checkout__grid">
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
                <p>Email <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-1">
                <p>Address Line 1 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-2">
                <p>Address Line 2 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--country">
                <p>Country <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--prefecture">
                <p>Prefecture <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--postal-code">
                <p>Postal Code <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--city">
                <p>City <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--phone">
                <p>Phone / Cell <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--same-as-billing">
                <input
                  type="checkbox"
                  onChange={e => console.log(e.target.value)}
                />
                <p>Use same address for shipping.<span className="required">*</span></p>
              </div>
            </div>
          </div>
          <div className="checkout__shipping">
            <div className="title">
              <h3>Shipping Address</h3>
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
                <p>Email <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-1">
                <p>Address Line 1 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-2">
                <p>Address Line 2 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--country">
                <p>Country <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--prefecture">
                <p>Prefecture <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--postal-code">
                <p>Postal Code <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--city">
                <p>City <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--phone">
                <p>Phone / Cell <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
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
          <div className="checkout__credit-card">
            <div className="title">
              <h3>Credit Card Information</h3>
            </div>

            <div className="input__row">
              <div className="input__row--cc-type">
                <p>Accepted Credit Card Types</p>
                <div className="types">
                  <FontAwesome name="cc-visa" />
                  <FontAwesome name="cc-mastercard" />
                  <FontAwesome name="cc-discover" />
                  <FontAwesome name="cc-amex" />
                </div>
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--name-on-card">
                <p>Name on Card <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>


            <div className="input__row">
              <div className="input__row--cc-number">
                <p>Credit Card Number <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--exp-date">
                <div className="input__container--exp-month">
                  <p>Expiration Date <span className="required">*</span></p>
                  <select className="input--select">
                    <option value="Month" className="input--option">Month</option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="02 - February" className="input--option">
                      02 - February
                    </option>
                    <option value="03 - March" className="input--option">
                      03 - March
                    </option>
                    <option value="04 - April" className="input--option">
                      04 - April
                    </option>
                    <option value="05 - May" className="input--option">
                      05 - May
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                  </select>
                </div>
                <div className="input__container--exp-year">
                  <p>{'\u00A0'}</p>
                  <select className="input--select">
                    <option value="Month" className="input--option">Year</option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2018" className="input--option">
                      2017
                    </option>
                    <option value="2019" className="input--option">
                      2017
                    </option>
                    <option value="2020" className="input--option">
                      2017
                    </option>
                    <option value="2021" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input__row cvn">
              <div className="input__row--cvn-number">
                <p>Card Verification Number (CVN) <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
                <button
                  className="button--cvn-modal"
                  onClick={() => console.info('Show CVN modal')}
                >Whats this ?</button>
              </div>
            </div>

          </div>
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
                <button className="guest-register sweep-right">Register & Save 10%</button>
              </div>
            </div>

          </div>
        </div>
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
              <p>I have read & agree to all Terms & Conditions</p>
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
          <div className="checkout__error-dialogue" style={{ display: 'none' }}>
            <p>
              <FontAwesome className="error-icon" name="times-circle" />
              <span className="error-title">ERROR: </span>
              There was an error placing your order: Credit card information was invalid.
            </p>
          </div>
          <div className="checkout__loading-icon">
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
