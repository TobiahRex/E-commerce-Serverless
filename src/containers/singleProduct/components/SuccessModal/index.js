import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function SuccessModal({ qty, productTitle, showModal, modalHandler }) {
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
          <p>{`${qty} ${productTitle} `}</p>
          <br />
          <p>
            {
              qty > 1 ?
                <IntlMsg id="product.modal.success.juices-have" />
              : <IntlMsg id="product.modal.success.juice-has" />
            }
            &nbsp;<IntlMsg id="product.modal.success.added-msg" />
          </p>
        </div>
        <div className="dialogue__action-btns">
          <button
            data-parent="success"
            data-tag="view-cart"
            className="action-btn__cart sweep-right"
            onClick={modalHandler}
          >
            <IntlMsg id="product.modal.success.view-cart" />
          </button>

          <button
            data-parent="success"
            data-tag="view-juice"
            className="action-btn__continue sweep-right"
            onClick={modalHandler}
          >
            <IntlMsg id="product.modal.success.continue-shopping" />
          </button>

          <button
            data-parent="success"
            data-tag="view-checkout"
            className="action-btn__checkout sweep-right"
            onClick={modalHandler}
          >
            <IntlMsg id="product.modal.success.express-checkout" />
          </button>
        </div>
      </div>
    </div>
  );
}
const { number, bool, func, string } = PropTypes;
SuccessModal.propTypes = {
  qty: number.isRequired,
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
  productTitle: string.isRequired,
};
export default SuccessModal;
