import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function QtySection({
  qtyHandler,
  quantity,
}) {
  return (
    <div className="options-qty-cart__qty-container">
      <div className="qty-container__qty-blurb">
        <div className="qty-blurb__blurb-text">
          <IntlMsg id="product.single.actions.quantity.title" />
        </div>
      </div>
      <div className="qty-container__qty-input">
        <div className="qty-input__qty-text">
          {quantity}
        </div>
      </div>
      <div className="qty-container__qty-buttons">
        <div className="qty-buttons__button-container">
          <button
            data-tag="qty-plus"
            className="button-container__qty-adjust sweep-right"
            onClick={qtyHandler}
          >
            <div className="qty-adj__text">
              <FontAwesome name="plus" />
            </div>
          </button>
        </div>
        <div className="qty-buttons__button-container">
          <button
            data-tag="qty-minus"
            data-ix="qty-adjust-hover-2"
            className="button-container__qty-adjust sweep-right"
            onClick={qtyHandler}
          >
            <div className="qty-adj__text">
              <FontAwesome name="minus" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const { func, number } = PropTypes;
QtySection.propTypes = {
  quantity: number.isRequired,
  qtyHandler: func.isRequired,
};
export default QtySection;
