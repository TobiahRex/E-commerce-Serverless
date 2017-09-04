import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CheckBoxWithLabel = ({
  value,
  handleOnChange,
}) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="contact-us__send-copy--container container--checkbox w-checkbox">

      <input
        className="w-checkbox-input"
        data-name="Checkbox"
        id="checkbox"
        name="ccCopy"
        type="checkbox"
        value={value}
        onChange={() => {
          handleOnChange({
            target: {
              value: !value,
              name: 'ccCopy',
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
