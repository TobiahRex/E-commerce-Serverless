import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NetworkStatus({ routerPush, renderHelper }) {
  return (
    <div>
      {renderHelper()}
      <div className="checkout__back-home-btn ">
        <button
          className="sweep-right"
          data-slug="/"
          type="button"
          onClick={routerPush}
        >
          <FontAwesome name="angle-double-left" />&nbsp;
          <IntlMsg id="checkout.action-btn.back-to-home" />
        </button>
      </div>
    </div>
  );
}

const NetworkStatusWithHandlers = withHandlers({
  renderHelper: ({ errors, loading, success, toast }) => () => {
    let { message, hard } = errors;
    console.log('%cmessage', 'background:red;', message);
    // message = message[IntlLocale];
    const { soft } = errors;
    const showError = !!hard || !!soft || !!message.length || !!toast.message;

    if (!!toast.message) {
      message = toast.message;
    }
    // else if (!!toast.message[IntlLocale]) {
    //   message = toast.message[IntlLocale];
    // }

    const hardError = (
      <div className="checkout__error-hard">
        <div className="error-hard__title">
          <FontAwesome className="error-icon" name="times-circle" />
          <h2>
            <IntlMsg id="checkout.error.title" />
          </h2>
        </div>
        <br />
        <p>{message}</p>
      </div>
    );

    const softError = (
      <div className="checkout__error-soft">
        <div className="error-soft__title">
          <FontAwesome className="error-icon" name="exclamation-triangle" />
          <h2><IntlMsg id="checkout.error.title" /></h2>
        </div>
        <br />
        <p>{message}</p>
      </div>
    );

    const warningMsg = (
      <div className="checkout__error-soft">
        <div className="error-soft__title">
          <FontAwesome className="error-icon" name="exclamation-triangle" />
          <h2><IntlMsg id="checkout.warning.title" /></h2>
        </div>
        <br />
        <p>{message}</p>
      </div>
    );

    const loadingMsg = (
      <div className="checkout__loading-icon">
        <FontAwesome className="spinner-icon" name="spinner" pulse />
        <p><IntlMsg id="checkout.loading.title" /></p>
        <p><IntlMsg id="checkout.loading.subtitle" /></p>
      </div>
    );

    const successMsg = (
      <div className="checkout__successful-purchase">
        <div className="successful-purchase__title">
          <FontAwesome className="success-icon" name="check-circle" />&nbps;
          <h2><IntlMsg id="checkout.submit.success.title" /></h2>
        </div>
        <br />
        <p>
          <IntlMsg id="checkout.submit.success.message" />&nbsp;
          <FontAwesome className="success-spinner-icon" name="spinner" pulse />
        </p>
      </div>
    );

    if (hard) return hardError;
    if (soft) return softError;
    if (toast.type === 'error') return hardError;
    if (toast.type === 'warning') return warningMsg;
    if (toast.type === 'success') return successMsg;
    if (!showError && loading) return loadingMsg;
    if (!showError && success) return successMsg;
    return '';
  },
})(NetworkStatus);
const { shape, string, bool, func } = PropTypes;
NetworkStatus.propTypes = {
  toast: shape({
    type: string,
    message: shape({
      en: string,
      ja: string,
    }),
  }).isRequired,
  errors: shape({
    hard: bool,
    soft: bool,
    messages: string,
  }).isRequired,
  loading: bool,
  routerPush: func.isRequired,
  renderHelper: func.isRequired,
};
NetworkStatus.defaultProps = {
  loading: false,
};
export default NetworkStatusWithHandlers;
