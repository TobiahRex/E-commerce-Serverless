import React from 'react';
import PropTypes from 'prop-types';

function NavbarLanguageDropdownEnglish({ onLanguageChange }) {
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
NavbarLanguageDropdownEnglish.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};
export default NavbarLanguageDropdownEnglish;
