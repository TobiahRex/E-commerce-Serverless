import React, { PropTypes, Component } from 'react';

import NavbarMobileOptionsLanguageButton from './navbarOptions_mobile_language_mainButton';
import NavbarMobileOptionsLanguageDropdnContent from './navbarOptions_mobile_language_dropdnContent';

import NavbarMobileOptionsLanguageButtonEnglish from './navbarOptions_mobile_language_button_english';
import NavbarMobileOptionsLanguageButtonNihongo from './navbarOptions_mobile_language_button_nihongo';

import NavbarMobileOptionsLanguageDropdnEnglish from './navbarOptions_mobile_language_dropdn_english';
import NavbarMobileOptionsLanguageDropdnNihongo from './navbarOptions_mobile_language_dropdn_nihongo';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Language change: Will set a flag in state that all SMART components will be receiving to determine how to render the Language info.
*/

class NavbarMobileOptionsLanguage extends Component {
  static propTypes = {
    activeLanguage: PropTypes.string,
    onLanguageChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeLanguage: this.props.activeLanguage || 'english',
    };
  }

  componentWillReceiveProps({ activeLanguage }) {
    if (this.props.activeLanguage !== activeLanguage) return this.setState({ activeLanguage });
    return 1;
  }

  shouldComponentUpdate(nextProps, { activeLanguage }) {
    if (this.state.activeLanguage !== activeLanguage) return true;
    return false;
  }

  componentWillUpdate(nextProps, { activeLanguage }) {
    console.info('Language Changed: ', activeLanguage);
  }

  onLanguageChange = (language) => {
    if (language === 'english') {
      this.setState({ activeLanguage: 'english' });
      this.props.onLanguageChange('english');
    } else if (language === 'japanese') {
      this.setState({ activeLanguage: 'japanese' });
      this.props.onLanguageChange('japanese');
    } else {
      console.warn('Make this an actual user message');
      throw new Error('Something went wrong with changing the language');
    }
  };

  renderLanguageTitle = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'english') return <NavbarMobileOptionsLanguageButtonEnglish />;
    if (Language === 'nihongo') return <NavbarMobileOptionsLanguageButtonNihongo />;
    throw new Error('Cannot render the Active Language - Check NavbarMobileOptionsLanguageButton component.');
  }

  renderLanguageDropdown = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'english') return <NavbarMobileOptionsLanguageDropdnNihongo onLanguageChange={this.onLanguageChange} />;
    if (Language === 'nihongo') return <NavbarMobileOptionsLanguageDropdnEnglish onLanguageChange={this.onLanguageChange} />;
    throw new Error('Cannot render the Active Language - Check NavbarMobileOptionsLanguageButton component.');
  }

  render() {
    return (
      <div className="navbar-mobile-options-language">
        <NavbarMobileOptionsLanguageButton
          renderLanguageTitle={this.renderLanguageTitle}
        />
        <NavbarMobileOptionsLanguageDropdnContent
          renderLanguageDropdown={this.renderLanguageDropdown}
        />
      </div>
    );
  }
}
export default NavbarMobileOptionsLanguage;
