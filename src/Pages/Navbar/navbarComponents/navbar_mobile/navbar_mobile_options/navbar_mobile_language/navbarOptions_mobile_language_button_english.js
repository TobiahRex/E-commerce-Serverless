import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="mobile-language-main-button-us-parent">
    <div className="mobile-language-main-button-us">
      <div className="mobile-language-main-button-us-flag" />
    </div>
    <div className="mobile-language-main-button-us-title">
      <span>ENGLISH</span>
    </div>
    <div className="mobile-language-main-button-us-chevron">
      <FontAwesome
        name="angle-down" className="mobile-language-main-button-us-chevron-icon"
      />
    </div>
  </span>
);
