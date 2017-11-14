import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import {
  WebflowAnimations,
  WebflowAnimations2,
} from './assets/utils';

function PopularProductCard({ routerPush, product, slug, wix, cardNumber }) {
  const imageUrl = product.images.reduce((a, n) => {
    switch (a.purpose) {
      case '': return '';
      case 'card': return a.url;
      default: return n.url;
    }
  });

  const setRenderKey = value => (value += 1);

  const renderKey = setRenderKey(0);

  return (
    <button
      key={renderKey}
      onMouseEnter={() => setRenderKey(renderKey)}
      data-w-id={wix}
      data-slug={`/juice/${slug}`}
      className={`card-container__juice-card juice-card--${cardNumber} w-inline-block`}
      href="/french_vanilla_mocha"
      onClick={routerPush}
    >
      <div className={`hdr-container--${cardNumber} juice-card__hdr-container`}>
        <h4 className={`hdr-container__juice-card-hdr juice-card-hdr--${cardNumber}`}>
          {product.title[IntlLocale]}
        </h4>
      </div>
      <div className={`juice-card__juice-img juice-img--${cardNumber}`}>
        <img
          src={imageUrl}
          alt={`${product.title[IntlLocale]} Juice`}
          className={`card-img--${cardNumber} juice-img__card-img`}
        />
      </div>
    </button>
  );
}
const { arrayOf, shape, string, func, number } = PropTypes;
PopularProductCard.propTypes = {
  wix: string.isRequired,
  cardNumber: number.isRequired,
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
const PopularProductsWithLifeCycle = lifecycle({
  componentDidUpdate: () => {
    WebflowAnimations();
    WebflowAnimations2();
  },
})(PopularProductCard);
export default PopularProductsWithLifeCycle;
