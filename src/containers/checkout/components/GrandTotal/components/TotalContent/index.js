import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Validation from 'react-validation';
import { Link } from 'react-router';
import { intlShape, injectIntl, FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

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
      <div className="logged-in__analysis-container">

        <div className="analysis-container__row">
          <div className="row__blurb">
            <IntlMsg id="checkout.total.subtotal.title" />
          </div>
          <div className="row__price">
            <FontAwesome name="usd" />&nbsp;
            {subTotal}
          </div>
        </div>

        <div className="analysis-container__row">
          <div className="row__blurb">
            <IntlMsg id="checkout.total.subtotal.shipping" />
          </div>
          <div className="price--free row__price">
            <IntlMsg id="checkout.total.subtotal.shipping.free" />
          </div>
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

        <div className="analysis-container__row">
          <div className="row__blurb">
            <IntlMsg id="checkout.total.taxes.title" />
          </div>
          <div className="row__price">
            <FontAwesome name="usd" />&nbsp;
            {taxes.toFixed(2)}
          </div>
        </div>


        <div className="analysis-container__row">
          <div className="blurb__large row__blurb">
            <IntlMsg id="checkout.total.grand-total.title" />
          </div>
          <div className="price__large row__price">
            <FontAwesome name="usd" />&nbsp;
            {grandTotal.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="logged-in__checkbox">
        <div className="checkbox__field">
          <Validation.components.Input
            id="policy"
            type="checkbox"
            containerClassName="field__checkbox-button"
            errorClassName="field__error-label"
            name="termsAgreement"
            value={!!termsAgreement ? termsAgreement : ''}
            validations={['required']}
            onChange={() => handleOnChange({
              target: {
                name: 'termsAgreement',
                value: !termsAgreement,
              },
            })}
          />&nbsp;
        </div>
        <div className="checkbox__blurb">
          <IntlMsg id="checkout.total.grand-total.terms-agreements1" />&nbsp;&nbsp;
          <strong className="blurb__underlined">
            <Link to="/terms_and_conditions">
              <IntlMsg id="checkout.total.grand-total.terms-agreements2" />
            </Link>
          </strong>
        </div>
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
