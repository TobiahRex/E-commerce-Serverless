import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import localeActions from '../../../../../../redux/locale';

import {
  NavbarLanguageButton,
  NavbarLanguageButtonEnglish,
  NavbarLanguageButtonNihongo,
  NavbarLanguageDropdnContent,
  NavbarLanguageDropdnEnglish,
  NavbarLanguageDropdnNihongo,
} from './components';

const { string, func } = PropTypes;

class NavbarLanguage extends React.Component {
  static propTypes = {
    saveLanguage: func.isRequired,
    activeLanguage: string.isRequired,
  }

  static defaultProps = {
    activeUser: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeLanguage: props.activeLanguage,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { activeLanguage } = nextProps;
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ activeLanguage });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextProps, this.props) ||
      !_.isEqual(nextState, this.state)) return true;
    return false;
  }

  onLanguageChange = (language) => {
    this.setState(() => ({ activeLanguage: language }),
    () => this.props.saveLanguage(language));
  }

  render() {
    const { activeLanguage } = this.props;
    return (
      <div className="navbar-actionSection-upper-options">
        <div className="navbar-options-language">
          <NavbarLanguageButton activeLanguage={activeLanguage}>
            {
              activeLanguage === 'en' ?
                <NavbarLanguageButtonEnglish />
              : <NavbarLanguageButtonNihongo />
            }
          </NavbarLanguageButton>

          <NavbarLanguageDropdnContent>
            {
              activeLanguage === 'en' ?
                <NavbarLanguageDropdnNihongo onLanguageChange={this.onLanguageChange} />
              : <NavbarLanguageDropdnEnglish onLanguageChange={this.onLanguageChange} />
            }
          </NavbarLanguageDropdnContent>
        </div>
      </div>
    );
  }
}
export default connect(
  ({ locale }) => ({ activeLanguage: locale.activeLanguage }),
  dispatch => ({
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),
  }),
)(NavbarLanguage);
