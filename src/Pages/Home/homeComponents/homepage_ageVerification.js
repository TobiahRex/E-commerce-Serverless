import React from 'react';

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
            20 years of age per Japanese Law.
          </p>
        </div>
        <div className="age-verification-modal-buttons-container">
          <button className="age-verification-modal-buttons-confirm">Confirm</button>
          <button className="age-verification-modal-buttons-deny">Deny</button>
        </div>
      </div>
    </div>
  );
}
