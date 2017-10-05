import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function ProductRegisterPromotion({ loggedIn, modalHandler }) {
  let style;

  if (!loggedIn) style = { display: 'flex' };
  else style = { display: 'none' };

  return (
    <div
      className="product-blurb__product-banner"
      data-ix="product-page-member-banner"
      style={style}
    >
      <button
        className="product-banner__banner-container sweep-right"
        data-ix="product-page-new-member-banner"
        data-parent="promotion-register"
        data-tag=""
        onClick={modalHandler}
      >
        <div className="banner-container__alt" data-ix="product-page-new-member-banner" />

        <div className="banner-container__banner-text">
          <IntlMsg id="product.single.register.promotion" />
        </div>

      </button>
    </div>
  );
}
const { bool, func } = PropTypes;
ProductRegisterPromotion.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
};
