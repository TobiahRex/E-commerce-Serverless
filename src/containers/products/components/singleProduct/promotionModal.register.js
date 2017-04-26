import React from 'react';
import FontAwesome from 'react-fontawesome';

function SingleProductModal({ showModal, loggedIn, modalHandler }) {
  let style;
  if (!loggedIn && showModal) {
    style = {
      display: 'flex',
      opacity: 1,
      height: '100%',
      width: '100%',
    };
  } else {
    style = {
      display: 'none',
      opacity: 0,
      height: 0,
      width: 0,
    };
  }
  return (
    <div style={style} className="add-success-modal">
      <div className="add-success-modal__dialogue">
        <div className="dialogue__exit--container">
          <button
            className="exit-btn"
            onClick={modalHandler}
          >
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
            data-parent="promotion-register"
            data-tag="view-cart"
            className="action-btn__cart sweep-right"
            onClick={modalHandler}
          >View Cart</button>

          <button
            className="action-btn__continue sweep-right"
            onClick={modalHandler}
          >Continue Shopping</button>

          <button
            data-parent="promotion-register"
            data-tag="view-checkout"
            className="action-btn__checkout sweep-right"
            onClick={modalHandler}
          >Express Checkout</button>
        </div>
      </div>
    </div>
  );
}
const { bool, func } = React.PropTypes;
SingleProductModal.propTypes = {
  loggedIn: bool.isRequired,
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
};
export default SingleProductModal;
