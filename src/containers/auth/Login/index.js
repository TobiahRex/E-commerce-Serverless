import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';
import RecaptchaWidget from '../../../components/recaptcha';

class Login extends Component {
  static propTypes = {
    // location: PropTypes.objectOf(PropTypes.any).isRequired,
    route: PropTypes.objectOf(PropTypes.any).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      recaptchaToken: '',
    };
  }
  recaptchaVerifyCb = (response) => {
    this.setState({ recaptchaToken: response });
  };
  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!');

  login = () => this.props.route.auth.login();

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
          <form className="sign-in__form">
            <ul className="sign-in__list">
              <li className="sign-in__left-break" />
              <li className="title-or">
                <p>Or</p>
              </li>
              <li className="sign-in__right-break" />
            </ul>
            <div className="form--email">
              <label htmlFor="email-input" className="email__input--label">
                Email{'\u00A0'}
                <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="email-input"
                className="email__input--email"
              />
            </div>
            <div className="form--password">
              <label htmlFor="password-input" className="password__input--label">
                Password{'\u00A0'}
                <span className="required-star">*</span>
              </label>
              <input type="password" id="password-input" className="password__input--password" />
            </div>
            <div className="form__login-btn">
              <button
                type="button"
                className="login-btn primary-button sweep-right"
                onClick={() => console.info('Login Submit')}
              >Login</button>
            </div>
            <div className="form__login-recaptcha">
              <RecaptchaWidget verifyCb={this.recaptchaVerifyCb} onLoadCb={this.recaptchaOnLoadCb} />
              {/* TODO: Create an API request to verify this recptcha on form submit. */}
            </div>
          </form>
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
