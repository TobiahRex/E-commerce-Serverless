import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function QtySection({
  chosenStrength,
  nicotineStrengths,
  nicotineHandler,
  inStock,
  qtyHandler,
  quantity,
  // added,
  addToCartHandler,
  error,
  errorMsg,
}) {
  if (!inStock) {
    return (
      <ErrorMsg
        error="true"
        errorMsg="Out of stock"
      />
    );
  }

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
            className="button-container__qty-adjust" data-ix="new-interaction"
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
            className="button-container__qty-adjust"
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

/*
<div className="desc__actions">
{
inStock ?
(<div className="actions__btn-container">
<div className="btn-container__qty--container">
<ul className="qty__list">
<li className="list--qty-title">
<p><IntlMsg id="product.single.actions.quantity.title" /></p>
</li>
<li className="list--qty-readout">
<p>{quantity}</p>
</li>
<li className="list--qty-adjust">

<button
data-tag="qty-plus"
className="qty-adjust__plus sweep-right"
onClick={qtyHandler}
><FontAwesome name="plus" /></button>

<button
data-tag="qty-minus"
className="qty-adjust__minus sweep-right"
onClick={qtyHandler}
><FontAwesome name="minus" /></button>

</li>
</ul>
</div>
<AddToCartBtn
added={added}
addToCart={addToCartHandler}
/>
</div>)
:
<ErrorMsg
error="true"
errorMsg="Out of stock"
/>
}
<ErrorMsg
error={error}
errorMsg={errorMsg}
/>
</div>
*/
