import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

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

  render() {
    return (
      <span className="mobile-currency-main-button">
        <div className="mobile-currency-main-button-dollar">
          <FontAwesome
            name={this.props.active_currency}
            className="mobile-currency-main-button-dollar-icon"
          />
        </div>
        <div className="mobile-currency-main-button-dollar-title">
          <span>{this.props.active_currency.toUpperCase()}</span>
        </div>
        <div className="mobile-currency-main-button-dollar-chevron">
          <FontAwesome
            name="angle-down"
            className="mobile-currency-main-button-dollar-chevron-icon"
          />
        </div>
        <div
          style={NavbarMobileOptionsCurrencyButton.styles.hidden}
          className="mobile-currency-main-button-yen"
        >
          <FontAwesome
            name={this.props.active_currency}
            className="mobile-currency-main-button-yen-icon"
          />
        </div>
        <div className="mobile-currency-main-button-yen-title">
          <span>{this.props.active_currency.toUpperCase()}</span>
        </div>
        <div className="mobile-currency-main-button-yen-chevron">
          <FontAwesome
            name="angle-down"
            className="mobile-currency-main-button-yen-chevron-icon"
          />
        </div>
      </span>
    );
  }
}

export default NavbarMobileOptionsCurrencyButton;
