import React, { PropTypes } from 'react';

const propTypes = {
  avStyle: PropTypes.objectOf(PropTypes.string),
  verifyAge: PropTypes.func.isRequired,
};

function AgeVerification({ verifyAge, avStyle }) {
  return (
    <div className="age-verification" style={avStyle}>
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
            onClick={verifyAge}
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
