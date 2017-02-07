import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarOptionsCurrency extends PureComponent {
  render() {
    return (
      <div className="navbar actionSection upper currency">
        <div className="navbar actionSection upper currency dollar">
          <FontAwesome
            name="usd"
            className="navbar actionSection upper currency dollar icon"
          />
        </div>
        <div className="navbar actionSection upper currency title">
          <span>USD</span>
        </div>
        <div className="navbar actionSection upper currency chevron">
          <FontAwesome
            name="angle-down"
            className="navbar actionSection upper currency chevron icon"
          />
        </div>
      </div>
    );
  }
}

export default NavbarOptionsCurrency;
