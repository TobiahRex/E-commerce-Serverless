import React, { Component, PropTypes } from 'react';
import AuthService from '../../../../services/utils/authService';
import RecaptchaWidget from '../../../../components/recaptcha';
import LoginFormInputParent from './loginForm.inputParent';

class LoginForm extends Component {
  static propTypes = {
    auth: PropTypes.instanceOf(AuthService).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      recaptchaToken: '',
    };
  }

  onInputChange = (id, value) => this.setState({ [id]: value });

  recaptchaVerifyCb = response => this.setState({ recaptchaToken: response });

  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!');

  login = (e) => {
    e.preventDefault();
    this.props.auth.login(this.state.username, this.state.password);
  }

  render() {
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
        <LoginFormInputParent
          onInputChange={this.onInputChange}
          value={this.state.email}
          slug="email"
          type="email"
        />
        <LoginFormInputParent
          onInputChange={this.onInputChange}
          value={this.state.email}
          slug="password"
          type="password"
        />
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
