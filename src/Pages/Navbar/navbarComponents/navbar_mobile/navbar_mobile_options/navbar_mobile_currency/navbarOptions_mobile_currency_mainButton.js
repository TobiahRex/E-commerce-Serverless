import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';


import NavbarMobileOptionsCurrencyButtonDollar from './navbarOptions_mobile_currency_button_dollars';
import NavbarMobileOptionsCurrencyButtonYen from './navbarOptions_mobile_currency_button_yen';

/* TODO
1. This component receives a State property of the "active_currency"  that will change display of the currency button details.

*/

class NavbarMobileOptionsCurrencyButton extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  static propTypes = {
    active_currency: PropTypes.string,
  }

  renderCurrency = (currency) => {
    if (currency === 'usd') return <NavbarMobileOptionsCurrencyButtonDollar />;
    if (currency === 'yen') return <NavbarMobileOptionsCurrencyButtonYen />;
    throw new Error('Cannot render the Active Currency - Check NavbarMobileOptionsCurrencyButton component.');
  }

  render() {
    return (
      <span className="mobile-currency-main-button">
        {/* {this.renderCurrency(this.props.active_currency)} */}
        DYNAMIC
      </span>
    );
  }
}

export default NavbarMobileOptionsCurrencyButton;
