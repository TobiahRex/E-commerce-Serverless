import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="mobile-language-main-button-japanese-parent">
    <div className="mobile-language-main-button-japanese">
      <div className="mobile-language-main-button-japanese-flag" />
    </div>
    <div className="mobile-language-main-button-japanese-title">
      <span>日本語</span>
    </div>
    <div className="mobile-language-main-button-japanese-chevron">
      <FontAwesome
        name="angle-down" className="mobile-language-main-button-japanese-chevron-icon bob"
      />
    </div>
  </span>
);
