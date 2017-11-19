import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function MyCartBox({ qty }) {
  return (
    <Link
      className="right-side__mycart-container w-inline-block"
      data-ix="nav-b-cart-hover"
      to="/cart"
    >
      <div className="mycart-container__mycart-title">
        <div className={`mycart-title__blurb ${IntlLocale}`}>
          <IntlMsg id="navbar.cart.cart-button" />
        </div>
      </div>
      <div className="mycart-container__mycart-qty">
        <div className="mycart-qty__blurb">
          {qty}
        </div>
      </div>
    </Link>
  );
}
MyCartBox.propTypes = {
  qty: PropTypes.number.isRequired,
};
export default MyCartBox;
