import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NewsletterOptIn({ newsletterDecision, handleOnChange }) {
  return (
    <div className="input__row">
      <div className="input__row--newsletter">
        <input
          type="checkbox"
          name="newsletterDecision"
          checked={newsletterDecision}
          onChange={() => handleOnChange({
            target: {
              name: 'newsletterDecision',
              value: !newsletterDecision,
            },
          })}
        />
        <p>
          <IntlMsg id="checkout.newsletter.sign-up.title" />
        </p>
      </div>
    </div>
  );
}
const { bool, func } = PropTypes;
NewsletterOptIn.propTypes = {
  newsletterDecision: bool.isRequired,
  handleOnChange: func.isRequired,
};
export default NewsletterOptIn;
