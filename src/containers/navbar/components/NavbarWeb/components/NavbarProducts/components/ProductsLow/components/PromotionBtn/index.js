import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function PromotionBtn() {
  return (
    <Link
      to="/login"
      className="bottom-section__register-blurb"
      data-ix="nav-b-juice-register-hover"
    >
      <p className="register-blurb__blurb-text">
        <IntlMsg id="navbar.nav.juices.discount.percentage" />&nbsp;
        <strong className="blurb-text__register-bold-text">
          <IntlMsg id="navbar.nav.juices.discount.reason" />
        </strong>
      </p>
    </Link>
  );
}
PromotionBtn.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default PromotionBtn;
