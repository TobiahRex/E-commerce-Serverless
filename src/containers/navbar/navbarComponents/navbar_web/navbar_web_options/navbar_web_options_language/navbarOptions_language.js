import React from 'react';
import PropTypes from 'prop-types';

import NavbarOptionsLanguageButton from './navbarOptions_language_mainButton';
import NavbarOptionsLanguageButtonEnglish from './navbarOptions_language_button_english';
import NavbarOptionsLanguageButtonNihongo from './navbarOptions_language_button_nihongo';

import NavbarOptionsLanguageDropdnContent from './navbarOptions_language_dropdnContent';
import NavbarOptionsLanguageDropdnEnglish from './navbarOptions_language_dropdn_english';
import NavbarOptionsLanguageDropdnNihongo from './navbarOptions_language_dropdn_nihongo';

const { string, func } = PropTypes;

class NavbarOptionsLanguage extends React.PureComponent {
  static propTypes = {
    activeLanguage: string.isRequired,
    onLanguageChange: func.isRequired,
  }
  render() {
    const { activeLanguage: language, onLanguageChange } = this.props;
    return (
      <div className="navbar-options-language">
        <NavbarOptionsLanguageButton activeLanguage={language}>
          {
            language === 'english' ?
              <NavbarOptionsLanguageButtonEnglish />
              :
              <NavbarOptionsLanguageButtonNihongo />
          }
        </NavbarOptionsLanguageButton>

        <NavbarOptionsLanguageDropdnContent>
          {
            language === 'english' ?
              <NavbarOptionsLanguageDropdnNihongo onLanguageChange={onLanguageChange} />
              :
              <NavbarOptionsLanguageDropdnEnglish onLanguageChange={onLanguageChange} />
          }
        </NavbarOptionsLanguageDropdnContent>
      </div>
    );
  }
}
export default NavbarOptionsLanguage;
/*
1. NavbarOptionsLanguageButton = func
2. NavbarOptionsLanguageDropdnContent = func
*/
