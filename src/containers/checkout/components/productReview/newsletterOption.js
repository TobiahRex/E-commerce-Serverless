import React from 'react';
import PropTypes from 'prop-types';

function NewsletterOption({ optionValue, handleNewsletterChange }) {
  return (
    <div className="input__row">
      <div className="input__row--newsletter">
        <input
          type="checkbox"
          onChange={handleNewsletterChange}
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
  handleNewsletterChange: func.isRequired,
};
export default NewsletterOption;
