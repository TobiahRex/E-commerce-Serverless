import React from 'react';
import PropTypes from 'prop-types';


function ProductTitle({ vendor, mainTitle }) {
  return (
    <div className="main__title">
      <h1>{mainTitle}</h1>
      <p className="main__title--vendor">by {vendor}</p>
    </div>
  );
}
const { string } = PropTypes;
ProductTitle.propTypes = {
  vendor: string.isRequired,
  mainTitle: string.isRequired,
};
export default ProductTitle;
