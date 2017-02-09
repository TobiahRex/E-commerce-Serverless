import React, { PropTypes, PureComponent } from 'react';

/* TODO
1. Add dynamic show & hide for drop down options based on current active currency.

2. Add swipe-right animation for hovering over options.

*/
class NavbarMobileOptionsCurrencyDropdnContent extends PureComponent {
  static propTypes = {
    renderCurrencyDropdown: PropTypes.func,
  }

  renderCurrencyDropdown = () => this.props.renderCurrencyDropdown();

  render() {
    return (
      <span className="mobile-currency-dropdown-content">
        {/* {this.renderCurrencyDropdown()} */}
        DYNAMIC
      </span>
    );
  }
}

export default NavbarMobileOptionsCurrencyDropdnContent;
