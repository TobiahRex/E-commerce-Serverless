import React from 'react';
import PropTypes from 'prop-types';
import {
  PopularProductCard,
  ProductsMidHdr,
} from './components';

function ProductsMid({ popularProducts, routerPush }) {
  return (
    <div className="floating-juice-container__middle-section">
      <ProductsMidHdr />
      <div className="middle-section__card-container">
        {
          popularProducts.map(productObj => (
            <PopularProductCard
              key={productObj._id}
              slug={productObj.slug}
              routerPush={routerPush}
              product={productObj}
            />
          ))
        }
      </div>
    </div>
  );
}

const { arrayOf, object, func } = PropTypes;
ProductsMid.propTypes = {
  popularProducts: arrayOf(object).isRequired,
  routerPush: func.isRequired,
};
export default ProductsMid;
