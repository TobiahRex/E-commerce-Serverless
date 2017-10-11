import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductImg,
  ProductDetails,
  ProductUnitPrice,
  ProductSubtotal,
  ProductQty,
} from '../';

function CartProductRow({
  productObj,
  qtyHandler,
  deleteFromCart,
}) {
  return (
    <div
      key={`shopping-cart-table-row-${productObj._id}`} className="product-list_line-item" data-ix="shopping-list-line-item-slide"
    >
      <div className="line-item__juice-container">
        <ProductImg productObj={productObj} />
        <ProductDetails
          productObj={productObj}
          deleteFromCart={deleteFromCart}
        />
      </div>

      <ProductUnitPrice productObj={productObj} />

      <ProductQty
        productObj={productObj}
        qtyHandler={qtyHandler}
      />

      <ProductSubtotal productObj={productObj} />
    </div>
  );
}
const { objectOf, any, func } = PropTypes;

const propTypes = {
  productObj: objectOf(any).isRequired,
  qtyHandler: func.isRequired,
  deleteFromCart: func.isRequired,
};

CartProductRow.propTypes = propTypes;

export default CartProductRow;
