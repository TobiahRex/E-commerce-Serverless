import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  NavbarLanguageButton,
  NavbarLanguageButtonEnglish,
  NavbarLanguageButtonNihongo,
  NavbarLanguageDropdnContent,
  NavbarLanguageDropdnEnglish,
  NavbarLanguageDropdnNihongo,
} from './imports';

const { string, func } = PropTypes;

class NavbarLanguage extends PureComponent {
  static propTypes = {
    activeLanguage: string.isRequired,
    onLanguageChange: func.isRequired,
  }
  render() {
    const { activeLanguage: language, onLanguageChange } = this.props;
    return (
      <div className="navbar-options-language">
        <NavbarLanguageButton activeLanguage={language}>
          {
            language === 'english' ?
              <NavbarLanguageButtonEnglish />
            : <NavbarLanguageButtonNihongo />
          }
        </NavbarLanguageButton>

        <NavbarLanguageDropdnContent>
          {
            language === 'english' ?
              <NavbarLanguageDropdnNihongo onLanguageChange={onLanguageChange} />
            : <NavbarLanguageDropdnEnglish onLanguageChange={onLanguageChange} />
          }
        </NavbarLanguageDropdnContent>
      </div>
    );
  }
}
export default NavbarLanguage;
/*
1. NavbarLanguageButton = func
2. NavbarLanguageDropdnContent = func
*/
