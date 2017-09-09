import React from 'react';
import PropTypes from 'prop-types';

const { func } = PropTypes;
const propTypes = {
  onLanguageChange: func.isRequired,
};
function NavbarOptionsLanguageDropdnEnglish({ onLanguageChange }) {
  function handleChange(e) {
    e.preventDefault();
    onLanguageChange('en');
  }
  return (
    <a
      href=""
      onClick={handleChange}
      className="language-dropdown-content-us"
    >
      <img src="/images/english-flag.png" alt="US Flag" className="language-dropdown-content-us-image" />
      <div className="language-dropdown-content-us-english">
        <span>English</span>
      </div>
    </a>

  );
}

NavbarOptionsLanguageDropdnEnglish.propTypes = propTypes;
export default NavbarOptionsLanguageDropdnEnglish;
