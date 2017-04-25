import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

function SingleProductModal({ showModal, toggleModal }) {
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
            data-tag="view-cart"
            className="action-btn__cart sweep-right"
            onClick={toggleModal}
          >View Cart</button>

          <button
            data-tag="view-juices"
            className="action-btn__continue sweep-right"
            onClick={toggleModal}
          >Continue Shopping</button>

          <button
            data-tag="view-checkout"
            className="action-btn__checkout sweep-right"
            onClick={toggleModal}
          >Express Checkout</button>
        </div>
      </div>
    </div>
  );
}
const { bool, func } = React.PropTypes;
SingleProductModal.propTypes = {
  showModal: bool.isRequired,
  toggleModal: func.isRequired,
};
export default SingleProductModal;
