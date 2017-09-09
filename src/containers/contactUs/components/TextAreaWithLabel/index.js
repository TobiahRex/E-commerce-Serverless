import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { WebflowJs } from './assets/utils';

const TextAreaWithLabel = ({
  label,
  value,
  placeholder,
  handleOnChange,
}) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="message__container">

      <label
        className="message__label"
        htmlFor="message-field"
      >{label}</label>

      <Validation.components.Textarea
        errorClassName="is-invalid-input"
        type="text"
        className="message__input w-input"
        value={value}
        name="message"
        onChange={handleOnChange}
        validations={['required', 'contactUsTextArea']}
        placeholder={placeholder}
      />

    </div>
  );
};

const { string, func } = PropTypes;

TextAreaWithLabel.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  placeholder: string.isRequired,
  handleOnChange: func.isRequired,
};

export default TextAreaWithLabel;
