import React from 'react';
import PropTypes from 'prop-types';
import {
  PopularProductHdr,
  PopularProductCard,
} from './components';

function ProductsMid({ popularProducts, routerPush }) {
  const cardIx = [
    '773985a0-cf3f-1f87-2c73-1cade111ecfd',
    '1b600c16-0f5d-b4c1-87a4-c4bf0ec480bc',
    'da1ae609-7d24-34fc-99b7-6f66df750a77',
    '6632fc19-4d27-b639-8d4d-eeff77e37be1',
    'ec5cc1c6-f37f-cef6-0293-875d7e6dbebc',
    '52dfc179-224e-802e-e628-f06b1adc0ecc',
  ];

  return (
    <div className="floating-juice-container__middle-section">
      <PopularProductHdr />
      <div className="middle-section__card-container">
        {
          popularProducts.map((productObj, i) => (
            <PopularProductCard
              key={productObj._id}
              slug={productObj.slug}
              routerPush={routerPush}
              product={productObj}
              wix={cardIx[i]}
              cardNumber={i + 1}
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
