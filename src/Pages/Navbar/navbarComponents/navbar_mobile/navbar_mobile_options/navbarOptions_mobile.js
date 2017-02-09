import React, { PropTypes, PureComponent } from 'react';

import NavbarOptionsLanguage from './navbar_mobile_language/navbarOptions_mobile_language';

class NavbarOptionsMobile extends PureComponent {
  static propTypes = {
    changeLanguage: Proptypes.func,
    changeCurrency: PropTypes.func,
  }

  onLanguageChange = () => console.info('changed language');

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar-mobile-options">
        <NavbarOptionsLanguage />
      </div>
    );
  }
}

export default NavbarOptionsMobile;
