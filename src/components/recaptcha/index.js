import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

const { func } = PropTypes;
const propTypes = {
  verifyCb: func.isRequired,
  onLoadCb: func.isRequired,
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
