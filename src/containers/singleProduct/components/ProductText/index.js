import React from 'react';
import PropTypes from 'prop-types';

function ProductText({ children }) {
  return (
    <div className="product-blurb__product-text">
      {children}
    </div>
  );
}
const { arrayOf, any } = PropTypes;
ProductText.propTypes = {
  children: arrayOf(any).isRequired,
};
export default ProductText;
