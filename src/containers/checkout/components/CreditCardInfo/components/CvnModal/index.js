import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function CvnModal({
  toggleModal,
  showModal,
}) {
  let style = {};
  if (showModal) {
    style = {
      display: 'flex',
      opacity: 1,
      height: '100%',
      width: '100%',
    };
  }
  else {
    style = {
      display: 'none',
      opacity: 0,
      height: 0,
      width: 0,
    };
  }

  return (
    <div
      style={style}
      className="express-checkout__cvv-modal"
      data-ix="express-checkout-modal-close"
    >
      <div className="cvv-modal__dialogue">
        <div className="dialogue__cvn-content">
          <div className="cvn-content__hdr-container">
            <h2 className="cvn-modal__header">
              <IntlMsg id="checkout.credit-card.cvn.modal.what-is" />
            </h2>
          </div>
          <div className="cvn-content__sub-hdr">
            <div className="sub-hdr__blurb">
              {'\"CVN\"'} / {'\"CVV\"'}&nbsp;
              <IntlMsg id="checkout.credit-card.cvn.modal.is-a" />&nbsp;
              <em className="blurb__italic">
                <IntlMsg id="checkout.credit-card.cvn.modal.cvn-title" />
              </em>
            </div>
            <div className="sub-hdr__blurb">
              <IntlMsg id="checkout.credit-card.cvn.modal.description" />
            </div>
          </div>
          <div className="cvn-content__img">
            <img
              className="img__img"
              src="/images/cvn-example.jpg"
              alt="CVN Example"
            />
          </div>
        </div>
        <div className="dialogue__close-btn">
          <button
            data-parent="promotion-register"
            data-modal="showCvnModal"
            className="close-btn__btn w-button"
            data-ix="express-checkout-modal-close"
            onClick={toggleModal}
          >
            <IntlMsg id="checkout.credit-card.cvn.modal.close-btn" />
          </button>
        </div>
        <div className="dialogue__exit-container">
          <button
            data-parent="exit__btn"
            data-modal="showCvnModal"
            className="exit-container__btn w-button"
            data-ix="express-checkout-modal-close"
            onClick={toggleModal}
          >
            <FontAwesome name="plus" className="express-checkout__cvv-modal--close-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
const CvnModalWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(CvnModal);

const { bool, func } = PropTypes;
CvnModal.propTypes = {
  toggleModal: func.isRequired,
  showModal: bool.isRequired,
};
export default CvnModalWithLifecycle;
