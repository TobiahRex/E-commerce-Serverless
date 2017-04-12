import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';
import AuthService from '../../../services/utils/authService';

import LoginForm from './components/loginForm.parent';

class Login extends Component {
  static contextTypes = {
    route: PropTypes.object,
  }

  static propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    auth: PropTypes.instanceOf(AuthService).isRequired,
  }
  constructor(props, context) {
    super(props);
    console.log('<Login /> context: ', context);
    this.auth = context.route.auth;

    this.state = {
      email: '',
      password: '',
      recaptchaToken: '',
    };
  }


  onInputChange = (id, value) => this.setState({ [id]: value });

  login = () => this.auth.login();

  recaptchaVerifyCb = (response) => {
    this.setState({ recaptchaToken: response });
  };

  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!');

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
                  <FontAwesome name="facebook" />
                </li>
                <li className="list--option twitter">
                  <FontAwesome name="twitter" />
                </li>
                <li className="list--option google">
                  <FontAwesome name="google-plus" />
                </li>
                <li className="list--option linkedin">
                  <FontAwesome name="linkedin" />
                </li>
              </ul>
              <div className="list__forgot-msg">
                <Link className="forgot-link" to="/forgot">
                  Forgot your Email or Password?
                </Link>
              </div>
            </div>
          </div>
          <LoginForm />
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
