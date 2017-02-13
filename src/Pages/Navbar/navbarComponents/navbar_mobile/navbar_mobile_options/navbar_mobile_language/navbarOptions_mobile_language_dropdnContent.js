import React, { PropTypes, PureComponent } from 'react';

/* TODO
1. Add dynamic show & hide for drop down options based on current active language.

2. Add swipe-right animation for hovering over options.
*/
class NavbarMobileOptionsLanguageDropdnContent extends PureComponent {
  static propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    renderLanguageDropdown: PropTypes.func,
  }

  renderLanguageDropdown = () => this.props.renderLanguageDropdown();

  render() {
    return (
      <span className="mobile-language-dropdown-content">
        {this.renderLanguageDropdown()}
      </span>
    );
  }
}

export default NavbarMobileOptionsLanguageDropdnContent;
