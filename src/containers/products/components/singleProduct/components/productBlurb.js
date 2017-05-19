import React from 'react';
import PropTypes from 'prop-types';

function ProductBlurb({ description }) {
  return (
    <div className="desc__blurb">
      <p>{description}</p>
    </div>
  );
}
const { string } = PropTypes;
ProductBlurb.propTypes = {
  description: string.isRequired,
};
export default ProductBlurb;
