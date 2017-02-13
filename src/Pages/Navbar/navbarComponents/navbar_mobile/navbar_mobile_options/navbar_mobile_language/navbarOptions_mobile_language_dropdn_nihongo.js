import React from 'react';

export default function NavbarMobileOptionsLanguageDropdnNihongo() {
  return (
    <a
      href=""
      onClick={e => e.preventDefault()}
      className="mobile-language-dropdown-content-japanese"
    >
      <div className="mobile-language-dropdown-content-japanese-image" />
      <div className="mobile-language-dropdown-content-japanese-nihongo">
        <span>日本語</span>
      </div>
    </a>
  );
}
