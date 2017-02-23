import React, { PropTypes } from 'react';

const propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

function NavbarOptionsLanguageDropdnNihongo({ onLanguageChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onLanguageChange('nihongo');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="language-dropdown-content-japanese"
    >
      <div className="language-dropdown-content-japanese-image" />
      <div className="language-dropdown-content-japanese-nihongo">
        <span>日本語</span>
      </div>
    </a>
  );
}

NavbarOptionsLanguageDropdnNihongo.propTypes = propTypes;
export default NavbarOptionsLanguageDropdnNihongo;
