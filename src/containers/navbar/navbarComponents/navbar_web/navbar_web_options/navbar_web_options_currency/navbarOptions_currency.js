import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import geoActions from '../../../../../../redux/geo';

import NavbarOptionsCurrencyButton from './navbarOptions_currency_mainButton';
import NavbarOptionsCurrencyDropdnContent from './navbarOptions_currency_dropdnContent';

import NavbarOptionsCurrencyButtonDollar from './navbarOptions_currency_button_dollars';
import NavbarOptionsCurrencyButtonYen from './navbarOptions_currency_button_yen';

import NavbarOptionsCurrencyDropdnDollar from './navbarOptions_currency_dropdn_dollars';
import NavbarOptionsCurrencyDropdnYen from './navbarOptions_currency_dropdn_yen';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Currency change: Will set a flag in state that all SMART components will be receiving to determine how to render the currency info.

2. Finish mapping Redux action to this comp's props for Currency Change.
*/

class NavbarOptionsCurrency extends Component {
  static propTypes = {
    activeCurrency: PropTypes.string,
    onCurrencyChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeCurrency: props.activeCurrency || 'usd',
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

  onCurrencyChange = currency =>
  this.props.onCurrencyChange(currency);

  renderCurrencyTitle = () => {
    const currency = this.state.activeCurrency;
    if (currency === 'usd') return <NavbarOptionsCurrencyButtonDollar />;
    if (currency === 'yen') return <NavbarOptionsCurrencyButtonYen />;
    throw new Error('Cannot render the Active Currency - Check NavbarOptionsCurrencyButton component.');
  }

  renderCurrencyDropdown = () => {
    const currency = this.state.activeCurrency;
    if (currency === 'usd') return <NavbarOptionsCurrencyDropdnYen onCurrencyChange={this.onCurrencyChange} />;
    if (currency === 'yen') return <NavbarOptionsCurrencyDropdnDollar onCurrencyChange={this.onCurrencyChange} />;
    throw new Error('Cannot render the Active Currency - Check NavbarOptionsCurrencyButton component.');
  }

  render() {
    return (
      <div className="navbar-options-currency">
        <NavbarOptionsCurrencyButton
          activeCurrency={this.state.activeCurrency}
          renderCurrencyTitle={this.renderCurrencyTitle}
        />
        <NavbarOptionsCurrencyDropdnContent
          activeCurrency={this.state.activeCurrency}
          renderCurrencyDropdown={this.renderCurrencyDropdown}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ geo }) => ({
  activeCurrency: geo.active_currency,
});
const mapDispatchToProps = dispatch => ({
  onCurrencyChange: currency => dispatch(geoActions.setCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarOptionsCurrency);
