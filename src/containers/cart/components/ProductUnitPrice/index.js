import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ProductUnitPrice({ productObj }) {
  return (
    <div className="line-item__price-container">
      <div className="price-container__blurb">
        <FontAwesome name="usd" />&nbsp;
        {Number(productObj.product.price).toFixed(2)}
      </div>
    </div>
  );
}
const { shape, string } = PropTypes;
ProductUnitPrice.propTypes = {
  productObj: shape({
    product: shape({
      price: string,
    }),
  }).isRequired,
};
export default ProductUnitPrice;
