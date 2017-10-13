import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function CvnModal({
  show,
  toggleModal,
}) {
  let style = {};

  if (show) {
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
    <div style={style} className="checkout__cvn-modal">
      <div className="cvn-modal__dialogue">
        <div className="dialogue__exit--container">

          <button
            data-parent="exit__btn"
            data-modal="showCvnModal"
            className="exit-btn"
            onClick={toggleModal}
          ><FontAwesome name="plus" />
          </button>

        </div>
        <div className="dialogue__cvn-blurb">
          <h1 className="cvn-blurb__title">
            <IntlMsg id="checkout.credit-card.cvn.modal.what-is" />
          </h1>
          <br />
          <p className="cvn-blurb__sub-title">
            {'\"CVN\"'} / {'\"CVV\"'}
            &nbsp;
            <IntlMsg id="checkout.credit-card.cvn.modal.is-a" />
            &nbsp;
            <i>
              <IntlMsg id="checkout.credit-card.cvn.modal.cvn-title" />
            </i>
          </p>
          <br />
          <p className="cvn-blurb__description">
            <IntlMsg id="checkout.credit-card.cvn.modal.description" />
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
            data-modal="showCvnModal"
            className="action-btn__close primary-button sweep-right"
            onClick={toggleModal}
          ><IntlMsg id="checkout.credit-card.cvn.modal.close-btn" /></button>

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
  show: bool.isRequired,
  toggleModal: func.isRequired,
};
export default CvnModalWithLifecycle;
