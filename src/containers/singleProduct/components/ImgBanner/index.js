import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ImgBanner({ modalHandler }) {
  return (
    <button
      data-parent="promotion-bulk"
      data-tag=""
      onClick={modalHandler}
      className="content-img__img-banner sweep-right-red"
      data-ix="product-page-4-bottles-banner"
    >
      <div className="img-banner__banner-text" data-ix="nicotine-hover">
        <IntlMsg id="product.single.image.promotion1" />
        <br />
        <IntlMsg id="product.single.image.promotion2" />
      </div>
    </button>
  );
}
ImgBanner.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};
export default ImgBanner;
