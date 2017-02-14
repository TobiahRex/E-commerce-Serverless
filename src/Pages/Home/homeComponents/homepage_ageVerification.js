import React from 'react';
import { browserHistory } from 'react-router';

export default function AgeVerification() {
  return (
    <div className="age-verification">
      <div className="age-verification-modal">
        <img alt="Age Verification Logo" className="age-verification-logo-img" />
        <div className="age-verification-modal-description">
          <p>
            NicJuice2Japan sells products that are intended for use
            by vapers of legal smoking age or older.
          </p>
          <br />
          <br />
          <p>
            By confirming, you are verifying that you are at least
            20 years of age as per Japanese Law.
          </p>
        </div>
        <div className="age-verification-modal-buttons-container">
          <a
            href=""
            onClick={() => browserHistory.push('/home')}
            className="age-verification-modal-buttons-confirm"
          >Confirm</a>
          <a
            href="http://www.google.com"
            className="age-verification-modal-buttons-deny"
          >Deny</a>
        </div>
      </div>
    </div>
  );
}
