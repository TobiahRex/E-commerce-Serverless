import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routerActions } from 'react-router-redux';
import FontAwesome from 'react-fontawesome';

import sessionActions from '../../../redux/session';
import LoginForm from './components/loginForm.parent';
import LoginError from './components/loginForm.error';
import SocialLoginButton from './components/loginForm.socialButton';

class Login extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    push: PropTypes.func.isRequired,
    previousPageUrl: PropTypes.string.isRequired,
    saveLoginPage: PropTypes.func.isRequired,
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

  socialLogin = (socialType) => {
    this.props.saveLoginPage(this.props.previousPageUrl);
    // this.auth[socialType]();
  };

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
            <div className="social--btns__list">
              <ul className="list--container">
                <li className="list--option facebook">
                  <SocialLoginButton
                    callback={() => this.socialLogin('loginWithFacebook')}
                    slug="facebook"
                  />
                </li>
                <li className="list--option twitter">
                  <SocialLoginButton
                    callback={() => this.socialLogin('loginWithTwitter')}
                    slug="twitter"
                  />
                </li>
                <li className="list--option google">
                  <SocialLoginButton
                    callback={() => this.socialLogin('loginWithGoogle')}
                    slug="google-plus"
                  />
                </li>
                <li className="list--option linkedin">
                  <SocialLoginButton
                    callback={() => this.socialLogin('loginWithLinkedin')}
                    slug="linkedin"
                  />
                </li>
              </ul>
              <div className="list__forgot-msg">
                <Link className="forgot-link" to="/forgot">
                  Forgot your Email or Password?
                </Link>
              </div>
            </div>
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
const mapStateToProps = ({ session }) => ({
  previousPageUrl: session.previousPageUrl,
});
const mapDispatchToProps = (dispatch) => {
  const newRouterActions = bindActionCreators({ ...routerActions }, dispatch);
  return ({
    ...newRouterActions,
    saveLoginPage: previousUrl => dispatch(sessionActions.savePreloginPage(previousUrl)),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
