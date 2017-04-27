import React from 'react';
import PropTypes from 'prop-types';
import NavbarOptionsLanguageButtonEnglish from './navbarOptions_language_button_english';
import NavbarOptionsLanguageButtonNihongo from './navbarOptions_language_button_nihongo';

/* TODO
1. This component receives a State property of the "active_language"  that will change display of the language button details.
*/

function NavbarOptionsLanguageButton({ activeLanguage }) {
  return (
    <span className="language-main-button">
      {
        activeLanguage === 'english' ? <NavbarOptionsLanguageButtonEnglish /> : <NavbarOptionsLanguageButtonNihongo />
      }
    </span>
  );
}
NavbarOptionsLanguageButton.propTypes = {
  activeLanguage: PropTypes.string.isRequired,
};
export default NavbarOptionsLanguageButton;
