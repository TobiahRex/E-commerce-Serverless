import React from 'react';
import PropTypes from 'prop-types';

function ProductBlurb({ description }) {
  return (
    <div className="desc__blurb">
      <p>{description}</p>
    </div>
  );
}
const { string, shape } = PropTypes;
ProductBlurb.propTypes = {
  description: shape({
    en: string,
    ja: string,
  }).isRequired,
};
export default ProductBlurb;
