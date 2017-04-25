import React from 'react';
import FontAwesome from 'react-fontawesome';

function SingleProductModal({ showModal, toggleModal }) {
  let style;
  if (showModal) {
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
    <div style={style} className="add-success-modal" >
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
