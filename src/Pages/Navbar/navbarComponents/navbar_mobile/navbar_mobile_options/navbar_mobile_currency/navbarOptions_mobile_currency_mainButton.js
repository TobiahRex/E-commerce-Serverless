import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

/* TODO
1. This component receives a State property of the "active_currency"  that will change display of the currency button details.

*/

class NavbarMobileOptionsCurrencyButton extends PureComponent {
  static propTypes = {
    renderCurrencyTitle: PropTypes.func,
  }

  renderCurrencyTitle = () => this.props.renderCurrencyTitle();

  render() {
    return (
      <span className="mobile-currency-main-button">
        {/* {this.renderCurrencyTitle(this.props.active_currency)} */}
        DYNAMIC
      </span>
    );
  }
}

export default NavbarMobileOptionsCurrencyButton;
