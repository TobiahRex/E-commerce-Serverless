import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';

import {
  squarePaymentForm as SqrPaymentForm,
} from './utilities.imports';

function SubmitOrder({ enable, requestCardNonce }) {
  if (enable) {
    return (
      <div className="checkout__purchase-btn" >
        <Validation.components.Button
          className="button"
          errorClassName="asd"
          onClick={requestCardNonce}
        >
          <span className="btn-flex-parent">
            <FontAwesome name="barcode" />
            {'\u00A0'}
            <p>Place Order Now</p>
          </span>
        </Validation.components.Button>
      </div>
    );
  }
  return (
    <div className="checkout__purchase-btn">
      <button className="button" disabled>
        <span className="btn-flex-parent">
          <FontAwesome name="barcode" />
          {'\u00A0'}
          <p>Place Order Now</p>
        </span>
      </button>
    </div>
  );
}
SubmitOrder.propTypes = {
  enable: PropTypes.bool.isRequired,
  requestCardNonce: PropTypes.func.isRequired,
};
const SubmitOrderWithHandlers = withHandlers({
  requestCardNonce: () => (event) => { //eslint-disable-line
    SqrPaymentForm.get().requestCardNonce();
  }
})(SubmitOrder);

export default SubmitOrderWithHandlers;
