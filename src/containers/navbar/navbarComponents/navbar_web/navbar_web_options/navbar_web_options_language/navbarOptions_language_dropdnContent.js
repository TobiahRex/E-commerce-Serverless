import React from 'react';
import PropTypes from 'prop-types';
import NavbarOptionsLanguageDropdnEnglish from './navbarOptions_language_dropdn_english';
import NavbarOptionsLanguageDropdnNihongo from './navbarOptions_language_dropdn_nihongo';

function NavbarOptionsLanguageDropdnContent({ activeLanguage, onLanguageChange }) {
  return (
    <span className="language-dropdown-content">
      {
        activeLanguage === 'english' ? <NavbarOptionsLanguageDropdnNihongo onLanguageChange={onLanguageChange} /> : <NavbarOptionsLanguageDropdnEnglish onLanguageChange={onLanguageChange} />
      }
    </span>
  );
}
NavbarOptionsLanguageDropdnContent.propTypes = {
  activeLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
export default NavbarOptionsLanguageDropdnContent;
