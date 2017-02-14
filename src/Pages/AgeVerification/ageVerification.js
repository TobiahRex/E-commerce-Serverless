import React, { PropTypes } from 'react';

const propTypes = {
  ageVerified: PropTypes.func.isRequired,
};

function AgeVerification({ ageVerified }) {
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
            href="/home"
            onClick={ageVerified}
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

AgeVerification.propTypes = propTypes;
export default AgeVerification;
