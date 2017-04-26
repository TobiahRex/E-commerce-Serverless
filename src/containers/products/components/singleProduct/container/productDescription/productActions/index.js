import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

function ProductActions({ error }) {
  return (
    <div className="desc__actions">
      <div className="actions__btn-container">
        <div className="btn-container__qty--container">
          <ul className="qty__list">
            <li className="list--qty-title">
              <p>Quantity</p>
            </li>
            <li className="list--qty-readout">
              <p>4</p>
            </li>
            <li className="list--qty-adjust">
              <button className="qty-adjust__plus sweep-right">
                <FontAwesome name="plus" />
              </button>
              <button className="qty-adjust__minus sweep-right">
                <FontAwesome name="minus" />
              </button>
            </li>
          </ul>
        </div>
        <button className="btn-container__add-to-cart sweep-right">
          <span className="btn-flex-parent">
            <FontAwesome
              className="sp-cart-icon" name="shopping-cart"
            />
            Add To Cart
          </span>
        </button>
      </div>
      <Error />
    </div>
  );
}
const { bool } = React.PropTypes;
ProductActions.propTypes = {
  error: bool.isRequired,
};
export default ProductActions;
