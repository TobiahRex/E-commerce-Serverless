import React, { PureComponent } from 'react';

/* TODO
1. Add dynamic show & hide for drop down options based on current active language.

2. Add swipe-right animation for hovering over options.

*/

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
        <div
          className="us-flag container"
          style={NavbarOptionsLanguageDropdnContent.styles.hidden}
        >
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
