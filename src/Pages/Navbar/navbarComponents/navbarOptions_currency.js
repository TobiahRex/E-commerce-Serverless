import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

import NavbarOptionsCurrencyButton from './navbarOptions_currency_mainButton';

class NavbarOptionsCurrency extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <div className="navbar actionSection upper currency">
        <NavbarOptionsCurrencyButton />
        <span className="dropdown-content">
          <div className="japanese-yen container">
            <FontAwesome name="yen" className="yen-icon" />
            <div className="yen">
              <span>YEN</span>
            </div>
          </div>
          <div className="us-dollars container">
            <FontAwesome name="usd" className="dollar-icon" />
            <div className="dollars">
              <span>USD</span>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default NavbarOptionsCurrency;
