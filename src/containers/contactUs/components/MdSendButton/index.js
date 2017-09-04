import React from 'react';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const MdSendButton = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="contact-us__send-copy--container">
      <a className="contact-us__submit--button w-button" href="#">
        <FontAwesome name="send" />
        {'\u00A0'}
        Send
      </a>
    </div>
  );
};


export default MdSendButton;
