import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const MdSendButton = ({ submitMsg }) => {
  WebflowJs(); //eslint-disable-line

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

const { func } = PropTypes;

MdSendButton.propTypes = {
  submitMsg: func.isRequired,
};

export default MdSendButton;
