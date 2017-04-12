import React from 'react';
import RecaptchaWidget from '../../../components/recaptcha';

export default function LoginForm() {
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
      <div className="form__login-recaptcha">
        <RecaptchaWidget verifyCb={this.recaptchaVerifyCb} onLoadCb={this.recaptchaOnLoadCb} />
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
