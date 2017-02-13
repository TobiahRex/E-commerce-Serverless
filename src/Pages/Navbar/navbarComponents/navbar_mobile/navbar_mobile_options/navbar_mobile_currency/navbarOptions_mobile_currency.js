import React, { PropTypes, Component } from 'react';

import NavbarMobileOptionsCurrencyButton from './navbarOptions_mobile_currency_mainButton';
import NavbarMobileOptionsCurrencyDropdnContent from './navbarOptions_mobile_currency_dropdnContent';

import NavbarMobileOptionsCurrencyButtonDollar from './navbarOptions_mobile_currency_button_dollars';
import NavbarMobileOptionsCurrencyButtonYen from './navbarOptions_mobile_currency_button_yen';

import NavbarMobileOptionsCurrencyDropdnDollar from './navbarOptions_mobile_currency_dropdn_dollars';
import NavbarMobileOptionsCurrencyDropdnYen from './navbarOptions_mobile_currency_dropdn_yen';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Currency change: Will set a flag in state that all SMART components will be receiving to determine how to render the currency info.

2. Finish mapping Redux action to this comp's props for Currency Change.
*/

class NavbarMobileOptionsCurrency extends Component {
  static propTypes = {
    activeCurrency: PropTypes.string,
    onCurrencyChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      // activeCurrency: this.props.activeCurrency || 'usd', <-- this is REAL
      activeCurrency: 'usd', // <---- this is FAKE
    };
  }

  componentWillReceiveProps({ activeCurrency }) {
    if (this.props.activeCurrency !== activeCurrency) return this.setState({ activeCurrency });
    return 1;
  }

  shouldComponentUpdate(nextProps, { activeCurrency }) {
    if (this.state.activeCurrency !== activeCurrency) {
      return true;
    }
    return false;
  }

  componentWillUpdate(nextProps, { activeCurrency }) {
    console.info('Currency Changed: ', activeCurrency);
  }

  onCurrencyChange = (currency) => {
    this.setState({ activeCurrency: currency });
    // TODO this.props.onLanguageChange(currency);
  };

  renderCurrencyTitle = () => {
    const currency = this.state.activeCurrency;
    if (currency === 'usd') return <NavbarMobileOptionsCurrencyButtonDollar />;
    if (currency === 'yen') return <NavbarMobileOptionsCurrencyButtonYen />;
    throw new Error('Cannot render the Active Currency - Check NavbarMobileOptionsCurrencyButton component.');
  }

  renderCurrencyDropdown = () => {
    const currency = this.state.activeCurrency;
    if (currency === 'usd') return <NavbarMobileOptionsCurrencyDropdnYen onCurrencyChange={this.onCurrencyChange} />;
    if (currency === 'yen') return <NavbarMobileOptionsCurrencyDropdnDollar onCurrencyChange={this.onCurrencyChange} />;
    throw new Error('Cannot render the Active Currency - Check NavbarMobileOptionsCurrencyButton component.');
  }

  render() {
    return (
      <div className="navbar-mobile-options-currency">
        <NavbarMobileOptionsCurrencyButton
          activeCurrency={this.state.activeCurrency}
          renderCurrencyTitle={this.renderCurrencyTitle}
        />
        <NavbarMobileOptionsCurrencyDropdnContent
          activeCurrency={this.state.activeCurrency}
          renderCurrencyDropdown={this.renderCurrencyDropdown}
        />
      </div>
    );
  }
}
export default NavbarMobileOptionsCurrency;
