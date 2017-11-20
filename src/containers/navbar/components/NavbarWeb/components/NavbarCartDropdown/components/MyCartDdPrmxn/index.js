import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function MyCartDdPrmxn({ reRenderNavbar }) {
  return (
    <Link
      className="floating-cart-container__promotion-box w-inline-block"
      to="/login"
      onClick={reRenderNavbar}
    >
      <p className="promotion-box__promotion-blurb">
        <IntlMsg id="navbar.cart.promotion.line1" />
      </p>
      <p className="promotion-box__promotion-blurb">
        <IntlMsg id="navbar.cart.promotion.line2" />
      </p>
    </Link>
  );
}
MyCartDdPrmxn.propTypes = {
  reRenderNavbar: PropTypes.func.isRequired,
};
export default MyCartDdPrmxn;
