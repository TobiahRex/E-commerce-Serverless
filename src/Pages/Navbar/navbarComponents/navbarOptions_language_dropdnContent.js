import React, { PureComponent } from 'react';

class NavbarOptionsLanguageDropdnContent extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <span className="dropdown-content">
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
      </span>
    );
  }
}
export default NavbarOptionsLanguageDropdnContent;
