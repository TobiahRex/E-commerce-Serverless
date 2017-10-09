import React from 'react';
import PropTypes from 'prop-types';
import {
  QtySection,
  AddToCartSection,
} from '../';

function OptionsQtyCart({
  quantity,
  qtyHandler,
  added,
  addToCartHandler,
}) {
  return (
    <div className="product-options__options-qty-cart">
      <QtySection
        quantity={quantity}
        qtyHandler={qtyHandler}
      />
      <AddToCartSection
        added={added}
        addToCartHandler={addToCartHandler}
      />
    </div>
  );
}
const { number, bool, func } = PropTypes;
OptionsQtyCart.propTypes = {
  quantity: number.isRequired,
  qtyHandler: func.isRequired,
  added: bool.isRequired,
  addToCartHandler: func.isRequired,
};
export default OptionsQtyCart;
