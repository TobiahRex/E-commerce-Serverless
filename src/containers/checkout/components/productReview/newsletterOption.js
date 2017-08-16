import React from 'react';
import PropTypes from 'prop-types';

function NewsletterOption({ newsletterDecision, handleOnChange }) {
  return (
    <div className="input__row">
      <div className="input__row--newsletter">
        <input
          type="checkbox"
          name="newsletterDecision"
          value={newsletterDecision}
          onChange={() => handleOnChange({
            target: {
              name: 'newsletterDecision', value: !newsletterDecision,
            },
          })}
        />
        <p>Sign Up for Newsletter</p>
      </div>
    </div>
  );
}
const { string, func } = PropTypes;
NewsletterOption.propTypes = {
  newsletterDecision: string.isRequired,
  handleOnChange: func.isRequired,
};
export default NewsletterOption;
