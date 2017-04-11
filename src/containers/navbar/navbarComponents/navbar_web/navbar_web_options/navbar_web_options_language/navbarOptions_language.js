import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import localeActions from '../../../../../../redux/locale';

import NavbarOptionsLanguageButton from './navbarOptions_language_mainButton';
import NavbarOptionsLanguageDropdnContent from './navbarOptions_language_dropdnContent';

import NavbarOptionsLanguageButtonEnglish from './navbarOptions_language_button_english';
import NavbarOptionsLanguageButtonNihongo from './navbarOptions_language_button_nihongo';

import NavbarOptionsLanguageDropdnEnglish from './navbarOptions_language_dropdn_english';
import NavbarOptionsLanguageDropdnNihongo from './navbarOptions_language_dropdn_nihongo';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Language change: Will set a flag in state that all SMART components will be receiving to determine how to render the Language info.

2. Finish mapping Redux action "onLanguageChange" to this components props.
*/

class NavbarOptionsLanguage extends Component {
  static propTypes = {
    activeLanguage: PropTypes.string,
    onLanguageChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeLanguage: props.activeLanguage, // <---- this is FAKE
    };
  }

  componentWillReceiveProps({ activeLanguage }) {
    if (this.props.activeLanguage !== activeLanguage) return this.setState({ activeLanguage });
    return 1;
  }

  shouldComponentUpdate(nextProps, { activeLanguage }) {
    if (this.state.activeLanguage !== activeLanguage) {
      return true;
    }
    return false;
  }

  onLanguageChange = language =>
  this.props.onLanguageChange(language);

  renderLanguageTitle = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'english') return <NavbarOptionsLanguageButtonEnglish />;
    if (Language === 'nihongo') return <NavbarOptionsLanguageButtonNihongo />;
    throw new Error('Cannot render the Active Language - Check NavbarOptionsLanguageButton component.');
  }

  renderLanguageDropdown = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'english') return <NavbarOptionsLanguageDropdnNihongo onLanguageChange={this.onLanguageChange} />;
    if (Language === 'nihongo') return <NavbarOptionsLanguageDropdnEnglish onLanguageChange={this.onLanguageChange} />;
    throw new Error('Cannot render the Active Language - Check NavbarOptionsLanguageButton component.');
  }

  render() {
    return (
      <div className="navbar-options-language">
        <NavbarOptionsLanguageButton
          activeLanguage={this.state.activeLanguage}
          renderLanguageTitle={this.renderLanguageTitle}
        />
        <NavbarOptionsLanguageDropdnContent
          activeLanguage={this.state.activeLanguage}
          renderLanguageDropdown={this.renderLanguageDropdown}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ locale }) => ({
  activeLanguage: locale.activeLanguage,
});
const mapDispatchToProps = dispatch => ({
  onLanguageChange: language => dispatch(localeActions.setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarOptionsLanguage);
