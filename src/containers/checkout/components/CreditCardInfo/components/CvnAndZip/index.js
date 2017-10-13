import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function CvnAndZip({
  toggleModal,
}) {
  return (
    <div className="cvn-zip-section__container">
      {/* <div className="input__row--cvn-number">
        <div className="cvn-number--wrapper">
          <p>CVV
            <span className="required">*</span>
          </p>
          <button
            type="button"
            data-modal="showCvnModal"
            className="button--cvn-modal"
            onClick={toggleModal}
          >
            <IntlMsg id="checkout.credit-card.cvn.whats-this" />
          </button>
        </div>
      <div id="sq-cvv" /> */}
      <div className="cvn-section__container">
        <label className="form__label" htmlFor="CVV">
          CVV
          <em className="label__asterisk">*</em> &nbsp;
          <button
            type="button"
            data-modal="showCvnModal"
            className="button--cvn-modal"
            onClick={toggleModal}
          >
            <IntlMsg id="checkout.credit-card.cvn.whats-this" />
          </button>
        </label>
        <div id="sq-cvv" />
      </div>

      <div className="zip-section__container">
        <label className="form__label" htmlFor="CVV">
          <IntlMsg id="checkout.credit-card.postal-code" />&nbsp;
          <em className="label__asterisk">*</em> &nbsp;
        </label>
        <div id="sq-postal-code" />
      </div>
    </div>
  );
}
const CvnAndZipWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(CvnAndZip);
CvnAndZip.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default CvnAndZipWithLifecycle;
