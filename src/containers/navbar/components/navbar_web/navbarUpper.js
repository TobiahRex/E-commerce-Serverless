import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import localeActions from '../../../../redux/locale';
import NavbarLanguage from './navbar_web_language/';
import NavbarUserActions from './navbar_web_userActions/';
import NavbarCart from './navbar_web_cart/container/';

const { string, func, objectOf, any } = PropTypes;

class NavbarUpper extends Component {
  static propTypes = {
    activeUser: objectOf(any),
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
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();
    const productsDiff = isArrayEqual(nextProps, this.props);

    if (
      !_.isEqual(nextProps, this.props) ||
      !_.isEqual(nextState, this.state) ||
      productsDiff
    ) return true;
    return false;
  }

  onLanguageChange = (language) => {
    this.props.saveLanguage(language);
    this.setState({ activeLanguage: language });
  }

  render() {
    const { activeUser, activeLanguage } = this.props;
    return (
      <div className="navbar-actionSection-upper">
        <div className="navbar-actionSection-upper-options">
          <NavbarLanguage
            onLanguageChange={this.onLanguageChange}
            activeLanguage={activeLanguage}
          />
        </div>

        <NavbarUserActions activeUser={activeUser} />

        <div className="navbar actionSection upper mycart-container">
          <NavbarCart activeUser={activeUser} />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ locale, user }) => ({
    activeUser: user.profile,
    activeLanguage: locale.activeLanguage,
  }),
  dispatch => ({
    saveLanguage: language => dispatch(localeActions.setLanguage(language)),
  }),
)(NavbarUpper);
