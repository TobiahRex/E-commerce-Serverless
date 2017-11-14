import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  RecommendBtn,
} from './components';

function ProductsLow({ routerPush }) {
  return (
    <div className="floating-juice-container__bottom-section">
      <RecommendBtn routerPush={routerPush} />
      <div className="bottom-section__register-blurb" data-ix="nav-b-juice-register-hover">
        <p className="register-blurb__blurb-text">
          <IntlMsg id="navbar.nav.juices.discount.percentage" /> &nbsp;
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
