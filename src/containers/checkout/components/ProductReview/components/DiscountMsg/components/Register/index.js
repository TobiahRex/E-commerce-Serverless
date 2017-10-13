import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function Register({ routerPush }) {
  return (
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
  );
}
Register.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default Register;
