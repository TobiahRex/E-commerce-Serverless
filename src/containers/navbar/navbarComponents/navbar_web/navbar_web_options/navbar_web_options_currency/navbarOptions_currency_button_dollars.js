import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="currency-main-button-dollar-parent">
    <div className="currency-main-button-dollar">
      <FontAwesome
        name="usd"
        className="currency-main-button-dollar-icon"
      />
    </div>
    <div className="currency-main-button-dollar-title">
      <span>USD</span>
    </div>
    <div className="currency-main-button-dollar-chevron">
      <FontAwesome
        name="angle-down"
        className="currency-main-button-dollar-chevron-icon"
      />
    </div>
  </span>
);
