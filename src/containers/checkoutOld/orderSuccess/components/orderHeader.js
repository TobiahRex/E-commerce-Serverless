import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function OrderHeader({
  date,
  invoiceId,
  trackingId,
  orderId,
  paidTotal,
  deliveryDate,
}) {
  let amount;
  if (paidTotal.currency === 'JPY') {
    amount = paidTotal.amount;
  }
  if (paidTotal.currency === 'USD') {
    amount = `${String(paidTotal.amount).slice(0, 2)}.${String(paidTotal.amount).slice(2, 4)}`;
  }
  // TODO: Add en & ja variations to all dynamic text fields on Transation & Sagawa documents
  return (
    <div className="ordered__header">
      <div className="header--date">
        <p><IntlMsg id="checkout.success.header.date" />{date}</p>
        <p><IntlMsg id="checkout.success.header.invoice" />{invoiceId}</p>
      </div>
      <div className="header--status">
        <h3>{status}</h3>
      </div>
      <div className="header--info">
        <div className="header__price">
          <p>
            <IntlMsg id="checkout.success.header.total-paid" />
            <FontAwesome name={paidTotal.currency.toLowerCase()} />&nbsp;
            {amount}
          </p>
        </div>
        <div className="header__tracking">
          <p>
            <IntlMsg id="checkout.success.header.tracking" />
            {
              trackingId ?
                `${trackingId}` : <IntlMsg id="checkout.success.header.tracking.delay" />
            }
          </p>
          <p>
            <IntlMsg id="checkout.success.header.order" />{orderId}
          </p>
          <p>
            <IntlMsg id="checkout.success.header.delivery" />{deliveryDate}
          </p>
        </div>
      </div>
    </div>
  );
}

const { string, shape, number } = PropTypes;
OrderHeader.propTypes = {
  date: string.isRequired,
  invoiceId: string.isRequired,
  trackingId: string.isRequired,
  orderId: string.isRequired,
  deliveryDate: string.isRequired,
  paidTotal: shape({
    amount: number,
    currency: string,
  }).isRequired,
};

export default OrderHeader;
