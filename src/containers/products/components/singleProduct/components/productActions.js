import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  ErrorMsg,
  AddToCartButton,
} from '../container/imports';

function ProductActions(props) {
  return (
    <div className="desc__actions">
      <div className="actions__btn-container">
        <div className="btn-container__qty--container">
          <ul className="qty__list">
            <li className="list--qty-title">
              <p>Quantity</p>
            </li>
            <li className="list--qty-readout">
              <p>{props.quantity}</p>
            </li>
            <li className="list--qty-adjust">

              <button
                data-tag="qty-plus"
                className="qty-adjust__plus sweep-right"
                onClick={props.qtyHandler}
              ><FontAwesome name="plus" /></button>

              <button
                data-tag="qty-minus"
                className="qty-adjust__minus sweep-right"
                onClick={props.qtyHandler}
              ><FontAwesome name="minus" /></button>

            </li>
          </ul>
        </div>
        <AddToCartButton addToCart={props.addToCartHandler} />
      </div>
      <ErrorMsg
        error={props.error}
        errorMsg={props.errorMsg}
      />
    </div>
  );
}
const { number, bool, string, func } = PropTypes;
ProductActions.propTypes = {
  error: bool.isRequired,
  errorMsg: string.isRequired,
  quantity: number.isRequired,
  qtyHandler: func.isRequired,
  addToCartHandler: func.isRequired,
};
export default ProductActions;
