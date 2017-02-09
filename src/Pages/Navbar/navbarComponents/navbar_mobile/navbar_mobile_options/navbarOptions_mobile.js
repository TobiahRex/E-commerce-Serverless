import React, { PropTypes, PureComponent } from 'react';

import NavbarMobileOptionsLanguage from './navbar_mobile_language/navbarOptions_mobile_language';
import NavbarMobileOptionsCurrency from './navbar_mobile_currency/navbarOptions_mobile_currency';

class NavbarMobileOptions extends PureComponent {
  static propTypes = {
    changeLanguage: PropTypes.func,
    changeCurrency: PropTypes.func,
  }

  onLanguageChange = () => console.info('changed language');

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar-mobile-options">
        <NavbarMobileOptionsLanguage />
        <NavbarMobileOptionsCurrency />
      </div>
    );
  }
}

export default NavbarMobileOptions;
