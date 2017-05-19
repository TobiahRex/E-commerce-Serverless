import React from 'react';
import PropTypes from 'prop-types';

function ProductBlurb() {
  return (
    <div className="desc__blurb">
      <p>
        A delicious Fruity Pebbles Cereal flavor.
        One of our most popular flavors.
      </p>
    </div>
  );
}
const { string } = PropTypes;
ProductBlurb.propTypes = {
  blurb: string.isRequired,
};
export default ProductBlurb;
