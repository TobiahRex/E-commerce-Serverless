import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FontAwesome from 'react-fontawesome';
import LoadingOrError from '../components/loginForm.loadingOrError';
import SocialButtonList from '../components/loginForm.socialButtonList';
import authActions from '../../../../redux/auth';

const { objectOf, func, string, bool, any } = PropTypes;

class Login extends Component {
  static propTypes = {
    route: objectOf(any).isRequired,
    push: func.isRequired,
    authSocialLogin: func.isRequired,
    previousPageUrl: string.isRequired,
    currentActiveUrl: string.isRequired,
    loggedIn: bool,
    loginError: objectOf(any),
    authInProgress: bool,
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
    this.setState(() => ({ ...this.state,
      authInProgress: nextProps.authInProgress,
    }));
  }

  shouldComponentUpdate(nextProps) {
    if (this.checkForRedirect(nextProps)) {
      this.props.push(nextProps.previousPageUrl);
    }
    return true;
  }

  checkForRedirect = ({ loggedIn, previousPageUrl, currentActiveUrl }) => {
    if (loggedIn) {
      if (previousPageUrl === '/login') {
        return ({ result: true, path: '/' });
      }
      if (previousPageUrl !== currentActiveUrl) {
        return ({ result: true, path: previousPageUrl });
      }
    }
    return false; // not logged in = no re-direct;
  }

  socialLogin = (e) => {
    let socialType = e.target.dataset.tag;
    if (!socialType) {
      socialType = e.target.parentNode.dataset.tag;
    }
    this.props.authSocialLogin(socialType);
  }

  render() {
    const { error, authInProgress } = this.state;
    return (
      <div className="sign-in--main">
        <div className="sign-in--container">
          <div className="sign-in__title">
            <h1>Login</h1>
          </div>

          {/* NOTE This component = functional */}
          <LoadingOrError
            errorMessage={error.message}
            authInProgress={authInProgress}
          />
          {/* NOTE This componet = PureComponent */}
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
                  <FontAwesome name="angle-double-left" />
                  {'\u00A0'}
                  Back
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ session, auth }) => ({
  previousPageUrl: session.previousPageUrl,
  currentActiveUrl: session.currentActiveUrl,
  authInProgress: !!auth.authorizationInProgress,
  loggedIn: auth.loggedIn,
  loginFailure: auth.loginFailure,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),

  authSocialLogin: socialType => dispatch(authActions.authSocialLogin(socialType)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
