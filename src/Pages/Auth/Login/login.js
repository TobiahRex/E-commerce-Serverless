import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';

export default function SignIn() {
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
          <h5>Invalid Username or Password</h5>
        </div>
        <form className="sign-in__form">
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
            <input type="text" id="password-input" className="password__input--password" />
          </div>
          <div className="form--login-btn">
            <button
              type="button"
              className="login-btn sweep-right"
              onClick={() => console.info('Login Submit')}
            >Login</button>
          </div>
        </form>
        <div className="sign-in__social--container">
          <div className="social--title">
            <ul className="social--title-list">
              <li className="title-left-break" />
              <li className="title-or">
                <p>Or</p>
              </li>
              <li className="title-right-break" />
            </ul>
            <div className="social--title-msg">
              <p>Login with your Social Network</p>
            </div>
          </div>
          <div className="social--btns__list">
            <ul className="list--container">
              <li className="list--option">
                <FontAwesome name="facebook" />
              </li>
              <li className="list--option">
                <FontAwesome name="instagram" />
              </li>
              <li className="list--option">
                <FontAwesome name="twitter" />
              </li>
              <li className="list--option">
                <FontAwesome name="google" />
              </li>
            </ul>
            <div className="list__forgot-msg">
              <Link className="forgot-link" to="/forgot">
                Forgot your Email or Password?
              </Link>
            </div>
          </div>
        </div>
        <div className="sign-in__action-btns">
          <div className="action-btns__register">
            <button className="register-btn sweep-right" onClick={() => browserHistory.push('/register')}>Register</button>
          </div>
          <div className="action-btns__back-to-home">
            <button className="back-to-home-btn sweep-right" onClick={() => browserHistory.push('/')}>
              <span className="flex-btn-parent">
                <FontAwesome name="angle-double-left" />
                Back
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
