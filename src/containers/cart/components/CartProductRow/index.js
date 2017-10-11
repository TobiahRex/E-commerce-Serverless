import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductImg,
  ProductQty,
  ProductDetails,
  ProductSubtotal,
  ProductUnitPrice,
} from '../';

function CartProductRow({
  key,
  productObj,
  qtyHandler,
  deleteFromCart,
}) {
  return (
    <div
      key={key}
      className="product-list_line-item" data-ix="shopping-list-line-item-slide"
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
const {
  any,
  func,
  string,
  objectOf,
} = PropTypes;
CartProductRow.propTypes = {
  key: string.isRequired,
  productObj: objectOf(any).isRequired,
  qtyHandler: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default CartProductRow;

/* <div className="shopping-cart-action-btns-parent">
  <div className="btns__container">
    <button
      data-slug="express_checkout"
      className="shopping-cart-action-btn-checkout sweep-right"
      onClick={routerPush}
    >
      <span className="btn-flex-parent">
        <FontAwesome name="credit-card-alt" />&nbsp;
        <IntlMsg id="cart.action-btn.express-checkout" />
      </span>
    </button>
    <button className="shopping-cart-action-btn-clear sweep-right" onClick={emptyCart}>
      <span className="btn-flex-parent">
        <IntlMsg id="cart.action-btn.clear-cart" />
      </span>
    </button>
  </div>
  </div>
  <div className="shopping-cart-back-parent">
  <button data-slug="/" className="shopping-cart-back sweep-right" onClick={routerPush}>
    <IntlMsg id="cart.action-btn.back-home" />
  </button>
</div> */
