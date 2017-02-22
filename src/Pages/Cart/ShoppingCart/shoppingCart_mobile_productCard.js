import React, { PropTypes } from 'react';

const propTypes = {
  juiceObj: PropTypes.objectOf(PropTypes.any.isRequired),
  keyNum: PropTypes.number.isRequired,
  subTotalAmt: PropTypes.number.isRequired,
};

function ShoppingCartMobileProductCard({ juiceObj, keyNum, subTotalAmt }) {
  return (
    <div
      key={`shopping-cart-mobile-row-${juiceObj.name}-${keyNum}`}
      className="shopping-cart-mobile-row"
    >
      <div className="shopping-cart-mobile-product-parent">
        <div className="shopping-cart-mobile-product-img">
          <img
            src={juiceObj.imgSrc}
            alt={juiceObj.name}
            className="shopping-cart-mobile-product-img-src"
          />
        </div>
      </div>
    </div>
  );
}

ShoppingCartMobileProductCard.propTypes = propTypes;
export default ShoppingCartMobileProductCard;
