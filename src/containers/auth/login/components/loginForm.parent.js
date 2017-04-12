import React, { Component, PropTypes } from 'react';
import AuthService from '../../../../services/utils/authService';
import RecaptchaWidget from '../../../../components/recaptcha';
import LoginFormInput from './loginForm.input';

class LoginForm extends Component {
  static propTypes = {
    auth: PropTypes.instanceOf(AuthService).isRequired,
    login: PropTypes.func.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.auth = props.auth;
    this.state = {
      email: '',
      password: '',
      recaptchaToken: '',
    }
  }

  login = (e) => {
    e.preventDefault();
    this.auth.login(this.state.username, this.state.password);
  }

  recaptchaVerifyCb = response => this.setState({ recaptchaToken: response });

  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!');

  onInputChange = (id, value) => this.setState({ [id]: value });

  render () {
    return (
      <form
        className="sign-in__form"
        onSubmit={this.login}
      >

        <ul className="sign-in__list">
          <li className="sign-in__left-break" />
          <li className="title-or">
            <p>Or</p>
          </li>
          <li className="sign-in__right-break" />
        </ul>
        <div className="form--email">
          <label htmlFor="email" className="email__input--label">
            Email{'\u00A0'}
            <span className="required-star">*</span>
          </label>
          <LoginFormInput
            onInputChange={this.onInputChange}
            slug="email"
            type="email"
            className="email__input--email"
            value={this.state.email}
          />
        </div>
        <div className="form--password">
          <label htmlFor="password" className="password__input--label">
            Password{'\u00A0'}
            <span className="required-star">*</span>
          </label>
          <LoginFormInput
            onInputChange={this.onInputChange}
            slug="password"
            type="password"
            className="password__input--password"
            value={this.state.password}
          />
        </div>
        <div className="form__login-recaptcha">
          <RecaptchaWidget
            verifyCb={this.recaptchaVerifyCb} onLoadCb={this.recaptchaOnLoadCb}
          />

          {/* TODO: Create an API request to verify this recptcha on form submit. */}

        </div>
        <div className="form__login-btn">
          <button type="submit" className="login-btn primary-button sweep-right" >
            Login
          </button>
        </div>
      </form>
    );
  }
}
export default LoginForm;
