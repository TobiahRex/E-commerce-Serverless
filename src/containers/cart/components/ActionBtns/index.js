import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ActionBtns({ routerPush }) {
  return (
    <div
      className="shopping-cart__action-buttons" data-ix="shopping-cart-action-btn"
    >
      <div className="action-buttons__container">
        <button
          data-slug="/"
          className="back-btn-container__button w-button"
          onClick={routerPush}
        >
          <em className="button--fa-text">
            <FontAwesome name="angle-double-left" />&nbsp;
          </em>
          <IntlMsg id="cart.action-btn.back-home" />
        </button>
      </div>
      <div className="action-buttons__container">
        <button
          data-slug="express_checkout"
          className="container__checkout-btn w-button"
          onClick={routerPush}
        >
          <em className="checkout-btn__fa-text">
            <FontAwesome name="credit-card-alt" />&nbsp;
          </em>
          <IntlMsg id="cart.action-btn.express-checkout" />
        </button>
      </div>
    </div>
  );
}
const { func } = PropTypes;
ActionBtns.propTypes = {
  routerPush: func.isRequired,
};
export default ActionBtns;
