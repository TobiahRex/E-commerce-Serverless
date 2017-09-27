import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Validation from 'react-validation';

const MdSendButton = ({
  labels,
  toast,
  enable,
  submitMsg,
  apiFetching,
}) => { //eslint-disable-line

  if (toast.type === 'success') {
    return (
      <div className="body__submit--container">
        <button
          className="body__success--button w-button"
          onClick={submitMsg}
          type="button"
          disabled
        >
          {toast.message}&nbsp;
          <FontAwesome name="check" className="hover-dropin" />
        </button>
      </div>
    );
  }

  if (toast.type === 'error') {
    return (
      <div className="body__submit--container">
        <Validation.components.Button
          className="body__submit--button w-button"
          errorClassName=""
          onClick={submitMsg}
        >
          <FontAwesome name="send" />&nbsp;
          {labels.send}
        </Validation.components.Button>
        <div className="body__error">
          <div className="error-hard__title">
            <FontAwesome className="error-icon" name="exclamation-circle" />&nbsp;
            <h2>{labels.errorHdr}</h2>
          </div>
          <p className="body__error--message ">
            {toast.message}
          </p>
        </div>
      </div>
    );
  }

  if (apiFetching) {
    return (
      <div className="body__submit--container">
        <button
          className="body__loading--button w-button"
          type="button"
          disabled
        >
          <FontAwesome name="spinner" pulse />&nbsp;
          {labels.submitting}
        </button>
      </div>
    );
  }

  if (!enable) {
    return (
      <div className="body__submit--container">
        <button
          className="body__submit--button w-button"
          type="button"
          disabled
        >
          <FontAwesome name="send" />&nbsp;
          {labels.send}
        </button>
      </div>
    );
  }
  if (enable) {
    return (
      <div className="body__submit--container">
        <Validation.components.Button
          className="body__submit--button w-button"
          errorClassName=""
          onClick={submitMsg}
        >
          <FontAwesome name="send" />&nbsp;
          {labels.send}
        </Validation.components.Button>
      </div>
    );
  }
};

const {
  func,
  bool,
  shape,
  string,
} = PropTypes;

MdSendButton.propTypes = {
  labels: shape({
    send: string,
    submitting: string,
    success: string,
  }).isRequired,
  toast: shape({
    type: string,
    message: string,
  }).isRequired,
  submitMsg: func.isRequired,
  apiFetching: bool.isRequired,
  enable: bool.isRequired,
};

export default MdSendButton;
