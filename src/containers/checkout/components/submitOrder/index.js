import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import {
  squarePaymentForm as SqrPaymentForm,
} from './utilities.imports';

function SubmitOrder({ enable }) {
  if (enable) {
    return (
      <div className="checkout__purchase-btn" >
        <Validation.components.Button
          className="button"
          errorClassName="asd"
          onClick={this.handleOnSubmit}
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
};
export default SubmitOrder;
