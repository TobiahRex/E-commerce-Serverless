import React, { PropTypes, PureComponent } from 'react';

import NavbarOptionsMobileLanguageButton from './navbarOptions_mobile_mainButton';
import NavbarOptionsMobileLanguageDropdnContent from './navbarOptions_mobile_dropdnContent';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Lang change: Will set a flag in state that all SMART components will be receiving to determine how to render the language info.

- Currency Change: <Same as lang change.>

*/

class NavbarOptions extends PureComponent {
  onLanguageChange = () => console.info('changed language');

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar-actionSection-upper-options">
        {/* <NavbarOptionsMobileLanguageButton />
        <NavbarOptionsMobileDropdnContent /> */}
      </div>
    );
  }
}
export default NavbarOptions;
