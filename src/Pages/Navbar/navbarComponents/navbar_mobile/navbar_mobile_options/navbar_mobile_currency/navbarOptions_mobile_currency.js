import React, { PropTypes, PureComponent } from 'react';

import NavbarMobileOptionsCurrencyButton from './navbarOptions_mobile_currency_mainButton';
import NavbarMobileOptionsCurrencyDropdnContent from './navbarOptions_mobile_currency_dropdnContent';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Currency change: Will set a flag in state that all SMART components will be receiving to determine how to render the currency info.
*/

class NavbarMobileOptionsCurrency extends PureComponent {
  static propTypes = {
    onCurrencyChange: PropTypes.func,
  }

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar-mobile-options-currency">
        <NavbarMobileOptionsCurrencyButton />
        <NavbarMobileOptionsCurrencyDropdnContent />
      </div>
    );
  }
}
export default NavbarMobileOptionsCurrency;
