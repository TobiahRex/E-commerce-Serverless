import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import localeActions from './assets/utils';
import {
  NavbarLanguageBtn,
  NavbarLanguageDropdnContent,
  NavbarLanguageBtnEnglish,
  NavbarLanguageBtnNihongo,
  NavbarLanguageDropdnEnglish,
  NavbarLanguageDropdnNihongo,
} from './components';


const { string, func } = PropTypes;

class NavbarLanguage extends Component {
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
    if (Language === 'en') return <NavbarLanguageBtnEnglish />;
    if (Language === 'ja') return <NavbarLanguageBtnNihongo />;
    throw new Error('Cannot render the Active Language - Check NavbarLanguageBtn component.');
  }

  renderLanguageDropdown = () => {
    const Language = this.state.activeLanguage;
    if (Language === 'en') return <NavbarLanguageDropdnNihongo onLanguageChange={this.onLanguageChange} />;
    if (Language === 'ja') return <NavbarLanguageDropdnEnglish onLanguageChange={this.onLanguageChange} />;
    throw new Error('Cannot render the Active Language - Check NavbarLanguageButton component.');
  }

  render() {
    return (
      <div className="navbar__mobile--">
        <div className="navbar-mobile--language">
          <NavbarLanguageBtn
            activeLanguage={this.state.activeLanguage}
            renderLanguageTitle={this.renderLanguageTitle}
          />
          <NavbarLanguageDropdnContent
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
)(NavbarLanguage);
