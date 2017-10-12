import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

class ProductReviewComments extends React.PureComponent {

  handleOnChange = e => this.props.handleOnChange(e);

  render() {
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
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
const { string, func } = PropTypes;

ProductReviewComments.propTypes = {
  intl: intlShape.isRequired,
  comments: string,
  handleOnChange: func.isRequired,
};
ProductReviewComments.defaultProps = {
  comments: '',
};
const ProductReviewCommentsWithIntl = injectIntl(ProductReviewComments);
export default ProductReviewCommentsWithIntl;
