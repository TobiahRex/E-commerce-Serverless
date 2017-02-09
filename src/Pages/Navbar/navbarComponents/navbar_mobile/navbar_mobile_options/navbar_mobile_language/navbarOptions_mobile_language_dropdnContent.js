import React, { PureComponent } from 'react';

/* TODO
1. Add dynamic show & hide for drop down options based on current active language.

2. Add swipe-right animation for hovering over options.

*/
class NavbarMobileOptionsLanguageDropdnContent extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <span className="mobile-language-dropdown-content">
        <div className="mobile-language-dropdown-content-japanese">
          <div className="mobile-language-dropdown-content-japanese-image" />
          <div className="mobile-language-dropdown-content-japanese-nihongo">
            <span>日本語</span>
          </div>
        </div>
        <div
          className="mobile-language-dropdown-content-us"
          style={NavbarMobileOptionsLanguageDropdnContent.styles.hidden}
        >
          <div className="mobile-language-dropdown-content-us-image" />
          <div className="mobile-language-dropdown-content-us-english">
            <span>English</span>
          </div>
        </div>
      </span>
    );
  }
}

export default NavbarMobileOptionsLanguageDropdnContent;
