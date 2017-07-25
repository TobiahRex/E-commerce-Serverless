import React from 'react';
import PropTypes from 'prop-types';

function NewsletterOption({ optionValue, handleChange }) {
  return (
    <div className="input__row">
      <div className="input__row--newsletter">
        <input
          type="checkbox"
          onChange={handleChange}
          value={optionValue}
        />
        <p>Sign Up for Newsletter</p>
      </div>
    </div>
  );
}
const { bool, func } = PropTypes;
NewsletterOption.propTypes = {
  optionValue: bool.isRequired,
  handleChange: func.isRequired,
};
export default NewsletterOption;
