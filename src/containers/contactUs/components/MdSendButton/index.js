
import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Validation from 'react-validation';
import { WebflowJs } from './assets/utils';

const MdSendButton = ({
  toast,
  enable,
  submitMsg,
  apiFetching,
}) => { //eslint-disable-line
  WebflowJs();

  if (toast.type === 'success') {
    return (
      <div className="contact-us__send-copy--container">
        <button
          className="contact-us__success--button w-button"
          onClick={submitMsg}
          type="button"
          disabled
        >
          {toast.message}
          {'\u00A0'}
          <FontAwesome name="check" className="hover-dropin" />
        </button>
      </div>
    );
  }

  if (toast.type === 'error') {
    return (
      <div className="contact-us__send-copy--container">
        <Validation.components.Button
          className="contact-us__submit--button w-button"
          errorClassName=""
          onClick={submitMsg}
        >
          <FontAwesome name="send" />
          {'\u00A0'}
          Send
        </Validation.components.Button>
        <div className="contact-us__error">
          <div className="error-hard__title">
            <FontAwesome className="error-icon" name="" />
            {'\u00A0'}
            <h2>Error!</h2>
          </div>
          <p className="contact-us__error--message ">
            {/* {toast.message} */}
            The Recaptcha confirmation was not approved.  Please try again.
          </p>
        </div>
      </div>
    );
  }

  if (apiFetching) {
    return (
      <div className="contact-us__send-copy--container">
        <button
          className="contact-us__loading--button w-button"
          onClick={submitMsg}
          type="button"
          disabled
        >
          <FontAwesome name="spinner" pulse />
          {'\u00A0'}
          Submitting...
        </button>
      </div>
    );
  }
  if (enable) {
    return (
      <div className="contact-us__send-copy--container">
        <Validation.components.Button
          className="contact-us__submit--button w-button"
          errorClassName=""
          onClick={submitMsg}
        >
          <FontAwesome name="send" />
          {'\u00A0'}
          Send
        </Validation.components.Button>
      </div>
    );
  }
};

const { func, bool, shape, string } = PropTypes;

MdSendButton.propTypes = {
  toast: shape({
    type: string,
    message: string,
  }).isRequired,
  submitMsg: func.isRequired,
  apiFetching: bool.isRequired,
  enable: bool.isRequired,
};

export default MdSendButton;
