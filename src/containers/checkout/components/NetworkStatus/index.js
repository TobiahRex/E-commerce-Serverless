import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';
import {
  ErrorMsg,
  WarningMsg,
  PleaseWait,
  SuccessMsg,
  BackBtn,
} from './components';

function NetworkStatus({ routerBack, renderHelper }) {
  return (
    <div>
      {renderHelper()}
      <BackBtn routerBack={routerBack} />
    </div>
  );
}

const NetworkStatusWithHandlers = withHandlers({
  renderHelper: ({ errors, loading, success, toast }) => () => {
    let { message } = errors;
    const { hard } = errors;
    // message = message[IntlLocale];
    const { soft } = errors;
    const showError = !!hard || !!soft || !!message.length || !!toast.message;

    if (!!toast.message) {
      message = toast.message;
    }
    // else if (!!toast.message[IntlLocale]) {
    //   message = toast.message[IntlLocale];
    // }

    if (hard) return <ErrorMsg message={message} />;
    if (soft) return <WarningMsg message={message} />;
    if (toast.type === 'error') return <ErrorMsg message={message} />;
    if (toast.type === 'warning') return <WarningMsg message={message} />;
    if (toast.type === 'success') return <SuccessMsg />;
    if (!showError && loading) return <PleaseWait />;
    if (!showError && success) return <SuccessMsg />;
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
  routerBack: func.isRequired,
  renderHelper: func.isRequired,
};
NetworkStatus.defaultProps = {
  loading: false,
};
export default NetworkStatusWithHandlers;
