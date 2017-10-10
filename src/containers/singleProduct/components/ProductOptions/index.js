import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
// import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  ErrorMsg,
  // AddToCartBtn,
  // AddToCartSection,
  // QtySection,
  OptionsHdr,
  OptionsQtyCart,
  OptionsNicotine,
} from '../';

function ProductOptions({
  chosenStrength,
  nicotineStrengths,
  nicotineHandler,
  inStock,
  qtyHandler,
  quantity,
  added,
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
    <div className="product-blurb__product-options" data-ix="product-page-button-section">
      <OptionsHdr />
      <OptionsNicotine
        chosenStrength={chosenStrength}
        nicotineHandler={nicotineHandler}
        nicotineStrengths={nicotineStrengths}
      />
      <OptionsQtyCart
        quantity={quantity}
        qtyHandler={qtyHandler}
        added={added}
        addToCartHandler={addToCartHandler}
      />
      <ErrorMsg
        error={error}
        errorMsg={errorMsg}
      />
    </div>
  );
}

const {
  func,
  bool,
  shape,
  number,
  string,
  arrayOf,
} = PropTypes;

ProductOptions.propTypes = {
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  nicotineStrengths: arrayOf(shape({
    _id: string,
    nicotineStrength: string,
  })).isRequired,

  inStock: bool.isRequired,
  added: bool.isRequired,
  error: bool.isRequired,
  errorMsg: string.isRequired,
  quantity: number.isRequired,
  qtyHandler: func.isRequired,
  addToCartHandler: func.isRequired,
};
export default ProductOptions;

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
