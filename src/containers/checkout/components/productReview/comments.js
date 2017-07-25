import React from 'react';
import PropTypes from 'prop-types';

function ProductReviewComments() {
  return (
    <div className="checkout__comments">
      <textarea cols="40" rows="5" value={'Comments'} />
    </div>
  );
}

ProductReviewComments.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
export default ProductReviewComments;
