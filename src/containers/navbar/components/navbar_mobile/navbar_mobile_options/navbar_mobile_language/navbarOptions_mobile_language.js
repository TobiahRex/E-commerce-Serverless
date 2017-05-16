import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import localeActions from '../../../../../../redux/locale/';
import {
  NavbarMobileOptionsLanguageButton,
  NavbarMobileOptionsLanguageDropdnContent,
  NavbarMobileOptionsLanguageButtonEnglish,
  NavbarMobileOptionsLanguageButtonNihongo,
  NavbarMobileOptionsLanguageDropdnEnglish,
  NavbarMobileOptionsLanguageDropdnNihongo,
} from './imports';


const { string, func } = PropTypes;

class NavbarMobileOptionsLanguage extends Component {
  static propTypes = {
    activeLanguage: string.isRequired,
    saveLanguage: func.isRequired,
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

  componentWillUpdate(nextProps, { activeLanguage }) {
    console.info('Language Changed: ', activeLanguage);
  }

  onLanguageChange = (language) => {
    this.props.saveLanguage(language);
    this.setState({ activeLanguage: language });
  }

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
      <div className="navbar__mobile--options">
        <div className="navbar-mobile-options-language">
          <NavbarMobileOptionsLanguageButton
            activeLanguage={this.state.activeLanguage}
            renderLanguageTitle={this.renderLanguageTitle}
          />
          <NavbarMobileOptionsLanguageDropdnContent
            activeLanguage={this.state.activeLanguage}
            renderLanguageDropdown={this.renderLanguageDropdown}
          />
        </div>
      </div>
    );
  }
}
const calculateQty = (loggedIn, cartObj) => (
  cartObj[loggedIn ? 'member' : 'guest'].reduce((accum, next) => {
    if (next.id) {
      accum += 1;
      return accum;
    }
    return accum;
  }, 0)
);

export default connect(
({ locale, auth, orders }) => ({
  activeLanguage: locale.activeLanguage,
  qty: calculateQty(auth.loggedIn, orders.cart),
  cartProducts: orders.cart[auth.loggedIn ? 'member' : 'guest'],
}),
dispatch => ({
  saveLanguage: language => dispatch(localeActions.setLanguage(language)),
}),
)(NavbarMobileOptionsLanguage);
