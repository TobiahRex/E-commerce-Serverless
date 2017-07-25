import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductReviewComments extends PureComponent() {
  constructor(props) {
    super(props);
    this.state {
      comment: '',
    };
  }
  render () {
    return (
      <div className="checkout__comments">
        <textarea
          cols="40"
          rows="5"
          value={'Comments'}
        />
      </div>
    );
  }
}

ProductReviewComments.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  productReviewComment: string
};
ProductReviewComments.defaultProps = {
  ProductReviewComments: '',
}
export default ProductReviewComments;
