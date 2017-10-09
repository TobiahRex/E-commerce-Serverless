import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ImgBanner({ modalHandler }) {
  return (
    // <div className="main__info--image">
    //   <img
    //     src={imageUrl}
    //     className="image__src"
    //     alt="Switch Juice"
    //   />
    //   <button
    //     data-parent="promotion-bulk"
    //     data-tag=""
    //     className="image__promotion sweep-right-red"
    //     onClick={modalHandler}
    //   >
    //     <p>
    //     </p>
    //     <br />
    //     <p>
    //     </p>
    //   </button>
    // </div>

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
const { string, func } = PropTypes;
ImgBanner.propTypes = {
  modalHandler: func.isRequired,
  imageUrl: string.isRequired,
};
export default ImgBanner;
