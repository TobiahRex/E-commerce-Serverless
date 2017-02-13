import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="mobile-currency-main-button-dollar-parent">
    <div className="mobile-currency-main-button-dollar">
      <FontAwesome
        name="usd"
        className="mobile-currency-main-button-dollar-icon"
      />
    </div>
    <div className="mobile-currency-main-button-dollar-title">
      <span>USD</span>
    </div>
    <div className="mobile-currency-main-button-dollar-chevron">
      <FontAwesome
        name="angle-down"
        className="mobile-currency-main-button-dollar-chevron-icon"
      />
    </div>
  </span>
);
