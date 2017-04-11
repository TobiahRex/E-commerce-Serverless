import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="language-main-button-us-parent">
    <div className="language-main-button-us">
      <img src="../Images/english-flag.png" alt="US Flag" className="language-main-button-us-flag" />
    </div>
    <div className="language-main-button-us-title">
      <span>ENGLISH</span>
    </div>
    <div className="language-main-button-us-chevron">
      <FontAwesome
        name="angle-down" className="language-main-button-us-chevron-icon"
      />
    </div>
  </span>
);
