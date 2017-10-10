import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NewUserDiscountOffer({ routerPush }) {
  return (
    <div>
      <div className="input__row">
        <div className="input__row--guest-warning">
          <p>
            <span className="warning-bold">
              <IntlMsg id="checkout.product-review.new-user.discount.warning.title" />&nbsp;
            </span>
            <IntlMsg id="checkout.product-review.new-user.discount.warning.description" /><span className="required">*&nbsp;</span>
          </p>
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--guest-register">
          <button
            className="guest-register sweep-right"
            data-slug="login"
            onClick={routerPush}
          ><IntlMsg id="checkout.product-review.new-user.discount.register" /></button>
        </div>
        <br />
        <p>
          <span className="required">*&nbsp;</span>
          &nbsp;
          <IntlMsg id="checkout.product-review.new-user.discount.credit-card" />
        </p>
      </div>
    </div>
  );
}
NewUserDiscountOffer.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default NewUserDiscountOffer;
