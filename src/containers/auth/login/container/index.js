import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import authActions from '../../../../redux/auth';
import LoadingOrError from '../components/loginForm.loadingOrError';
import SocialButtonList from '../components/loginForm.socialButtonList';

const { objectOf, func, string, bool, any } = PropTypes;

class Login extends Component {
  static propTypes = {
    push: func.isRequired,
    route: objectOf(any).isRequired,
    loggedIn: bool,
    loginError: objectOf(any),
    authInProgress: bool,
    authSocialLogin: func.isRequired,
    previousPageUrl: string.isRequired,
    currentActiveUrl: string.isRequired,
  }
  static defaultProps = {
    loggedIn: false,
    loginError: { description: null },
    authInProgress: false,
  }
  constructor(props) {
    super(props);
    this.auth = props.route.auth;
    this.state = {
      email: '',
      password: '',
      recaptchaToken: '',
      error: { message: '' },
      authInProgress: props.authInProgress,
    };
  }
  componentWillMount() {
    const { path, result } = this.checkForRedirect(this.props);
    if (result) this.props.push(path);
  }

  componentWillReceiveProps(nextProps) {
    const { path, result } = this.checkForRedirect(nextProps);
    if (result) {
      this.props.push(path);
    }
    this.setState(() => ({ ...this.state,
      authInProgress: nextProps.authInProgress,
    }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextState, this.state)) return true;
    return false;
  }

  checkForRedirect = ({ loggedIn, previousPageUrl, currentActiveUrl }) => {
    if (loggedIn) {
      if (previousPageUrl === '/login') return ({ result: true, path: '/' });
      if (previousPageUrl !== currentActiveUrl) return ({ result: true, path: previousPageUrl });
    }
    return ({ result: false, path: '' });
  }

  socialLogin = (e) => {
    let socialType = e.target.dataset.tag;
    if (!socialType) socialType = e.target.parentNode.dataset.tag;
    this.props.authSocialLogin(socialType);
  }

  render() {
    const { error, authInProgress } = this.state;
    return (
      <div className="sign-in--main">
        <div className="sign-in--container">
          <div className="sign-in__title">
            <h1>
              <IntlMsg id="auth.login.header.title" />
            </h1>
          </div>

          <LoadingOrError
            errorMessage={error.message}
            authInProgress={authInProgress}
          />
          <SocialButtonList
            socialLogin={this.socialLogin}
            visibility={authInProgress}
          />
          {/* TODO: MVP 2
            <LoginForm auth={this.auth} />
          */}

          <div className="sign-in__action-btns">
            {/* TODO: MVP 2
              <div className="action-btns__register">
              <button className="register-btn sweep-right" onClick={() => this.props.push('/register')}>
                Register
              </button>
            </div> */}
            <div className="action-btns__back-to-home">
              <button className="back-to-home-btn sweep-right" onClick={() => this.props.push('/')}>
                <span className="flex-btn-parent">
                  <FontAwesome name="angle-double-left" />&nbsp;
                  <IntlMsg id="auth.login.actions.back-to-home" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default connect(
  ({ session, auth }) => ({
    loggedIn: auth.loggedIn,
    loginFailure: auth.loginFailure,
    authInProgress: !!auth.authorizationInProgress,
    previousPageUrl: session.previousPageUrl,
    currentActiveUrl: session.currentActiveUrl,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),

    authSocialLogin: socialType => dispatch(authActions.authSocialLogin(socialType)),
  }),
)(Login);
