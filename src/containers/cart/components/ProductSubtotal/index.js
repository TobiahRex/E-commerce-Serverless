import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ProductSubtotal({ productObj }) {
  return (
    <div className="line-item__total-container">
      <div className="total-container__blurb">
        <FontAwesome name="usd" />&nbsp;
        {(productObj.qty * Number(productObj.product.price)).toFixed(2)}
      </div>
    </div>
  );
}
const { shape, string, any } = PropTypes;
ProductSubtotal.propTypes = {
  productObj: shape({
    qty: any,
    product: shape({
      price: string,
    }),
  }).isRequired,
};
export default ProductSubtotal;
