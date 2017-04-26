import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  ErrorMsg,
  AddToCartButton,
} from './';

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
      <ErrorMsg error={props.error} />
    </div>
  );
}
const { number, bool, func } = React.PropTypes;
ProductActions.propTypes = {
  quantity: number.isRequired,
  error: bool.isRequired,
  addToCartHandler: func.isRequired,
  qtyHandler: func.isRequired,
};
export default ProductActions;
