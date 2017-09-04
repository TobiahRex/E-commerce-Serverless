import React from 'react';

import { WebflowJs } from './assets/utils';

const TextAreaWithLabel = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="message__container">
      <label className="message__label" htmlFor="message-field">
        Message
      </label>
      <textarea
        className="message__input w-input"
        data-name="message field"
        id="message-field"
        maxLength="5000"
        name="message-field"
        placeholder="What would you like to say to us?"
        required="required"
      />
    </div>
  );
};


export default TextAreaWithLabel;
