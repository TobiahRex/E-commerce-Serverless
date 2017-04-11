import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="currency-main-button-yen-parent">
    <div className="currency-main-button-yen">
      <FontAwesome
        name="yen"
        className="currency-main-button-yen-icon"
      />
    </div>
    <div className="currency-main-button-yen-title">
      <span>YEN</span>
    </div>
    <div className="currency-main-button-yen-chevron">
      <FontAwesome
        name="angle-down"
        className="currency-main-button-yen-chevron-icon"
      />
    </div>
  </span>
);
