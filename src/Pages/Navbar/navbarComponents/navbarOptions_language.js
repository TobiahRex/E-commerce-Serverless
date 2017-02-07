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
        
        <span className="dropdown-content">
          <div className="japanese-flag container">
            <div className="image" />
            <div className="nihongo">
              <span>日本語</span>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default NavbarOptionsLanguage;
