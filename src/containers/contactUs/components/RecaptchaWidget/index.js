import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

const { func } = PropTypes;
const propTypes = {
  verifyCb: func.isRequired,
  onLoadCb: func.isRequired,
  assignRefToRecaptcha: func.isRequired,
};

function RecaptchaWidget({ verifyCb, onLoadCb, assignRefToRecaptcha }) {
  return (
    <div className="contact-us__recaptcha--container">
      <Recaptcha
        ref={assignRefToRecaptcha}
        sitekey={process.env.RECAPTCHA_KEY}
        render="explicit"
        verifyCallback={verifyCb}
        onloadCallback={onLoadCb}
      />
    </div>
  );
}
RecaptchaWidget.propTypes = propTypes;
export default RecaptchaWidget;
