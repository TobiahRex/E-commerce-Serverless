import React from 'react';
import PropTypes from 'prop-types';

function NavbarMobileOptionsLanguageDropdnEnglish({ onLanguageChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onLanguageChange('english');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="mobile-language-dropdown-content-us"
    >
      <div className="mobile-language-dropdown-content-us-image" />
      <div className="mobile-language-dropdown-content-us-english">
        <span>English</span>
      </div>
    </a>

  );
}
const { func } = PropTypes;
const propTypes = { onLanguageChange: func.isRequired };
NavbarMobileOptionsLanguageDropdnEnglish.propTypes = propTypes;
export default NavbarMobileOptionsLanguageDropdnEnglish;
