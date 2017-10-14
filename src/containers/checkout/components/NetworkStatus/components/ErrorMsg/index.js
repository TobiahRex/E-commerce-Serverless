import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ErrorMsg({ message }) {
  return (
    <div className="main-section__error">
      <div className="error__hdr-section">
        <div className="hdr-section__hdr-container">
          <h2 className="hdr-container__error-blurb">
            <em className="error-blurb__fa-text">
              <FontAwesome className="error-icon" name="times-circle" />&nbsp;
            </em>
            <IntlMsg id="checkout.error.title" />
          </h2>
        </div>
      </div>
      <div className="error__blurb-section">
        <div className="blurb-section__blurb">{message}</div>
      </div>
    </div>
  );
}
ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ErrorMsg;
