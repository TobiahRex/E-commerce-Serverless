import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function MyCartTotal({ cartTotal }) {
  return (
    <div className="floating-cart-container__total-price-card">
      <div className="total-price-card__total-blurb">
        <p className="total-blurb__card-blurb">
          <IntlMsg id="navbar.cart.total-price" />
        </p>
      </div>
      <div className="total-price-card__total-price">
        <p className="total-price__cart-price">
          <FontAwesome name="usd" />&nbsp;
          {cartTotal}.00
        </p>
      </div>
    </div>
  );
}
MyCartTotal.propTypes = {
  cartTotal: PropTypes.number.isRequired,
};
export default MyCartTotal;
