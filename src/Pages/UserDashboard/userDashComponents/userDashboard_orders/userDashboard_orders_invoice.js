import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

export default function UserOrderTracking() {
  return (
    <div className="dashboard__order-invoice">
      <div className="dashboard__header-title">
        {/* NOTE: Invoice order number is to be dynamically set. */}
        <h2>Invoice #: 123123123</h2>
      </div>

      <div className="dashboard__header">
        <p>Date: {moment().format('LL')}</p>
        <p>Invoice #: {uuid()}</p>
      </div>

      <div className="dashboard__header--status">
        <h2>
          <i>Packaging</i>
        </h2>
      </div>

      <div className="dashboard__header--tracking">
        <div className="tracking__serials">
          <p>Tracking #: {uuid()}</p>
          <p>Order #: {uuid()}</p>
        </div>
        <div className="tracking__price">
          <p>
            <FontAwesome name="usd" />
          </p>
        </div>
      </div>



    </div>
  );
}
