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
    const { hard, soft, message } = errors;
    const showError = !!hard || !!soft || !!message.length;

    const hardError = (
      <p>
        <FontAwesome className="error-icon" name="times-circle" />
        <span className="error-title">ERROR: </span>
        {message}
      </p>
    );

    const softError = (
      <p>
        <FontAwesome className="caution-icon" name="exclamation-triangle" />
        <span className="alert-title">Caution: </span>
        {message}
      </p>
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
        <FontAwesome className="success-icon" name="check-circle" />
        <p>{'You\'ve'} successfully submitted your order!</p>
      </div>
    );

    if (showError && hard) return hardError;
    if (showError && soft) return softError;
    if (!showError && loading) return loadingMsg;
    if (!showError && success) return successMsg;
    return '';
  },
})(NetworkStatus);

export default NetworkStatusWithHandlers;
