import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function AddToCartButton({ added, addToCart }) {
  return (
    <button
      onClick={addToCart}
      disabled={added}
      className={`btn-container__add-to-cart ${added ? 'added' : 'sweep-right'}`}
    >
      <span className="btn-flex-parent">
        {
          added ? [<span key="add-to-cart-success" >
            <IntlMsg id="product.single.actions.add-success" key="product.single.actions.add-success" />
          </span>, <FontAwesome name="check" key="add-to-cart-success-icon" className="success-cart-icon hover-dropin" />]
          :
          [<FontAwesome
            name="shopping-cart"
            key="add-to-cart-idle"
            className="sp-cart-icon" />, <IntlMsg id="product.single.actions.add-to-cart" key="product.single.actions.add-to-cart" />]
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
