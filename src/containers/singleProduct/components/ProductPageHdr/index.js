import React from 'react';
import PropTypes from 'prop-types';


function ProductPageHdr({ vendor, mainTitle }) {
  return (
    <div className="main__title">
      <h1 className="main__title title--header" data-ix="product-page-category-title-load">
        {mainTitle}
        <span className="main__title--vendor" data-ix="product-page-category-title-load-2">
          by
          &nbsp;
          {vendor}
        </span>
      </h1>
    </div>
  );
}
const { string } = PropTypes;
ProductPageHdr.propTypes = {
  vendor: string.isRequired,
  mainTitle: string.isRequired,
};
export default ProductPageHdr;
