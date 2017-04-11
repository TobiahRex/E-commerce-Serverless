import React, { PropTypes, PureComponent } from 'react';

/* TODO
1. This component receives a State property of the "active_language"  that will change display of the language button details.

*/

class NavbarOptionsLanguageButton extends PureComponent {
  static propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    renderLanguageTitle: PropTypes.func.isRequired,
  }

  renderLanguageTitle = () => this.props.renderLanguageTitle();

  render() {
    return (
      <span className="language-main-button">
        {this.renderLanguageTitle()}
      </span>
    );
  }
}

export default NavbarOptionsLanguageButton;
