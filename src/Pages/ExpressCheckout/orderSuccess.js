import React from 'react';
import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import uuid from 'uuid';


export default function OrderSuccess() {
  return (
    <div className="ordered--main">
      <div className="ordered--container">
        <div className="ordered__title">
          <div className="title--icon">
            <FontAwesome name="check-circle" />
          </div>
          <div className="title--msg">
            <h1>Your order has been successfully placed!</h1>
            <h4>The invoice shown below has been sent to your email.</h4>
          </div>
        </div>
        <div className="ordered__header">
          <div className="header--date">
            <p>Date: {moment().format('LLLL')}</p>
            <p>Invoice #: {uuid()}</p>
          </div>
          <div className="header--status">
            <h3>{'<Shipping Status>'}</h3>
          </div>
          <div className="header--info">
            <div className="header__tracking">
              <p>Tracking #: {uuid()}</p>
              <p>Order #: {uuid()}</p>
            </div>
            <div className="header__price">
              <p>
                Price: <FontAwesome name="usd" />{'\u00A0'}32.14
              </p>
            </div>
          </div>
        </div>
        <div className="ordered__addresses">
          <div className="addresses--shipto">
            <fieldset className="shipto--fieldset">
              <legend className="shipto__legend">
                <p>Ship To</p>
              </legend>
              <div className="shipto__name">
                <p className="name--firstName">Bruce</p>
                <p className="name--lastName">{'\u00A0'}Wayne</p>
              </div>
              <div className="shipto__address">
                <p>{'<Address>'}</p>
              </div>
              <div className="shipto__city-prefecture">
                <p className="city-prefecture--city">{'<City>'}</p>
                <p className="city-prefecture--prefecture">{'<Prefecture>'}</p>
              </div>
              <div className="shipto__postal-code">
                <p>{'<Postal Code>'}</p>
              </div>
              <div className="shipto__country">
                <p>Japan</p>
              </div>
              <div className="shipto__telephone">
                <p className="telephone--area-code">(080){'\u2013'}</p>
                <p className="telephone--first-half">
                  {'\u00A0'}3918{'\u2013'}
                </p>
                <p className="telephone--second-half">
                  {'\u00A0'}8013
                </p>
              </div>
            </fieldset>
          </div>
          <div className="addresses--billto">
            <fieldset className="billto--fieldset">
              <legend className="billto__legend">
                <p>Bill To</p>
              </legend>
              <div className="billto__name">
                <p className="name--firstName">Bruce</p>
                <p className="name--lastName">{'\u00A0'}Wayne</p>
              </div>
              <div className="billto__address">
                <p>{'<Address>'}</p>
              </div>
              <div className="billto__city-prefecture">
                <p className="city-prefecture--city">{'<City>'}</p>
                <p className="city-prefecture--prefecture">{'<Prefecture>'}</p>
              </div>
              <div className="billto__postal-code">
                <p>{'<Postal Code>'}</p>
              </div>
              <div className="billto__country">
                <p>Japan</p>
              </div>
              <div className="billto__telephone">
                <p className="telephone--area-code">({'<area code>'}){'\u2013'}</p>
                <p className="telephone--first-half">
                  {'<first half>'}{'\u2013'}
                </p>
                <p className="telephone--second-half">
                  {'<second half>'}
                </p>
              </div>
              <div className="billto__card-info">
                <p>Credit Card #: ************{'<last-four>'}</p>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="ordered__order-summary">
          <fieldset className="order-summary--fieldset">
            <legend className="order-summary--legend">
              <p>Order Summary</p>
            </legend>
            <table className="order-summary__table" cellPadding="0" cellSpacing="0">
              <thead className="table--thead">
                <tr>
                  <th colSpan="1">
                    <p>Qty</p>
                  </th>
                  <th colSpan="3">
                    <p>Juice Description</p>
                  </th>
                  <th colSpan="2">
                    <p>Price</p>
                  </th>
                </tr>
              </thead>
              <tbody className="table--body">
                <tr className="body--shipping-status-row">
                  <td colSpan="5">
                    <p>{'<Shipping Status>'} {'\u2013'} Tracking #:
                      {/* TODO: These query params need to be dynamically assigned. */}
                      <Link
                        className="tracking-id"
                        to="/user:123123123/orders:123123/tracking:123123123"
                      >{'\u00A0'}{uuid()}</Link>
                    </p>
                  </td>
                </tr>
                <tr className="body--product-row">
                  <td colSpan="1">
                    <p>{'<Qty>'}</p>
                  </td>
                  <td colSpan="3">
                    <ul className="product-row__list">
                      <li className="list--title">
                        <p>{'<Product Description>'}</p>
                      </li>
                      <li className="list--nic-strength">
                        <p>{'<Nic Strength>'}{'\u00A0'}mg</p>
                      </li>
                      <li className="list--sku">
                        <p>SKU: {uuid()}</p>
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}
                      {'<Price>'}.00
                    </p>
                  </td>
                </tr>
                <tr className="body--total-analysis">
                  <td colSpan="4">
                    <ul className="total-analysis--list-title">
                      <li className="list-title--subtotal">
                        <p>Subtotal</p>
                      </li>
                      <li className="list-title--tax">
                        <p>Tax</p>
                      </li>
                      <li className="list-title--shipping">
                        <p>Free International Shipping</p>
                      </li>
                      <li className="list-title--order-total">
                        <p>Order Title</p>
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <ul className="total-analysis--list-value">
                      <li className="list-value--subtotal">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}{'<SubTotal>'}.00
                        </p>
                      </li>
                      <li className="list-value--tax">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}{'<Tax>.<tax>'}
                        </p>
                      </li>
                      <li className="list-value--shipping">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}0.00
                        </p>
                      </li>
                      <li className="list-value--order-total">
                        <p>
                          <FontAwesome name="usd" />{'\u00A0'}{'<Final Total>'}
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>
        <div className="ordered__action-btns">
          <button
            className="back-to-home sweep-right primary-flex-button"
            onClick={() => browserHistory.push('/')}
          >
            <span className="flex-btn-parent">
              <FontAwesome name="angle-double-left" />
              {'\u00A0'}Back To Homepage
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
