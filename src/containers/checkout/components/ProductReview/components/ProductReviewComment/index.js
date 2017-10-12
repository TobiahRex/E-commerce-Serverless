import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { withHandlers } from 'recompose';

function ProductReviewComments({ handleOnChange }) {
  return (
    <div className="checkout__comments">
      <textarea
        name="prComments"
        cols="40"
        rows="5"
        placeholder={
          this.props.intl.messages[
            'checkout.product-review.table.comments.placeholder'
          ]
        }
        value={this.props.comments}
        onChange={handleOnChange}
      />
    </div>
  );
}
const ProductReviewCommentsWithIntl = injectIntl(ProductReviewComments);
const ProductReviewCommentsWithIntlAndHandlers = withHandlers({
  handleOnChange: e => this.props.handleOnChange(e),
})(ProductReviewCommentsWithIntl);
const { string, func } = PropTypes;
ProductReviewComments.propTypes = {
  intl: intlShape.isRequired,
  comments: string,
  handleOnChange: func.isRequired,
};
ProductReviewComments.defaultProps = {
  comments: '',
};

export default ProductReviewCommentsWithIntlAndHandlers;
