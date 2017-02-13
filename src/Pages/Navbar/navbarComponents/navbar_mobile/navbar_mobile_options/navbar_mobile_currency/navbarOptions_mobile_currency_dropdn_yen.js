import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileOptionsCurrencyDropdnYen() {
  return (
    <a
      href=""
      onClick={e => e.preventDefault()}
      className="mobile-currency-dropdown-content-yen"
    >
      <FontAwesome name="yen" className="mobile-currency-dropdown-content-yen-icon" />
      <div className="mobile-currency-dropdown-content-yen-title">
        <span>Japanese Yen</span>
      </div>
    </a>
  );
}
