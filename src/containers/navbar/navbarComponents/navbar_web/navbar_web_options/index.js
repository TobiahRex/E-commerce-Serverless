import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  NavbarOptionsLanguageButton,
  NavbarOptionsLanguageButtonEnglish,
  NavbarOptionsLanguageButtonNihongo,
  NavbarOptionsLanguageDropdnContent,
  NavbarOptionsLanguageDropdnEnglish,
  NavbarOptionsLanguageDropdnNihongo,
} from './navbar_web_options_language/imports';

const { string, func } = PropTypes;

class NavbarOptionsLanguage extends PureComponent {
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
