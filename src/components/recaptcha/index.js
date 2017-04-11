import React, { PropTypes } from 'react';
import Recaptcha from 'react-recaptcha';

const propTypes = {
  verifyCb: PropTypes.func.isRequired,
  onLoadCb: PropTypes.func.isRequired,
};

function RecaptchaWidget({ verifyCb, onLoadCb }) {
  return (
    <Recaptcha
      sitekey={process.env.RECAPTCHA_KEY}
      render="explicit"
      verifyCallback={verifyCb}
      onloadCallback={onLoadCb}
    />
  );
}
RecaptchaWidget.propTypes = propTypes;
export default RecaptchaWidget;
