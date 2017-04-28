import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function AddToCartButton({ addToCart }) {
  return (
    <button
      className="btn-container__add-to-cart sweep-right"
      onClick={addToCart}
    >
      <span className="btn-flex-parent">
        <FontAwesome
          className="sp-cart-icon" name="shopping-cart"
        />
        Add To Cart
      </span>
    </button>
  );
}
const { func } = PropTypes;
AddToCartButton.propTypes = {
  addToCart: func.isRequired,
};
export default AddToCartButton;
