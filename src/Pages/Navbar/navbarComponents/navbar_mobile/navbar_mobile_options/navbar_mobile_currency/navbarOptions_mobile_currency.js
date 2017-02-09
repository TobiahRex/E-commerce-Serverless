import React, { PropTypes, Component } from 'react';

import NavbarMobileOptionsCurrencyButton from './navbarOptions_mobile_currency_mainButton';
import NavbarMobileOptionsCurrencyDropdnContent from './navbarOptions_mobile_currency_dropdnContent';

import NavbarMobileOptionsCurrencyButtonDollar from './navbarOptions_mobile_currency_button_dollars';
import NavbarMobileOptionsCurrencyButtonYen from './navbarOptions_mobile_currency_button_yen';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Currency change: Will set a flag in state that all SMART components will be receiving to determine how to render the currency info.
*/

class NavbarMobileOptionsCurrency extends Component {
  static propTypes = {
    active_currency: PropTypes.string,
    onCurrencyChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      active_currency: this.props.active_currency,
    };
  }

  componentWillReceiveProps({ active_currency }) {
    if (this.props.active_currency !== active_currency) return this.setState({ active_currency });
    return 1;
  }

  onCurrencyChange = () => this.props.onCurrencyChange;

  renderCurrencyTitle = () => {
    const currency = this.state.active_currency;
    if (currency === 'usd') return <NavbarMobileOptionsCurrencyButtonDollar />;
    if (currency === 'yen') return <NavbarMobileOptionsCurrencyButtonYen />;
    throw new Error('Cannot render the Active Currency - Check NavbarMobileOptionsCurrencyButton component.');
  }

  renderCurrencyDropdown = () => {
    const currency = this.state.active_currency;
    if (currency === 'usd') return <NavbarMobileOptionsCurrencyButtonYen />;
    if (currency === 'yen') return <NavbarMobileOptionsCurrencyButtonDollar />;
    throw new Error('Cannot render the Active Currency - Check NavbarMobileOptionsCurrencyButton component.');
  }

  render() {
    return (
      <div className="navbar-mobile-options-currency">
        <NavbarMobileOptionsCurrencyButton
          renderCurrencyTitle={this.renderCurrencyTitle}
        />
        <NavbarMobileOptionsCurrencyDropdnContent
          renderCurrencyDropdown={this.renderCurrencyDropdown}
        />
      </div>
    );
  }
}
export default NavbarMobileOptionsCurrency;
