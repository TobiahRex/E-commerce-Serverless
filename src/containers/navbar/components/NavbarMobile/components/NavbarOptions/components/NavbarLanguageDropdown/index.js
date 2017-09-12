import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* TODO
1. Add dynamic show & hide for drop down options based on current active language.

2. Add swipe-right animation for hovering over options.
*/
const { func } = PropTypes;

class NavbarLanguageDropdown extends PureComponent {
  static propTypes = {
    renderLanguageDropdown: func.isRequired,
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

export default NavbarLanguageDropdown;
