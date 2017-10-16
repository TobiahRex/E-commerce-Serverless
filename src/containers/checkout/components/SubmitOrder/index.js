import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import { withHandlers, lifecycle } from 'recompose';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  squarePaymentForm as SqrPaymentForm,
} from '../../assets/utils';
import './assets/styles/style.css';

function SubmitOrder({ enable, requestCardNonce, loading }) {
  if (enable) {
    return (
      <div
        className="main-section__checkout-btn"
        style={{ display: loading ? 'none' : '' }}
      >
        <div className="checkout-btn__container">
          <Validation.components.Button
            className="container__btn"
            errorClassName="asd"
            onClick={requestCardNonce}
          >
            <IntlMsg id="checkout.submit1" />&nbsp;
            <strong className="important-text">
              <FontAwesome name="opencart" />
            </strong>
          </Validation.components.Button>
        </div>
      </div>
    );
  }
  return (
    <div className="main-section__checkout-btn" >
      <div className="checkout-btn__container">
        <button className="container__btn" disabled >
          <IntlMsg id="checkout.submit1" />
          <strong className="important-text">
            <FontAwesome name="opencart" />
          </strong>
        </button>
      </div>
    </div>
  );
}
SubmitOrder.propTypes = {
  enable: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  requestCardNonce: PropTypes.func.isRequired,
};
const SubmitOrderWithHandlers = withHandlers({
  requestCardNonce: () => (event) => { //eslint-disable-line
    SqrPaymentForm.get().requestCardNonce();
  },
})(SubmitOrder);
export default SubmitOrderWithHandlers;
