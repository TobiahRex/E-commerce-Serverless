import React from 'react';

const propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

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

NavbarMobileOptionsLanguageDropdnEnglish.propTypes = propTypes;
export default NavbarMobileOptionsLanguageDropdnEnglish;
