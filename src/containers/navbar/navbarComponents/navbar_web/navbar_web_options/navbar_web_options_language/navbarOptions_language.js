import React from 'react';
import PropTypes from 'prop-types';
import NavbarOptionsLanguageButton from './navbarOptions_language_mainButton';
import NavbarOptionsLanguageDropdnContent from './navbarOptions_language_dropdnContent';
import NavbarOptionsLanguageDropdnEnglish from './navbarOptions_language_dropdn_english';
import NavbarOptionsLanguageDropdnNihongo from './navbarOptions_language_dropdn_nihongo';

function NavbarOptionsLanguage({ activeLanguage, onLanguageChange }) {
  return (
    <div className="navbar-options-language">
      <NavbarOptionsLanguageButton activeLanguage={activeLanguage} />
      <NavbarOptionsLanguageDropdnContent>
        {
          activeLanguage === 'english' ? <NavbarOptionsLanguageDropdnNihongo onLanguageChange={onLanguageChange} /> : <NavbarOptionsLanguageDropdnEnglish onLanguageChange={onLanguageChange} />
        }
      </NavbarOptionsLanguageDropdnContent>
    </div>
  );
}
NavbarOptionsLanguage.propTypes = {
  activeLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
export default NavbarOptionsLanguage;
/*
1. NavbarOptionsLanguageButton = func
2. NavbarOptionsLanguageDropdnContent = func
*/
