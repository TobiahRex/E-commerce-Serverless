import React from 'react';
import uuid from 'uuid';

export default function UserOrderTracking() {
  return (
    <div>
      <h1>Track Your Order</h1>
      <p>Tracking #: {uuid()}</p>
    </div>
  );
}
