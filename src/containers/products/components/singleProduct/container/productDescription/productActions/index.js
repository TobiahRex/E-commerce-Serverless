import React from 'react';
import FontAwesome from 'react-fontawesome';
import Error from './error';
import AddToCartBtn from './addToCartBtn';

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
        <AddToCartBtn />
      </div>
      <Error error={error} />
    </div>
  );
}
const { bool } = React.PropTypes;
ProductActions.propTypes = {
  error: bool.isRequired,
};
export default ProductActions;
