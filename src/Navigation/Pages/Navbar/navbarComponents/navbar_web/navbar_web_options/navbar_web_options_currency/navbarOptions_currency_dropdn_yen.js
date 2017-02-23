import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
};

function NavbarOptionsCurrencyDropdnYen({ onCurrencyChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onCurrencyChange('yen');
  }

  return (
    <a
      href=""
      onClick={preventDefault}
      className="currency-dropdown-content-yen"
    >
      <FontAwesome name="yen" className="currency-dropdown-content-yen-icon" />
      <div className="currency-dropdown-content-yen-title">
        <span>Japanese Yen</span>
      </div>
    </a>
  );
}

NavbarOptionsCurrencyDropdnYen.propTypes = propTypes;
export default NavbarOptionsCurrencyDropdnYen;
