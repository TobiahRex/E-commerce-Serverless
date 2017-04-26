import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function AddToCartButton() {
  return (
    <button className="btn-container__add-to-cart sweep-right">
      <span className="btn-flex-parent">
        <FontAwesome
          className="sp-cart-icon" name="shopping-cart"
        />
        Add To Cart
      </span>
    </button>
  );
}
