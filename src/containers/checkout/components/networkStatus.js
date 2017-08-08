import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';

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
          Back To Homepage
        </button>
      </div>
    </div>
  );
}
const { shape, string, bool, func } = PropTypes;
NetworkStatus.propTypes = {
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

const NetworkStatusWithHandlers = withHandlers({
  renderHelper: ({ errors, loading, success }) => () => {
    errors = { hard: true, soft: false, message: 'That card was declined.  Please use a different card.' };
    const { hard, soft, message } = errors;
    const showError = !!hard || !!soft || !!message.length;

    const hardError = (
      <div clasName="checkout__error-hard">
        <div className="error-hard__title">
          <FontAwesome className="error-icon" name="times-circle" />
          <h2>Error!</h2>
        </div>
        <br />
        <p>{message}</p>
      </div>
    );

    const softError = (
      <div className="checkout__error--soft">
        <FontAwesome className="caution-icon" name="exclamation-triangle" />
        <span className="alert-title">Caution: </span>
        {message}
      </div>
    );

    const loadingMsg = (
      <div className="checkout__loading-icon">
        <FontAwesome className="spinner-icon" name="spinner" spin />
        <p>One moment please</p>
        <p>while we process your order...</p>
      </div>
    );

    const successMsg = (
      <div className="checkout__successful-purchase">
        <div className="successful-purchase__title">
          <FontAwesome className="success-icon" name="check-circle" />
          <h2>Success!</h2>
        </div>
        <br />
        <p>Please wait one moment while we generate your Invoice...{'\u0020'}<FontAwesome className="success-spinner-icon" name="spinner" spin /></p>
      </div>
    );

    if (hard) return hardError;
    if (soft) return softError;
    if (!showError && loading) return loadingMsg;
    if (!showError && success) return successMsg;
    return '';
  },
})(NetworkStatus);

export default NetworkStatusWithHandlers;
