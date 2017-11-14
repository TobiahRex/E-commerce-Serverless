import React from 'react';
import PropTypes from 'prop-types';

function PopularProductCard({ routerPush, product, slug }) {
  const imageUrl = product.images.reduce((a, n) => {
    switch (a.purpose) {
      case '': return '';
      case 'card': return a.url;
      default: return n.url;
    }
  });

  return (
    <button
      data-slug={slug}
      className="card-container__juice-card juice-card--1 w-inline-block"
      href="/french_vanilla_mocha"
      onClick={routerPush}
    >
      <div className="hdr-container--1 juice-card__hdr-container">
        <h4 className="hdr-container__juice-card-hdr juice-card-hdr--1">
          {product.title[IntlLocale]}
        </h4>
      </div>
      <div className="juice-card__juice-img juice-img--1">
        <img
          src={imageUrl}
          alt={`${product.title[IntlLocale]} Juice`}
          className="card-img--1 juice-img__card-img"
        />
      </div>
    </button>
  );
}
const { arrayOf, shape, string, func } = PropTypes;
PopularProductCard.propTypes = {
  product: shape({
    title: shape({
      en: string,
      ja: string,
    }),
    price: string,
    nicotineStrength: string,
    images: arrayOf(
      shape({
        purpose: string,
        url: string,
      }),
    ),
  }),
  slug: string,
  routerPush: func.isRequired,
};
PopularProductCard.defaultProps = {
  product: {
    title: '',
    price: '',
    nicotineStrength: '',
    images: [{
      purpose: '',
      url: '',
    }],
  },
  slug: '',
};
export default PopularProductCard;
