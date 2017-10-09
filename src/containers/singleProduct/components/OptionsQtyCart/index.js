import React from 'react';
import PropTypes from 'prop-types';
import {
  QtySection,
  AddToCartSection,
} from '../';

function OptionsQtyCart({
  qty,
  qtyHandler,
  added,
  addToCartHandler,
}) {
  return (
    <div className="product-options__options-qty-cart">
      <QtySection
        quantity={qty}
        qtyHandler={qtyHandler}
      />
      {/* <div className="options-qty-cart__cart-button-container">
        <button
          className="cart-button-container__cart-button"
          data-ix="product-page-cart-button-hover"
          onClick={addToCartHandler}
        >
          <div className="cart-button__cart-text">
            <em className="cart-text__fa-text">
              <FontAwesome name="shopping-cart" />
            </em> &nbsp;&nbsp;
            Add To Cart
          </div>
        </button>
      </div> */}

      <AddToCartSection
        added={added}
        addToCartHandler={addToCartHandler}
      />
    </div>
  );
}
const { number, bool, func } = PropTypes;
OptionsQtyCart.propTypes = {
  qty: number.isRequired,
  qtyHandler: func.isRequired,
  added: bool.isRequired,
  addToCartHandler: func.isRequired,
};
export default OptionsQtyCart;
