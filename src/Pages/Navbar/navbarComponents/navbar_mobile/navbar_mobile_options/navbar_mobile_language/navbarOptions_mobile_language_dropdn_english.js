import React from 'react';

export default function NavbarMobileOptionsLanguageDropdnEnglish() {
  return (
    <a
      href=""
      onClick={e => e.preventDefault()}
      className="mobile-language-dropdown-content-us"
    >
      <div className="mobile-language-dropdown-content-us-image" />
      <div className="mobile-language-dropdown-content-us-english">
        <span>English</span>
      </div>
    </a>

  );
}
