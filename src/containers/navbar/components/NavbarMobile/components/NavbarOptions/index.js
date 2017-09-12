import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import localeActions from './assets/utils';
import {
  NavbarOptionsLanguageButton,
  NavbarOptionsLanguageDropdnContent,
  NavbarOptionsLanguageButtonEnglish,
  NavbarOptionsLanguageButtonNihongo,
  NavbarOptionsLanguageDropdnEnglish,
  NavbarOptionsLanguageDropdnNihongo,
} from './components';


const { string, func } = PropTypes;

class NavbarOptionsLanguage extends Component {
  static propTypes = {
    saveLanguage: func.isRequired,
    activeLanguage: string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeLanguage: props.activeLanguage,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { activeLanguage } = nextProps;
    if (activeLanguage !== this.props.activeLanguage) {
      this.setState({ activeLanguage });
    }
  }

  shouldComponentUpdate(nextProps, { activeLanguage }) {
    if (this.state.activeLanguage !== activeLanguage) return true;
    return false;
  }

  onLanguageChange = (language) => {
    this.props.saveLanguage(language);
    this.setState({ activeLanguage: language });
  }

  renderLanguageTitle = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'en') return <NavbarOptionsLanguageButtonEnglish />;
    if (Language === 'ja') return <NavbarOptionsLanguageButtonNihongo />;
    throw new Error('Cannot render the Active Language - Check NavbarOptionsLanguageButton component.');
  }

  renderLanguageDropdown = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'en') return <NavbarOptionsLanguageDropdnNihongo onLanguageChange={this.onLanguageChange} />;
    if (Language === 'ja') return <NavbarOptionsLanguageDropdnEnglish onLanguageChange={this.onLanguageChange} />;
    throw new Error('Cannot render the Active Language - Check NavbarOptionsLanguageButton component.');
  }

  render() {
    return (
      <div className="navbar__mobile--options">
        <div className="navbar-mobile-options-language">
          <NavbarOptionsLanguageButton
            activeLanguage={this.state.activeLanguage}
            renderLanguageTitle={this.renderLanguageTitle}
          />
          <NavbarOptionsLanguageDropdnContent
            activeLanguage={this.state.activeLanguage}
            renderLanguageDropdown={this.renderLanguageDropdown}
          />
        </div>
      </div>
    );
  }
}

export default connect(
({ locale }) => ({
  activeLanguage: locale.activeLanguage,
}),
dispatch => ({
  saveLanguage: language => dispatch(localeActions.setLanguage(language)),
}),
)(NavbarOptionsLanguage);
