import React, { PropTypes, PureComponent } from 'react';

import NavbarMobileOptionsLanguageButton from './navbarOptions_mobile_language_mainButton';
import NavbarMobileOptionsLanguageDropdnContent from './navbarOptions_mobile_language_dropdnContent';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Lang change: Will set a flag in state that all SMART components will be receiving to determine how to render the language info.

- Currency Change: <Same as lang change.>

*/

class NavbarMobileOptionsLanguage extends PureComponent {
  onLanguageChange = () => console.info('changed language');

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar-mobile-options-language">
        <NavbarMobileOptionsLanguageButton />
        <NavbarMobileOptionsLanguageDropdnContent />
      </div>
    );
  }
}
export default NavbarMobileOptionsLanguage;
