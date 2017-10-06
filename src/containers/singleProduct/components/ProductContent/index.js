import React from 'react';
import PropTypes from 'prop-types';

function ProductBlurb({ children }) {
  return (
    <div className="product-content__product-blurb">
      {children}
    </div>
  );
}
const { arrayOf, any } = PropTypes;
ProductBlurb.propTypes = {
  children: arrayOf(any).isRequired,
};
export default ProductBlurb;
