import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileOptionsCurrencyDropdnDollar() {
  return (
    <a
      href=""
      onClick={e => e.preventDefault()}
      className="mobile-currency-dropdown-content-dollars"
    >
      <FontAwesome name="usd" className="mobile-currency-dropdown-content-dollars-icon" />
      <div className="mobile-currency-dropdown-content-dollars-title">
        <span>U.S. Dollars</span>
      </div>
    </a>
  );
}
