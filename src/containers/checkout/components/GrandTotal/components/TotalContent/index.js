import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Validation from 'react-validation';
import { Link } from 'react-router';
import { intlShape, injectIntl, FormattedMessage as IntlMsg } from 'react-intl';

import Discounts from '../';

function TotalContent({
  intl,
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
        <h3><IntlMsg id="checkout.total.title" /></h3>
      </div>

      <div className="analysis-container">

        <div className="analysis-container--subtotal">
          <p>
            <IntlMsg id="checkout.total.subtotal.title" />
          </p>
          <p>
            <FontAwesome name="usd" />&nbsp;
            {subTotal}
          </p>
        </div>

        <div className="analysis-container--shipping">
          <p>
            <IntlMsg id="checkout.total.subtotal.shipping" />
          </p>
          <p>
            <i><IntlMsg id="checkout.total.subtotal.shipping.free" /></i>
          </p>
        </div>

        {
          !!discount.qty &&
            <Discounts
              title={intl.messages[
                'checkout.total.subtotal.quantity.title'
              ]}
              amount={discount.qtyAmount}
            />
        }

        {
          !!discount.register &&
            <Discounts
              title={intl.messages[
                'checkout.total.subtotal.register.title'
              ]}
              amount={discount.registerAmount}
            />
        }

        <div className="analysis-container--taxes">
          <p>
            <IntlMsg id="checkout.total.taxes.title" />
          </p>
          <p>
            <FontAwesome name="usd" />&nbsp;
            {taxes.toFixed(2)}
          </p>
        </div>

        <div className="analysis-container--grand-total">
          <h3>
            <IntlMsg id="checkout.total.grand-total.title" />
          </h3>
          <h3>
            <FontAwesome name="usd" />&nbsp;
            {grandTotal.toFixed(2)}
          </h3>
        </div>
      </div>
      <div className="terms-agreement">
        <Validation.components.Input
          id="policy"
          type="checkbox"
          errorClassName="is-invalid-input"
          name="termsAgreement"
          value={!!termsAgreement ? termsAgreement : ''}
          validations={['required']}
          onChange={() => handleOnChange({
            target: {
              name: 'termsAgreement',
              value: !termsAgreement,
            },
          })}
        />
        &nbsp;
        <p>
          <IntlMsg id="checkout.total.grand-total.terms-agreements1" />&nbsp;
          <Link to="/terms_and_conditions">
            <IntlMsg id="checkout.total.grand-total.terms-agreements2" />
          </Link>
        </p>
      </div>
    </div>
  );
}

const { number, bool, shape, func } = PropTypes;

TotalContent.propTypes = {
  intl: intlShape.isRequired,
  subTotal: number.isRequired,
  taxes: number.isRequired,
  grandTotal: number.isRequired,
  termsAgreement: bool.isRequired,
  handleOnChange: func.isRequired,
  discount: shape({
    qty: bool.isRequired,
    qtyAmount: number.isRequired,
    register: bool.isRequired,
    registerAmount: number.isRequired,
  }).isRequired,
};
const TotalContentWithIntl = injectIntl(TotalContent);
export default TotalContentWithIntl;
