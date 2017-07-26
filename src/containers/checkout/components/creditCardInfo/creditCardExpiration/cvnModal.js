import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function CvnModal({ showModal, modalHandler }) {
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
    <div style={{ display: 'flex' }} className="checkout__cvn-modal">
      <div className="cvn-modal__dialogue">
        <div className="dialogue__exit--container">
          <button
            data-parent="exit__btn"
            data-tag=""
            className="exit-btn"
            onClick={modalHandler}
          >
            <FontAwesome name="plus" />
          </button>
        </div>
        <div className="dialogue__cvn-blurb">
          <h1 className="cvn-blurb__title">
            {'What\'s'} A CVN / CVV?
          </h1>
          <br />
          <p className="cvn-blurb__sub-title">
            {'\"CVN\"'} / {'\"CVV\"'} is a <i>{'\"Card Verification Number\"'}</i>
          </p>
          <br />
          <p className="cvn-blurb__description">
            It is a 3 digit number, usually located on the back of your credit card.
          </p>
          <br />
          <img
            className="cvn-blurb__image-src"
            src="/images/cvn-example.jpg"
            alt="CVN Example"
          />
        </div>
        <div className="dialogue__action-btns">
          <button
            data-parent="promotion-register"
            data-tag=""
            className="action-btn__close primary-button sweep-right"
            onClick={modalHandler}
          >Close</button>
        </div>
      </div>
    </div>
  );
}
const { bool, func } = PropTypes;
CvnModal.propTypes = {
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
};
export default CvnModal;
