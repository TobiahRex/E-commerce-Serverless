import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ProductsLow({ routerPush }) {
  return (
    <div className="floating-juice-container__bottom-section">
      <div className="buttbottomon-section__btn-container">
        <button
          data-slug="contact_us"
          className="btn-container__reccomend-btn w-button sweep-right" onClick={routerPush}
        >
          <IntlMsg id="navbar.nav.juices.recommend" />
        </button>
      </div>
      <div className="bottom-section__register-blurb" data-ix="nav-b-juice-register-hover">
        <p className="register-blurb__blurb-text">
          <IntlMsg id="navbar.nav.juices.discount.percentage" /> &nbps;
          <strong className="blurb-text__register-bold-text">
            <IntlMsg id="navbar.nav.juices.discount.reason" />
          </strong>
        </p>
      </div>
    </div>
  );
}
ProductsLow.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default ProductsLow;
