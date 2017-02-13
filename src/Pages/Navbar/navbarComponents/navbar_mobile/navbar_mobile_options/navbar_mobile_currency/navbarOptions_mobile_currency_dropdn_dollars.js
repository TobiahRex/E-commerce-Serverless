import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileOptionsCurrencyDropdnDollar({ onCurrencyChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onCurrencyChange('dollars');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="mobile-currency-dropdown-content-dollars"
    >
      <FontAwesome name="usd" className="mobile-currency-dropdown-content-dollars-icon" />
      <div className="mobile-currency-dropdown-content-dollars-title">
        <span>U.S. Dollars</span>
      </div>
    </a>
  );
}
