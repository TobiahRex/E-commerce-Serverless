import React from 'react';
import PropTypes from 'prop-types';

const { func } = PropTypes;
const propTypes = {
  onLanguageChange: func.isRequired,
};
function NavbarOptionsLanguageDropdnEnglish({ onLanguageChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onLanguageChange('english');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="language-dropdown-content-us"
    >
      <img src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/english-flag.png" alt="US Flag" className="language-dropdown-content-us-image" />
      <div className="language-dropdown-content-us-english">
        <span>English</span>
      </div>
    </a>

  );
}

NavbarOptionsLanguageDropdnEnglish.propTypes = propTypes;
export default NavbarOptionsLanguageDropdnEnglish;
