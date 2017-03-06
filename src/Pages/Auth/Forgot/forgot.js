import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Forgot() {
  return (
    <div className="forgot--main">
      <div className="forgot--container">
        <div className="fogot__title">
          <h1>
            Forgot Your Username or Password?
          </h1>
        </div>
        <div className="forgot__status-msg">
          <div className="error--icon">
            <FontAwesome name="plus" className="fa-error-icon" />
          </div>
          {/* <div className="success--icon">
            <FontAwesome name="check-circle" />
          </div> */}
          <div className="error--msg">
            <p className="email-not-found">
              The email address you provided does not appear in our records.
            </p>
            {/* <p className="incorrect-format">
              The email format you provided is incorrect.  Please use a valid email address.
              <br />
              Example: <i>lex.luthor@lexcorp.com</i>
              </p>
              <p className="email-msg-sent">
              {'We\'ve'} successfuly sent you an email with instructions on how to reset your password.
            </p> */}
          </div>
        </div>
        <div className="forgot__input">
          <label htmlFor="input--email">
            Email{'\u00A0'}
            <span className="requried">*</span>
          </label>
          <input type="text" id="input--email" />
        </div>
      </div>
    </div>
  );
}
