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
      <span className="dropdown-content">
        <div className="japanese-yen container">
          <FontAwesome name="yen" className="yen-icon" />
          <div className="yen">
            <span>YEN</span>
          </div>
        </div>
        <div
          className="us-dollars container" style={NavbarOptionsCurrencyDropdnContent.styles.hidden}
        >
          <FontAwesome name="usd" className="dollar-icon" />
          <div className="dollars">
            <span>USD</span>
          </div>
        </div>
      </span>
    );
  }
}

export default NavbarOptionsCurrencyDropdnContent;
