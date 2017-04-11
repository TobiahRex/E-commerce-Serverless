import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
};

function NavbarMobileOptionsCurrencyDropdnYen({ onCurrencyChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onCurrencyChange('yen');
  }

  return (
    <a
      href=""
      onClick={preventDefault}
      className="mobile-currency-dropdown-content-yen"
    >
      <FontAwesome name="yen" className="mobile-currency-dropdown-content-yen-icon" />
      <div className="mobile-currency-dropdown-content-yen-title">
        <span>Japanese Yen</span>
      </div>
    </a>
  );
}

NavbarMobileOptionsCurrencyDropdnYen.propTypes = propTypes;
export default NavbarMobileOptionsCurrencyDropdnYen;
