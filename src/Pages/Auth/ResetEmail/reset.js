import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function Forgot() {
  return (
    <div className="reset--main">
      <div className="reset--container">
        <div className="reset__verify">
          <div className="verify" style={{ display: 'none' }}>
            <div className="verify__top">
              <div className="verify__icon">
                <FontAwesome name="question-circle" />
              </div>
              <div className="verify__title">
                <h1>Do you want to reset your password?</h1>
                <h4>Please confirm if you want to reset your password or, press “Cancel” to return to the homepage.</h4>
              </div>
            </div>
            <div className="verify__action-btns">
              <button className="yes-btn" onClick={() => console.info('Reset Password!')}>
                Yes, Reset my password
              </button>
              <button className="cancel-btn" onClick={() => browserHistory.push('/')}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="reset__success">
          <div className="success">
            <div className="success__top">
              <div className="success__icon">
                <FontAwesome name="exclamation-circle" />
              </div>
              <div className="success__title">
                <h1>Ok, {'we\'ve'} sent you an email!</h1>
                <h4>Please follow the instructions in the email to reset your password.</h4>
              </div>
            </div>
            <div className="success__btn">
              <button className="go-back-home" onClick={() => browserHistory.push('/')}>
                <span className="flex-btn-parent">
                  <FontAwesome name="double-angled-left" />
                  Back To Homepage
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
