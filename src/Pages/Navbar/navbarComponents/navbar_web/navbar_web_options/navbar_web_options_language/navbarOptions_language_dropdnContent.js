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
      <span className="language-dropdown-content">
        <div className="language-dropdown-content-japanese">
          <div className="language-dropdown-content-japanese-image" />
          <div className="language-dropdown-content-japanese-nihongo">
            <span>日本語</span>
          </div>
        </div>
        <div
          className="language-dropdown-content-us"
          style={NavbarOptionsLanguageDropdnContent.styles.hidden}
        >
          <div className="language-dropdown-content-us-image" />
          <div className="language-dropdown-content-us-english">
            <span>English</span>
          </div>
        </div>
      </span>
    );
  }
}
export default NavbarOptionsLanguageDropdnContent;
