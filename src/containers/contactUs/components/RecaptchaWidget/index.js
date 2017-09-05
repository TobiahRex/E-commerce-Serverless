import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

const { func } = PropTypes;
const propTypes = {
  verifyCb: func.isRequired,
  onLoadCb: func.isRequired,
  expiredCb: func.isRequired,
  assignRefToRecaptcha: func.isRequired,
};

function RecaptchaWidget({ verifyCb, onLoadCb, expiredCb, assignRefToRecaptcha }) {
  return (
    <div className="contact-us__recaptcha--container">
      <Recaptcha
        ref={assignRefToRecaptcha}
        sitekey={process.env.RECAPTCHA_KEY}
        render="explicit"
        verifyCallback={verifyCb}
        onloadCallback={onLoadCb}
        expiredCb={expiredCb}
      />
    </div>
  );
}
RecaptchaWidget.propTypes = propTypes;
export default RecaptchaWidget;
