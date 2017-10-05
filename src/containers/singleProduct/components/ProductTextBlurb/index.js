import React from 'react';
import PropTypes from 'prop-types';

function ProductTextBlurb({ description }) {
  return (
    <div className="product-text__product-description">
      <p className="product-description__blurb" data-ix="product-page-blurb-scroll">
        {description[IntlLocale]}
      </p>
    </div>
  );
}
const { string, shape } = PropTypes;
ProductTextBlurb.propTypes = {
  description: shape({
    en: string,
    ja: string,
  }).isRequired,
};
export default ProductTextBlurb;
