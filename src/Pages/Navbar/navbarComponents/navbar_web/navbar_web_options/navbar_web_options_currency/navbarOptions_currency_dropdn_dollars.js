import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
};

function NavbarOptionsCurrencyDropdnDollar({ onCurrencyChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onCurrencyChange('usd');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="currency-dropdown-content-dollars"
    >
      <FontAwesome name="usd" className="currency-dropdown-content-dollars-icon" />
      <div className="currency-dropdown-content-dollars-title">
        <span>U.S. Dollars</span>
      </div>
    </a>
  );
}

NavbarOptionsCurrencyDropdnDollar.propTypes = propTypes;
export default NavbarOptionsCurrencyDropdnDollar;
