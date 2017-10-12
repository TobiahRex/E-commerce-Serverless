import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

function ProductReviewComments({
  intl,
  comments,
  handleOnChange,
}) {
  return (
    <div className="checkout__comments">
      <textarea
        name="prComments"
        cols="40"
        rows="5"
        placeholder={
          intl.messages[
            'checkout.product-review.table.comments.placeholder'
          ]
        }
        value={comments}
        onChange={handleOnChange}
      />
    </div>
  );
}
const ProductReviewCommentsWithIntl = injectIntl(ProductReviewComments);

const { string, func } = PropTypes;
ProductReviewComments.propTypes = {
  intl: intlShape.isRequired,
  comments: string,
  handleOnChange: func.isRequired,
};
ProductReviewComments.defaultProps = {
  comments: '',
};

export default ProductReviewCommentsWithIntl;
