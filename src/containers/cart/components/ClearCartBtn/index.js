import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ClearCartBtn({ emptyCart }) {
  return (
    <div className="shopping-cart__clear-btn-container" data-ix="shopping-cart-clear-btn">
      <button
        className="container__clear-cart w-button"
        onClick={emptyCart}
      >
        <IntlMsg id="cart.action-btn.clear-cart" />
      </button>
    </div>
  );
}
const { func } = PropTypes;
ClearCartBtn.propTypes = {
  emptyCart: func.isRequired,
};
export default ClearCartBtn;
