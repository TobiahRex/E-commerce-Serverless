import React from 'react';
import PropTypes from 'prop-types';

function ProductTitle({ title }) {
  return (
    <div className="product-text__product-title">
      <h2 className="product-title__blurb" data-ix="product-page-title-scroll">
        {title[IntlLocale]}
      </h2>
    </div>
  );
}
const { string, shape } = PropTypes;
ProductTitle.propTypes = {
  title: shape({
    en: string,
    ja: string,
  }).isRequired,
};
export default ProductTitle;
