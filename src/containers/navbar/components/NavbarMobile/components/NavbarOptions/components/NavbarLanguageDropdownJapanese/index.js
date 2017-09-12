import React from 'react';
import PropTypes from 'prop-types';

const NavbarLanguageDropdownJapanese = ({ onLanguageChange }) => {
  function preventDefault(e) {
    e.preventDefault();
    onLanguageChange('nihongo');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="mobile-language-dropdown-content-japanese"
    >
      <div className="mobile-language-dropdown-content-japanese-image" />
      <div className="mobile-language-dropdown-content-japanese-nihongo">
        <span>日本語</span>
      </div>
    </a>
  );
};
NavbarLanguageDropdownJapanese.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};
export default NavbarLanguageDropdownJapanese;
