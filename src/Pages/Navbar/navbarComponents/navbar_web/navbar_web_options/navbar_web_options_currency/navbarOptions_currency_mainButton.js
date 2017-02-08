import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="currency-main-button">
    <div className="currency-main-button-dollar">
      <FontAwesome
        name="usd"
        className="currency-main-button-dollar-icon"
      />
    </div>
    <div className="navbar actionSection upper currency title">
      <span>USD</span>
    </div>
    <div className="navbar actionSection upper currency chevron">
      <FontAwesome
        name="angle-down"
        className="navbar actionSection upper currency chevron icon"
      />
    </div>
  </span>
);
