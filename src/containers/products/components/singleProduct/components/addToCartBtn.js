import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function AddToCartButton({ added, addToCart }) {
  return (
    <button
      className="btn-container__add-to-cart sweep-right"
      onClick={addToCart}
    >
      <span
        className={`btn-flex-parent
          ${added ? 'add-to-cart__btn--success' : ''}`}
      >
        {
          added ?
          [
            <span>Success </span>,
            <FontAwesome
              className="success-cart-icon"
              name="check"
            />,
          ]
          :
          [
            <FontAwesome
              className="sp-cart-icon hover-dropin"
              name="shopping-cart"
            />,
            <span>{'\u00A0'} Add To Cart</span>,
          ]
        }
      </span>
    </button>
  );
}
const { bool, func } = PropTypes;
AddToCartButton.propTypes = {
  added: bool.isRequired,
  addToCart: func.isRequired,
};
export default AddToCartButton;
