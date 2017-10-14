import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ProductQty({ productObj, qtyHandler }) {
  return (
    <div className="line-item__qty-container">
      <div className="qty-container__box-container">
        <div className="qty-container__qty-text">
          {productObj.qty}
        </div>
        <div className="box-container__qty-buttons">
          <button
            data-id={productObj._id}
            data-tag="qty-plus"
            className="qty-buttons__btn w-button sweep-right"
            onClick={qtyHandler}
          >
            <FontAwesome name="plus" />
          </button>

          <button
            data-id={productObj._id}
            data-tag="qty-minus"
            className="qty-buttons__btn w-button sweep-right"
            onClick={qtyHandler}
          >
            <FontAwesome name="minus" />
          </button>
        </div>
      </div>
    </div>
  );
}
const { shape, string, func, any } = PropTypes;
ProductQty.propTypes = {
  qtyHandler: func.isRequired,
  productObj: shape({
    _id: string,
    qty: any,
    product: shape({
      error: shape({
        message: shape({
          en: string,
          ja: string,
        }),
      }),
    }),
  }).isRequired,
};
export default ProductQty;
