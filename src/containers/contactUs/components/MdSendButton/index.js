import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const MdSendButton = ({
  submitMsg,
  apiFetching,
}) => {
  WebflowJs(); //eslint-disable-line

  if (apiFetching) {
    return (
      <div className="contact-us__send-copy--container">
        <button
          className="contact-us__submit--button w-button"
          onClick={submitMsg}
          type="button"
        >
          <FontAwesome name="spinner" pulse />
          {'\u00A0'}
          Submitting...
        </button>
      </div>
    );
  }
  return (
    <div className="contact-us__send-copy--container">
      <button
        className="contact-us__submit--button w-button"
        onClick={submitMsg}
        type="button"
      >
        <FontAwesome name="send" />
        {'\u00A0'}
        Send
      </button>
    </div>
  );
};

const { func, bool } = PropTypes;

MdSendButton.propTypes = {
  submitMsg: func.isRequired,
  apiFetching: bool.isRequired,
};

export default MdSendButton;
