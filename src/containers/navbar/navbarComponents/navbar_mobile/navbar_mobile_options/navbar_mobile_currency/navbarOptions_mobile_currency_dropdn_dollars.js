import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
};

function NavbarMobileOptionsCurrencyDropdnDollar({ onCurrencyChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onCurrencyChange('usd');
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

NavbarMobileOptionsCurrencyDropdnDollar.propTypes = propTypes;
export default NavbarMobileOptionsCurrencyDropdnDollar;
