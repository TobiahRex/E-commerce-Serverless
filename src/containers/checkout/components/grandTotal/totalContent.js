import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Validation from 'react-validation';
import { Link } from 'react-router';
import Discounts from './discounts';

function TotalContent({
  subTotal,
  taxes,
  discount,
  grandTotal,
  termsAgreement,
  handleOnChange,
}) {
  return (
    <div>
      <div className="title">
        <h3>Total</h3>
      </div>

      <div className="analysis-container">

        <div className="analysis-container--subtotal">
          <p>Subtotal</p>
          <p><FontAwesome name="usd" />{'\u00A0'}{subTotal}</p>
        </div>

        <div className="analysis-container--shipping">
          <p>Shipping & Handling</p>
          <p><i>Free</i></p>
        </div>

        <Discounts discount={discount} />

        <div className="analysis-container--taxes">
          <p>Taxes</p>
          <p><FontAwesome name="usd" />{'\u00A0'}{taxes.toFixed(2)}</p>
        </div>

        <div className="analysis-container--grand-total">
          <h3>Grand Total</h3>
          <h3><FontAwesome name="usd" />{'\u00A0'}{grandTotal.toFixed(2)}</h3>
        </div>

      </div>
      <div className="terms-agreement">
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="checkbox"
          containerClassName="checkbox"
          name="termsAgreement"
          validations={['required']}
          value={termsAgreement}
          onChange={handleOnChange}
        />
        <p>I have read & agree to all <Link to="/terms_and_conditions">
          Terms & Conditions
        </Link></p>
      </div>
    </div>
  );
}

const { number, bool, shape, func, string } = PropTypes;

TotalContent.propTypes = {
  subTotal: number.isRequired,
  taxes: number.isRequired,
  grandTotal: number.isRequired,
  termsAgreement: string.isRequired,
  handleOnChange: func.isRequired,
  discount: shape({
    qty: bool.isRequired,
    qtyAmount: number.isRequired,
    register: bool.isRequired,
    registerAmount: number.isRequired,
  }).isRequired,
};
export default TotalContent;
