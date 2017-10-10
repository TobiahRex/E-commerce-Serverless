import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function AddToCartSection({
  added,
  addToCartHandler,
}) {
  return (
    <div className="options-qty-cart__cart-button-container">
      <button
        className={`cart-button-container__cart-button ${added ? ' added' : ' sweep-right'}`}
        data-ix="product-page-cart-button-hover"
        onClick={addToCartHandler}
      >
        <div className="cart-button__cart-text">

          {
            added ? [
              <span key="add-to-cart-success" >
                <IntlMsg id="product.single.actions.add-success" key="product.single.actions.add-success" />
              </span>,
            <span key="space-span">&nbsp;&nbsp;</span>,
            <FontAwesome
              name="check"
              key="add-to-cart-success-icon"
              className="success-cart-icon hover-dropin"
            />,
            ]
            :
            [
            <FontAwesome
              name="shopping-cart"
              key="add-to-cart-idle"
              className="sp-cart-icon"
            />,
            <span key="space-span">&nbsp;&nbsp;</span>,
            <IntlMsg id="product.single.actions.add-to-cart" key="product.single.actions.add-to-cart" />,
            ]
          }
        </div>
      </button>
    </div>
  );
}
const { bool, func } = PropTypes;
AddToCartSection.propTypes = {
  added: bool.isRequired,
  addToCartHandler: func.isRequired,
};
export default AddToCartSection;
