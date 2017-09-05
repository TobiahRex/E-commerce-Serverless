import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { WebflowJs } from './assets/utils';

const CheckBoxWithLabel = ({
  value,
  handleOnChange,
}) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="contact-us__send-copy--container container--checkbox w-checkbox">

      <Validation.components.Input
        errorClassName="is-invalid-input"
        data-name="Checkbox"
        id="checkbox"
        type="checkbox"
        className="w-checkbox-input"
        value={!!value ? 'truthy' : ''}
        name="ccUser"
        onChange={() => {
          handleOnChange({
            target: {
              name: 'ccUser',
              value: !value,
            },
          });
        }}
        validations={['required']}
      />
      <input
        className="w-checkbox-input"
        data-name="Checkbox"
        id="checkbox"
        name="ccUser"
        type="checkbox"
        checked={!!value}
        onChange={() => {
          handleOnChange({
            target: {
              value: !value,
              name: 'ccUser',
            },
          });
        }}
      />

      <label
        className="contact-us__send-copy w-form-label"
        htmlFor="checkbox"
      >Send a copy of this email to yourself</label>

    </div>
  );
};
const { bool, func } = PropTypes;

CheckBoxWithLabel.propTypes = {
  value: bool.isRequired,
  handleOnChange: func.isRequired,
};

export default CheckBoxWithLabel;
