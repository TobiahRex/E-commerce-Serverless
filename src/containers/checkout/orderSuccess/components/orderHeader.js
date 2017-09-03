import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function OrderHeader({
  date,
  invoiceId,
  trackingId,
  orderId,
  paidTotal,
  deliveryDate,
}) {
  return (
    <div className="ordered__header">
      <div className="header--date">
        <p>Date: {date}</p>
        <p>Invoice #: {invoiceId}</p>
      </div>
      <div className="header--status">
        <h3>{status}</h3>
      </div>
      <div className="header--info">
        <div className="header__price">
          <p>
            Total Paid:
            <FontAwesome name={paidTotal.currency} />
            {'\u00A0'}
            {`${String(paidTotal.amount).splice(0, 2)}.${String(paidTotal.amount).splice(2, 4)}`}
          </p>
        </div>
        <div className="header__tracking">
          <p>Tracking #: {trackingId}</p>
          <p>Order #: {orderId}</p>
          <p>Estimated Delivery:{deliveryDate}</p>
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
