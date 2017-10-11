import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ActionBtns({ routerPush, routerBack }) {
  return (
    <div
      className="shopping-cart__action-buttons" data-ix="shopping-cart-action-btn"
    >
      <div className="action-buttons__container">
        <button
          className="back-btn-container__button sweep-right-red"
          onClick={routerBack}
        >
          <em className="button--fa-text">
            <FontAwesome name="angle-double-left" />&nbsp;
          </em>
          <IntlMsg id="cart.action-btn.back" />
        </button>
      </div>
      <div className="action-buttons__container">
        <button
          data-slug="express_checkout"
          className="container__checkout-btn sweep-right"
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
  routerBack: func.isRequired,
};
export default ActionBtns;
