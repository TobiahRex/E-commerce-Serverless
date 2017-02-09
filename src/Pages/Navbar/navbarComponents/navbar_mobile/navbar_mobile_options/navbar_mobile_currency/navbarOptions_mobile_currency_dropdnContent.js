import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

/* TODO
1. Add dynamic show & hide for drop down options based on current active currency.

2. Add swipe-right animation for hovering over options.

*/
class NavbarMobileOptionsCurrencyDropdnContent extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <span className="mobile-currency-dropdown-content">
        <div className="mobile-currency-dropdown-content-yen">
          <FontAwesome name="yen" className="mobile-currency-dropdown-content-yen-icon" />
          <div className="mobile-currency-dropdown-content-yen-title">
            <span>YEN</span>
          </div>
        </div>
        <div
          className="mobile-currency-dropdown-content-dollars"
          style={NavbarMobileOptionsCurrencyDropdnContent.styles.hidden}
        >
          <FontAwesome name="usd" className="mobile-currency-dropdown-content-dollars-icon" />
          <div className="mobile-currency-dropdown-content-dollars-title">
            <span>USD</span>
          </div>
        </div>
      </span>
    );
  }
}

export default NavbarMobileOptionsCurrencyDropdnContent;
