import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

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
  currency,
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
          <p>
            <IntlMsg id="checkout.success.summary.title" />
          </p>
        </legend>
        <table className="order-summary__table" cellPadding="0" cellSpacing="0">
          <thead className="table--thead">
            <tr>
              <th colSpan="1">
                <p>
                  <IntlMsg id="checkout.success.summary.header.qty" />
                </p>
              </th>
              <th colSpan="3">
                <p>
                  <IntlMsg id="checkout.success.summary.header.description" />
                </p>
              </th>
              <th colSpan="2">
                <p>
                  <IntlMsg id="checkout.success.summary.header.price" />
                </p>
              </th>
            </tr>
          </thead>
          <tbody className="table--body">
            <tr className="body--shipping-status-row">
              <td colSpan="5">
                <p>
                  {shippingStatus[IntlLocale]} &nbsp;
                  <IntlMsg id="checkout.success.summary.row.tracking" />
                  <Link
                    className="tracking-id"
                    to={trackingLink}
                  >&nbsp;
                    {trackingNumber}
                  </Link>
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
                        <p>{title[IntlLocale]}</p>
                      </li>
                      <li className="list--nic-strength">
                        <p>{NicotineStrengthConverter(nicotineStrength)}</p>
                      </li>
                      <li className="list--sku">
                        <p>SKU:&nbsp;
                          {sku}
                        </p>
                      </li>
                    </ul>
                  </td>
                  <td colSpan="2">
                    <p>
                      <FontAwesome name="usd" />&nbsp;
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
                    <p>
                      <IntlMsg id="checkout.success.summary.total.rate" />
                    </p>
                  </li>
                  <li className="list-title--subtotal">
                    <p>
                      <IntlMsg id="checkout.success.summary.total.subtotal" />
                    </p>
                  </li>
                  <li className="list-title--tax">
                    <p>
                      <IntlMsg id="checkout.success.summary.total.tax" />
                    </p>
                  </li>
                  <li className="list-title--shipping">
                    <p>
                      <IntlMsg id="checkout.success.summary.total.shipping" />
                    </p>
                  </li>
                  <li className="list-title--shipping">
                    <p>
                      <IntlMsg id="checkout.success.summary.total.discount" />
                    </p>
                  </li>
                  <li className="list-title--order-total">
                    <p>
                      <IntlMsg id="checkout.success.summary.total.grand-total" />
                    </p>
                  </li>
                </ul>
              </td>
              <td colSpan="2">
                <ul className="total-analysis--list-value">
                  <li className="list-value--subtotal">
                    <p>
                      <FontAwesome name="usd" />&nbsp;
                      {(jpyFxRate / 100).toFixed(3)}
                    </p>
                  </li>
                  <li className="list-value--subtotal">
                    <p>
                      <FontAwesome name="usd" />&nbsp;
                      {subTotal}.00
                    </p>
                  </li>
                  <li className="list-value--tax">
                    <p>
                      <FontAwesome name="usd" />&nbsp;
                      {taxes}
                    </p>
                  </li>
                  <li className="list-value--shipping">
                    <p>
                      <FontAwesome name="usd" />&nbsp;
                      0.00
                    </p>
                  </li>
                  <li className="list-value--shipping">
                    <p className="required">
                      -&nbsp;
                      <FontAwesome name="usd" />&nbsp;
                      {(Number(qtyAmount) + Number(registerAmount)).toFixed(2)}
                    </p>
                  </li>
                  <li className="list-value--order-total">
                    <p>
                      <FontAwesome name={currency.toLowerCase()} />
                      &nbsp;
                      {`${String(grandTotal).slice(0, 2)}.${String(grandTotal).slice(2, 4)}`}
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

const { shape, string, arrayOf, object, objectOf, any, number } = PropTypes;
OrderSummary.propTypes = {
  shippingStatus: shape({
    en: string.isRequired,
    ja: string.isRequired,
  }).isRequired,
  trackingLink: string.isRequired,
  trackingNumber: string.isRequired,
  orderProducts: arrayOf(object).isRequired,
  subTotal: string.isRequired,
  currency: string.isRequired,
  taxes: string.isRequired,
  grandTotal: number.isRequired,
  discount: objectOf(any).isRequired,
  jpyFxRate: string.isRequired,
};

export default OrderSummary;
