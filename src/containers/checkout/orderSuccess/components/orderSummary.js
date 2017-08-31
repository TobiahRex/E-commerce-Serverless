import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import {
  nicotineStrengthConverter as NicotineStrengthConverter,
} from '../../utilities.imports';

function OrderSummary({
  shippingStatus,
  trackingLink,
  trackingNumber,
  orderProducts,
  grandTotal,
  subTotal,
  taxes,
  discount: {
    qtyAmount,
    registerAmount,
  },
  jpyFxRate,
}) {
  return (
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
                <p>{shippingStatus} {'\u2013'} Tracking #:
                  <Link
                    className="tracking-id"
                    to={trackingLink}
                  >{'\u00A0'}{trackingNumber}</Link>
                </p>
              </td>
            </tr>
            {
              orderProducts.map(({
                _id,
                qty,
                product: {
                  sku,
                  price,
                  title,
                  nicotineStrength,
                },
              }) => (
                <tr className="body--product-row" key={_id}>
                  <td colSpan="1">
                    <p>{qty}</p>
                  </td>
                  <td colSpan="3">
                    <ul className="product-row__list">
                      <li className="list--title">
                        <p>{title}</p>
                      </li>
                      <li className="list--nic-strength">
                        <p>{NicotineStrengthConverter(nicotineStrength)}</p>
                      </li>
                      <li className="list--sku">
                        <p>SKU: {sku}</p>
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}
                      {price}.00
                    </p>
                  </td>
                </tr>
              ))
            }
            <tr className="body--total-analysis">
              <td colSpan="4">
                <ul className="total-analysis--list-title">
                  <li className="list-title--subtotal">
                    <p>USD / JPY Rate</p>
                  </li>
                  <li className="list-title--subtotal">
                    <p>Subtotal</p>
                  </li>
                  <li className="list-title--tax">
                    <p>Tax</p>
                  </li>
                  <li className="list-title--shipping">
                    <p>Free International Shipping</p>
                  </li>
                  <li className="list-title--shipping">
                    <p>Discount</p>
                  </li>
                  <li className="list-title--order-total">
                    <p>Grand Total</p>
                  </li>
                </ul>
              </td>
              <td colSpan="2">
                <ul className="total-analysis--list-value">
                  <li className="list-value--subtotal">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}{(jpyFxRate / 100).toFixed(3)}
                    </p>
                  </li>
                  <li className="list-value--subtotal">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}{subTotal}.00
                    </p>
                  </li>
                  <li className="list-value--tax">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}{taxes}
                    </p>
                  </li>
                  <li className="list-value--shipping">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}0.00
                    </p>
                  </li>
                  <li className="list-value--shipping">
                    <p className="required">
                      -{'\u00A0'}<FontAwesome name="usd" />{'\u00A0'}
                      {(Number(qtyAmount) + Number(registerAmount)).toFixed(2)}
                    </p>
                  </li>
                  <li className="list-value--order-total">
                    <p>
                      <FontAwesome name="usd" />{'\u00A0'}{grandTotal}
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  );
}

const { string, arrayOf, object, objectOf, any } = PropTypes;
OrderSummary.propTypes = {
  shippingStatus: string.isRequired,
  trackingLink: string.isRequired,
  trackingNumber: string.isRequired,
  orderProducts: arrayOf(object).isRequired,
  subTotal: string.isRequired,
  taxes: string.isRequired,
  grandTotal: string.isRequired,
  discount: objectOf(any).isRequired,
  jpyFxRate: string.isRequired,
};

export default OrderSummary;
