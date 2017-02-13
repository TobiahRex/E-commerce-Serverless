import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="mobile-currency-main-button-yen-parent">
    <div className="mobile-currency-main-button-yen">
      <FontAwesome
        name="yen"
        className="mobile-currency-main-button-yen-icon"
      />
    </div>
    <div className="mobile-currency-main-button-yen-title">
      <span>YEN</span>
    </div>
    <div className="mobile-currency-main-button-yen-chevron">
      <FontAwesome
        name="angle-down"
        className="mobile-currency-main-button-yen-chevron-icon"
      />
    </div>
  </span>
);
