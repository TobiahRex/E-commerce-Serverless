import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function RecommendBtn({ routerPush }) {
  return (
    <div className="buttbottomon-section__btn-container">
      <button
        data-slug="contact_us"
        className="btn-container__reccomend-btn w-button sweep-right" onClick={routerPush}
      >
        <IntlMsg id="navbar.nav.juices.recommend" />
      </button>
    </div>
  );
}
RecommendBtn.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default RecommendBtn;
