import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="language-main-button-japanese-parent">
    <div className="language-main-button-japanese">
      <img src="../Images/nihongo-flag-border.png" alt="Japanese Flag" className="language-main-button-japanese-flag" />
    </div>
    <div className="language-main-button-japanese-title">
      <span>日本語</span>
    </div>
    <div className="language-main-button-japanese-chevron">
      <FontAwesome
        name="angle-down" className="language-main-button-japanese-chevron-icon"
      />
    </div>
  </span>
);
