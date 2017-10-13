import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NewUserDiscountOffer({ routerPush }) {
  return (
    <div className="product-review__logged-out">
      <div className="logged-out__warning">
        <p className="warning__blurb">
          <strong className="blurb__red-text">
            <IntlMsg id="checkout.product-review.new-user.discount.warning.title" />&nbsp;&nbsp;
          </strong>
          <IntlMsg id="checkout.product-review.new-user.discount.warning.description" />&nbsp;
          <strong className="blurb__red-text">*</strong>&nbsp;
        </p>
      </div>
      <div className="logged-out__register">
        <button
          className="register__button w-inline-block"
          data-slug="login"
          onClick={routerPush}
        >
          <div className="button__blurb">
            <IntlMsg id="checkout.product-review.new-user.discount.register" />
          </div>
        </button>
      </div>
      <div className="logged-out__disclaimer">
        <div className="disclaimer__blurb">
          <em className="blurb__red-text--alt">*</em>&nbsp;
          <IntlMsg id="checkout.product-review.new-user.discount.credit-card" />
        </div>
      </div>
    </div>
  );
}
NewUserDiscountOffer.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default NewUserDiscountOffer;
