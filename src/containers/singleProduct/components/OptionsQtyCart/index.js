import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  ErrorMsg,
  AddToCartBtn,
} from '../';

function ProductActions({
  inStock,
  qtyHandler,
  quantity,
  added,
  addToCartHandler,
  error,
  errorMsg,
}) {
  return (
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
  );
}
const { number, bool, string, func } = PropTypes;
ProductActions.propTypes = {
  inStock: bool.isRequired,
  added: bool.isRequired,
  error: bool.isRequired,
  errorMsg: string.isRequired,
  quantity: number.isRequired,
  qtyHandler: func.isRequired,
  addToCartHandler: func.isRequired,
};
export default ProductActions;
