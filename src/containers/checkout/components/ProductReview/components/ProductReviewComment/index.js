import React from 'react';
import PropTypes from 'prop-types';
import {
  injectIntl,
  intlShape,
  FormattedMessage as IntlMsg,
} from 'react-intl';

function ProductReviewComments({
  intl,
  comments,
  handleOnChange,
  newsletterDecision,
}) {
  return (
    <div className="product-review__comments-box">
      <div className="comments-box__form">
        <textarea
          id="Comments-Area"
          cols="40"
          rows="5"
          className="form__text-area w-input"
          data-name="prComments"
          maxLength="5000"
          name="prComments"
          placeholder={
            intl.messages[
              'checkout.product-review.table.comments.placeholder'
            ]
          }
          value={comments}
          onChange={handleOnChange}
        />
        <div className="form__newsletter w-checkbox">
          <input
            id="Sign-Up-for-Newsletters"
            type="checkbox"
            name="newsletterDecision"
            checked={newsletterDecision}
            className="newsletter__checkbox w-checkbox-input"
            onChange={() => handleOnChange({
              target: {
                name: 'newsletterDecision',
                value: !newsletterDecision,
              },
            })}
          />
          <label
            className="checkbox__label w-form-label" htmlFor="Sign-Up-for-Newsletters"
          >
            <IntlMsg id="checkout.newsletter.sign-up.title" />
          </label>
        </div>
      </div>
    </div>
  );
}
const ProductReviewCommentsWithIntl = injectIntl(ProductReviewComments);

const { string, func, bool } = PropTypes;
ProductReviewComments.propTypes = {
  intl: intlShape.isRequired,
  comments: string,
  newsletterDecision: bool.isRequired,
  handleOnChange: func.isRequired,
};
ProductReviewComments.defaultProps = {
  comments: '',
};

export default ProductReviewCommentsWithIntl;
