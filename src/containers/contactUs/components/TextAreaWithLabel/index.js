import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';
import Validation from 'react-validation';

const TextAreaWithLabel = ({
  value,
  handleOnChange,
}) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="message__container">

      <label
        className="message__label"
        htmlFor="message-field"
      >Message</label>

      <Validation.components.textarea
        errorClassName="is-invalid-input"
        type="text"
        className="message__input w-input"
        value={value}
        name="message"
        onChange={handleOnChange}
        validations={['required', 'contactUsTextArea']}
        placeholder="What would you like to say to us?"
      />
      {/* <textarea
        className="message__input w-input"
        data-name="message field"
        id="message-field"
        maxLength="5000"
        name="message"
        placeholder="What would you like to say to us?"
        value={value}
        onChange={handleOnChange}
      /> */}

    </div>
  );
};

const { string, func } = PropTypes;

TextAreaWithLabel.propTypes = {
  value: string.isRequired,
  handleOnChange: func.isRequired,
};

export default TextAreaWithLabel;
