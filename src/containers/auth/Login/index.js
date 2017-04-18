import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FontAwesome from 'react-fontawesome';
import LoginForm from './components/loginForm.parent';
import LoginError from './components/loginForm.error';
import SocialButtonList from './components/loginForm.socialButtonList';
import authActions from '../../../redux/auth';
// import sessionActions from '../../../redux/session';

class Login extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,

    push: PropTypes.func.isRequired,
    authSocialLogin: PropTypes.func.isRequired,
    // authorizationInProgress: PropTypes.func.isRequired,

    previousPageUrl: PropTypes.string.isRequired,
    currentActiveUrl: PropTypes.string.isRequired,

    loggedIn: PropTypes.bool.isRequired,
    AIP: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.auth = props.route.auth;
    this.state = {
      email: '',
      password: '',
      recaptchaToken: '',
      error: { message: '' },
    };
  }
  componentWillMount = () => {
    if (this.checkForRedirect(this.props)) this.props.push(this.props.previousPageUrl);
  }

  shouldComponentUpdate = (nextProps) => {
    if (this.checkForRedirect(nextProps)) {
      this.props.push(nextProps.previousPageUrl);
    }
    return true;
  };

  checkForRedirect = (nextProps) => {
    if (nextProps.loggedIn && nextProps.previousPageUrl !== nextProps.currentActiveUrl) {
      return true;
    } else if (!nextProps.loggedIn) return false;
    return false;
  }

  socialLogin = socialType => this.props.authSocialLogin(socialType);

  render() {
    return (
      <div className="sign-in--main">
        <div className="sign-in--container">
          <div className="sign-in__title">
            <h1>Login</h1>
          </div>
          {this.state.error.message && <LoginError errorMessage={this.state.error.message} />}
          <div className="sign-in__social--container">
            <div className="social--title">
              <div className="social--title-msg">
                <h5>Login with your Social Network</h5>
              </div>
            </div>

            {/* NOTE This componet = Pure Component */}
            <SocialButtonList socialLogin={this.socialLogin} />

          </div>

          <LoginForm auth={this.auth} />

          <div className="sign-in__action-btns">
            <div className="action-btns__register">
              <button className="register-btn sweep-right" onClick={() => this.props.push('/register')}>
                Register
              </button>
            </div>
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
  loggedIn: auth.loggedIn,
  AIP: auth.authorizationInProgress,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),

  // authorizationInProgress: () => dispatch(authActions.authorizationInProgress()),

  authSocialLogin: socialType => dispatch(authActions.authSocialLogin(socialType)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
