import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';
import RecaptchaWidget from '../../../components/recaptcha';

const { objectOf, any } = PropTypes;
class Register extends Component {
  static propTypes = {
    route: objectOf(any).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      recpatchToken: '',
    };
  }

  recaptchaVerifyCb = (response) => {
    this.setState({ recaptchaToken: response });
  };
  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!');

  render() {
    return (
      <div className="register--main">
        <div className="register--container">
          <div className="register__title">
            <h1>Create An Account</h1>
          </div>
          <div className="register__status-msg">
            <div className="error--icon">
              <FontAwesome name="plus" className="fa-error-icon" />
            </div>
            {/* <div className="success--icon">
              <FontAwesome name="check-circle" />
            </div> */}
            <div className="error--msg">
              {/*
                <p className="pwds-do-not-match">
                Those passwords do not match.  Please Try Again & Re-Submit.
                </p>
                <p className="missing-req-field">
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
              */}
              <p className="duplicate-login-info">There is already an account with this user information. If you are sure that this information is yours, Click <Link className="reset-password" to="/reset_email">Here</Link> to reset your password.</p>
            </div>
          </div>
          <div className="register__social-container">
            <div className="social--title">
              <p>Register Quickly With...</p>
            </div>
            <div className="social--btns">
              <ul>
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
                    <button className="newsletter--btn">
                      <FontAwesome name="plus" />
                    </button>
                    <div className="newsletter--msg">
                      <p>Sign up for Newsletter</p>
                    </div>
                  </div>
                </div>
                <div className="action-btns">
                  <button className="action-btns--back sweep-right" onClick={() => browserHistory.goBack()} type="button">
                    <span className="flex-btn-parent">
                      <FontAwesome name="angle-double-left" />
                      {'\u00A0'}Back
                    </span>
                  </button>
                  <p className="required">
                    Required Fields{'\u00A0'}
                    <span className="required">*</span>
                  </p>
                  <button className="action-btns--submit sweep-right" type="submit">
                    Submit
                  </button>
                </div>
                <div className="register-recaptcha">
                  <RecaptchaWidget verifyCb={this.recaptchaVerifyCb} onLoadCb={this.recaptchaOnLoadCb} />
                  {/* TODO: Create an API request to verify this recptcha on form submit. */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
