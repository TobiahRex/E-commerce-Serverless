import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

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
        <span className="main-button">
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
        </span>
        {/* <span className="dropdown-content">
          <div className="japanese-flag container">
          <div className="image" />
          <div className="nihongo">
          <span>日本語</span>
          </div>
          </div>
          <div className="us-flag container">
          <div className="image" />
          <div className="english">
          <span>English</span>
          </div>
          </div>
        </span> */}
      </div>
    );
  }
}

export default NavbarOptionsCurrency;
