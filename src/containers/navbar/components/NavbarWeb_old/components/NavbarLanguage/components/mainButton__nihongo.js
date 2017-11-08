import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarLanguageMainButtonNihongo() {
  return (
    <span className="language-main-button-japanese-parent">
      <div className="language-main-button-japanese">
        <img src="/images/nihongo-flag-border.png" alt="Japanese Flag" className="language-main-button-japanese-flag" />
      </div>
      <div className="language-main-button-japanese-title">
        <span>日本語</span>
      </div>
      <div className="language-main-button-japanese-chevron">
        <FontAwesome
          name="angle-down" className="language-main-button-japanese-chevron-icon bob"
        />
      </div>
    </span>
  );
}
