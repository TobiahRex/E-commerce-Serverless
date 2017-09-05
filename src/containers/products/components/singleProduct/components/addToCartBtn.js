import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function AddToCartButton({ added, addToCart }) {
  return (
    <button
      onClick={addToCart}
      disabled={added}
      className={`btn-container__add-to-cart ${added ? 'added' : 'sweep-right'}`}
    >
      <span className="btn-flex-parent">
        {
          added ?
          [
            <span key="add-to-cart-success" >Success </span>,
          <FontAwesome
            key="add-to-cart-success-icon"
            className="success-cart-icon hover-dropin"
            name="check"
          />,
          ]
          :
          [
          <FontAwesome
            key="add-to-cart-idle"
            className="sp-cart-icon"
            name="shopping-cart"
          />,
            'Add To Cart',
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
