import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';

import LoginForm from './components/loginForm.parent';

class Login extends Component {
  static propTypes = {
    // location: PropTypes.objectOf(PropTypes.any).isRequired,
    route: PropTypes.objectOf(PropTypes.any).isRequired,
  }
  constructor(props) {
    super(props);
    this.auth = props.route.auth;
    this.state = {
      email: '',
      password: '',
      recaptchaToken: '',
    };
  }

  socialLogin = socialType => this.auth[socialType]();

  render() {
    return (
      <div className="sign-in--main">
        <div className="sign-in--container">
          <div className="sign-in__title">
            <h1>Login</h1>
          </div>
          <div className="sign-in__error">
            <div className="error--icon">
              <FontAwesome name="plus" />
            </div>
            {/* <h5>Invalid Username or Password</h5> */}
            <h5>You entered an invalid email format.  Please provide a valid email and re-submit.
              <br />
              Example: <i>batman@wayne.enterprises.com</i>
            </h5>
          </div>
          <div className="sign-in__social--container">
            <div className="social--title">
              <div className="social--title-msg">
                <h5>Login with your Social Network</h5>
              </div>
            </div>
            <div className="social--btns__list">
              <ul className="list--container">
                <li className="list--option facebook">
                  <button id="loginWithFacebook" onClick={e => this.socialLogin(e.target.getAttribute('id'))}>
                    <FontAwesome name="facebook" />
                  </button>
                </li>
                <li className="list--option twitter">
                  <button id="loginWithTwitter" onClick={e => this.socialLogin(e.target.getAttribute('id'))}>
                    <FontAwesome name="twitter" />
                  </button>
                </li>
                <li className="list--option google">
                  <buton id="loginWithGoogle" onClick={e => this.socialLogin(e.target.getAttribute('id'))}>
                    <FontAwesome name="google-plus" />
                  </buton>
                </li>
                <li className="list--option linkedin">
                  <button id="loginWithLinkedin" onClick={e => this.socialLogin(e.target.getAttribute('id'))}>
                    <FontAwesome name="linkedin" />
                  </button>
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
              <button className="register-btn sweep-right" onClick={() => browserHistory.push('/register')}>Register</button>
            </div>
            <div className="action-btns__back-to-home">
              <button className="back-to-home-btn sweep-right" onClick={() => browserHistory.push('/')}>
                <span className="flex-btn-parent">
                  <FontAwesome name="angle-double-left" />
                  {'\u00A0'}Back
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
