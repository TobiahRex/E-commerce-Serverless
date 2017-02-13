import React, { PropTypes, PureComponent } from 'react';

/* TODO
  1. This component receives a State property of the
  "active_currency"  that will change display of the currency button details.

*/

class NavbarOptionsCurrencyButton extends PureComponent {
  static propTypes = {
    activeCurrency: PropTypes.string.isRequired,
    renderCurrencyTitle: PropTypes.func.isRequired,
  }

  renderCurrencyTitle = () => this.props.renderCurrencyTitle();

  render() {
    return (
      <span className="currency-main-button">
        {this.renderCurrencyTitle()}
      </span>
    );
  }
}

export default NavbarOptionsCurrencyButton;
