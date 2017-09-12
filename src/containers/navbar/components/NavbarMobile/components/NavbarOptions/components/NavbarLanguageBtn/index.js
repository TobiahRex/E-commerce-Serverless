import React from 'react';
import PropTypes from 'prop-types';
/* TODO
1. This component receives a State property of the "active_language"  that will change display of the language button details.
*/
const { func } = PropTypes;

class NavbarLanguageButton extends React.PureComponent {
  static propTypes = { renderLanguageTitle: func.isRequired }

  renderLanguageTitle = () => this.props.renderLanguageTitle();

  render() {
    return (
      <span className="mobile-language-main-button">
        {this.renderLanguageTitle()}
      </span>
    );
  }
}

export default NavbarLanguageButton;
