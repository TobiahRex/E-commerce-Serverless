import React from 'react';
import PropTypes from 'prop-types';


function ProductTitle({ vendor, mainTitle }) {
  return (
    <div className="main__title">
      <h1 data-ix="product-page-category-title-load">
        {mainTitle}
      </h1>
      <p className="main__title--vendor" data-ix="product-page-category-title-load-2">
        by
        &nbsp;
        {vendor}
      </p>
    </div>
  );
}
const { string } = PropTypes;
ProductTitle.propTypes = {
  vendor: string.isRequired,
  mainTitle: string.isRequired,
};
export default ProductTitle;
