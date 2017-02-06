import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarOptionsLanguage extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {
      display: 'flex',
    },
  }
  render() {
    return (
      <div className="navbar actionSection upper language">
        <span className="main-button">
          <div className="flag-us">
            <div className="image" />
          </div>
          <div className="navbar actionSection upper language title">
            <span>ENGLISH</span>
          </div>
          <div className="navbar actionSection upper language chevron">
            <FontAwesome
              name="chevron-down" className="navbar actionSection upper language chevron icon"
            />
          </div>
        </span>
        <span className="dropdown-content">
          <div className="japanese-flag container">
            <div className="japanese-flag image" />
            <div className="japanese-flag nihongo">
              <span>日本語</span>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default NavbarOptionsLanguage;
