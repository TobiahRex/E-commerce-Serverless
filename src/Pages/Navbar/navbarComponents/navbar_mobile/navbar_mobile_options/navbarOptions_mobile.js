import React, { PropTypes, PureComponent } from 'react';

import NavbarMobileOptionsLanguage from './navbar_mobile_language/navbarOptions_mobile_language';

class NavbarMobileOptions extends PureComponent {
  // static propTypes = {
  //   changeLanguage: PropTypes.func,
  //   changeCurrency: PropTypes.func,
  // }

  onLanguageChange = () => console.info('changed language');

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar-mobile-options">
        <NavbarMobileOptionsLanguage />
      </div>
    );
  }
}

export default NavbarMobileOptions;
