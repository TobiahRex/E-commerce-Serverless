import React from 'react';
import FontAwesome from 'react-fontawesome';


export default function Register() {
  return (
    <div className="register--main">
      <div className="register--container">
        <div className="register__title">
          <h1>Create An Account</h1>
        </div>
        <div className="register__error">
          {/* <div className="error--icon">
            <FontAwesome name="plus" />
          </div> */}
          <div className="success--icon">
            <FontAwesome name="check-circle" />
          </div>
          <div className="error--msg">
            <p className="pwds-do-not-match">
              Those passwords do not match.  Please Try Again & Submit.
            </p>
            {/* <p className="missing-req-field">
              Missing Required field {'"<Field Name>"'}
              </p>
              <p className="register-success-email">
              Congratulations! You have been successfully registered!
              <br />
              You will be re-directed to the homepage in {'<5>'} seconds.
              </p>
              <p className="register-success-social">
              Congratulations! You have been successfully registered with your {'<Social Network>'} account.
              <br />
              You will be re-directed to the homepage in {'<5>'} seconds.
              </p>
              <p className="duplicate-login-info">There is already an account with this user information. If you are sure that this information is yours, click here to reset your password to access your account.</p>
            */}
          </div>
        </div>
        <div className="register__social-container">
          <div className="social--title">
            <p>Register Quickly With...</p>
          </div>
          <div className="social--btns">
            <ul>
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
          </div>
        </div>
        <div className="register__email--container">
          <div className="email--title">
            <ul>
              <li className="left-break" />
              <li className="or"><p>Or</p></li>
              <li className="right-break" />
            </ul>
          </div>
          <div className="email__inputs--container">
            <form onSubmit={() => console.info(e.target.value)}>
              <div className="inputs--personal-info">
                <h3>Personal Information</h3>
                <div className="input__first-name">
                  <label htmlFor="input-first-name">First Name{'\u00A0'}
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="input-first-name" />
                </div>
                <div className="input__lastname">
                  <label htmlFor="input-last-name">Last Name{'\u00A0'}
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="input-last-name" />
                </div>
                <div className="input__email">
                  <label htmlFor="input-email">Email{'\u00A0'}
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="input-email" />
                </div>
              </div>
              <div className="inputs--login-info">
                <h3>Login Information</h3>
                <div className="input__password">
                  <label htmlFor="input-password">Password{'\u00A0'}
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="input-password" />
                </div>
                <div className="input__confirm-pwd">
                  <label htmlFor="input-confirm-pwd">
                    Confirm Password{'\u00A0'}
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="input-confirm-pwd" />
                </div>
                <div className="input__newsletter--sign-up">
                  <div className="newsletter--icon-container">
                    <FontAwesome name="plus" />
                  </div>
                  <div className="newsletter--msg">
                    <p>Sign up for Newsletter</p>
                  </div>
                </div>
              </div>
              <div className="action-btns">
                <button className="back-to-home-btn">
                  <span className="flex-btn-parent">
                    <FontAwesome name="angle-double-left" />
                    Back
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
