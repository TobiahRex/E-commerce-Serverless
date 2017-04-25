import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

function SingleProductModal({ showModal }) {
  return (
    <div
      style={{ display: showModal ? 'block' : 'none' }}
      className="add-success-modal"
    >
      <div className="add-success-modal__dialogue">
        <div className="dialogue__exit--container">
          <button className="exit-btn">
            <FontAwesome name="plus" />
          </button>
        </div>
        <div className="dialogue__product-msg">
          <p>{'<Product Title>'}</p>
          <br />
          <p>has been successfully added to your cart.</p>
        </div>
        <div className="dialogue__action-btns">
          <button
            className="action-btn__cart sweep-right"
            onClick={() => browserHistory.push('/cart')}
          >
            View Cart
          </button>

          <button
            className="action-btn__continue sweep-right"
            onClick={() => browserHistory.push('/juices')}
          >
            Continue Shopping
          </button>

          <button
            className="action-btn__checkout sweep-right"
            onClick={() => browserHistory.push('/express_checkout')}
          >
            Express Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
const { bool } = React.PropTypes;
SingleProductModal.propTypes = {
  showModal: bool.isRequired,
};
export default SingleProductModal;
