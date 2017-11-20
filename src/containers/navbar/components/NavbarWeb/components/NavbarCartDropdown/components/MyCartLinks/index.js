/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function MyCartLinks({ reRenderNavbar }) {
  return (
    <div className="floating-cart-container__btn-section">
      <Link
        className="btn-section__checkout-btn w-button sweep-right"
        to="/cart"
        onClick={reRenderNavbar}
      >
        <IntlMsg id="navbar.cart.link.view-cart" />
      </Link>
      <Link
        className={`btn-section__view-cart-btn w-button sweep-right ${IntlLocale}`}
        to="/express_checkout"
        onClick={reRenderNavbar}
      >
        <IntlMsg id="navbar.cart.link.checkout" />
      </Link>
    </div>
  );
}
MyCartLinks.propTypes = {
  reRenderNavbar: PropTypes.func.isRequired,
};
export default MyCartLinks;
