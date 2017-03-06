import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function Forgot() {
  return (
    <div className="forgot--main">
      <div className="forgot--container">
        <div className="forgot__title">
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
              The email address you provided does not appear in our records. Please try again.
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
            <span className="required">*</span>
          </label>
          <input type="text" id="input--email" />
        </div>
        <div className="forgot__submit">
          <button className="submit--btn sweep-right">Submit</button>
        </div>
      </div>
      <div className="forgot--action-btns">
        <button className="action-btns--back sweep-right">
          <span className="flex-btn-parent">
            <FontAwesome name="angle-double-left" />
            {'\u00A0'}Back
          </span>
        </button>
        <button
          className="action-btns--register sweep-right"
          onClick={() => browserHistory.push('/register')}
        >Register</button>
      </div>
    </div>
  );
}
