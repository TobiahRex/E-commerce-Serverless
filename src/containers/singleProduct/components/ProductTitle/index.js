import React from 'react';
import PropTypes from 'prop-types';

function ProductTitle({ title }) {
  return (
    <div className="desc__title">
      <h1>{title[IntlLocale]}</h1>
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
