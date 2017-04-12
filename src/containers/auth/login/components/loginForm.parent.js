import React, { PropTypes } from 'react';
import AuthService from '../../../../services/utils/authService';
import RecaptchaWidget from '../../../../components/recaptcha';
import LoginFormInput from './loginForm.input';

const propTypes = {
  auth: PropTypes.instanceOf(AuthService).isRequired,
  onInputChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
};

function LoginForm(auth, onInputChange, login, signUp, loginWith) {
  return (
    <form className="sign-in__form">
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
          onInputChange={onInputChange}
          slug="email"
          type="email"
          className="email__input--email"
          value={emailValue}
        />
      </div>
      <div className="form--password">
        <label htmlFor="password" className="password__input--label">
          Password{'\u00A0'}
          <span className="required-star">*</span>
        </label>
        <LoginFormInput
          onInputChange={onInputChange}
          slug="password"
          type="password"
          className="password__input--password"
          value={passwordValue}
        />
      </div>
      <div className="form__login-recaptcha">
        <RecaptchaWidget
          verifyCb={this.recaptchaVerifyCb} onLoadCb={this.recaptchaOnLoadCb}
        />

        {/* TODO: Create an API request to verify this recptcha on form submit. */}

      </div>
      <div className="form__login-btn">
        <button
          type="button"
          className="login-btn primary-button sweep-right"
          onClick={() => console.info('Login Submit')}
        >Login</button>
      </div>
    </form>
  );
}
LoginForm.propTypes = propTypes;
export default LoginForm;
