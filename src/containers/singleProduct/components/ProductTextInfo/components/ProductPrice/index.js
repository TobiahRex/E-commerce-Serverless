import React from 'react';
import PropTypes from 'prop-types';

function ProductPrice({ price }) {
  return (
    <div className="product-info__product-price">
      <div className="product-price__blurb" data-ix="product-page-price-scroll">
        &nbsp;
        $&nbsp;{price}.00
      </div>
    </div>
  );
}
ProductPrice.propTypes = {
  price: PropTypes.string.isRequired,
};
export default ProductPrice;
