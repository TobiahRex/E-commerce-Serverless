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

      </div>
    </div>
  );
}
