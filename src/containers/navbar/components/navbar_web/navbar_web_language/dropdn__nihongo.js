import React from 'react';
import PropTypes from 'prop-types';

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
      <img src="/images/nihongo-flag-border.png" alt="Japanese Flag" className="language-dropdown-content-japanese-image" />
      <div className="language-dropdown-content-japanese-nihongo">
        <span>日本語</span>
      </div>
    </a>
  );
}
const { func } = PropTypes;
const propTypes = { onLanguageChange: func.isRequired };
NavbarOptionsLanguageDropdnNihongo.propTypes = propTypes;
export default NavbarOptionsLanguageDropdnNihongo;
