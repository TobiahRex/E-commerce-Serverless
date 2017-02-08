import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

/* TODO

1. This component will show or hide, the appropriate currency based on global state value set as true
Example:
  currency: {
  japansese: true,
  usd: false
}
*/

class NavbarOptionsCurrencyDropdnContent extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <span className="currency-dropdown-content">
        <div className="currency-dropdown-content-yen">
          <FontAwesome name="yen" className="currency-dropdown-content-yen-icon" />
          <div className="currency-dropdown-content-yen-title">
            <span>YEN</span>
          </div>
        </div>
        <div
          className="currency-dropdown-content-dollars"
          style={NavbarOptionsCurrencyDropdnContent.styles.hidden}
        >
          <FontAwesome name="usd" className="currency-dropdown-content-dollars-icon" />
          <div className="currency-dropdown-content-dollars-title">
            <span>USD</span>
          </div>
        </div>
      </span>
    );
  }
}

export default NavbarOptionsCurrencyDropdnContent;
