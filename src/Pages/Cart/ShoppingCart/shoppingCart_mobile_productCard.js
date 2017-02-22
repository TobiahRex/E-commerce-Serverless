import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

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
        <div className="shopping-cart-mobile-product-infobox">
          <div className="shopping-cart-mobile-product-infobox-title">
            <h3>{juiceObj.name}</h3>
          </div>
          <div className="shopping-cart-mobile-product-infobox-nicotine">
            <p>Nicotine Strength:{'\u00A0'}</p>
            <i>{juiceObj.nicotine}</i>
          </div>
          <div className="shopping-cart-mobile-product-infobox-sku">
            <p>SKU:{'\u00A0'}</p>
            <p>{juiceObj.sku}</p>
          </div>
        </div>
        <ul className="shopping-cart-mobile-product-actions-list">
          <li className="shopping-cart-mobile-product-actions-price">
            <div className="shopping-cart-mobile-product-actions-price-title">
              <p>Price</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-price-amt">
              <p>{juiceObj.price}</p>
            </div>
          </li>
          <li className="shopping-cart-mobile-product-actions-price">
            <div className="shopping-cart-mobile-product-actions-qty-title">
              <p>Quantity</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-qty-btns">
              <div className="shopping-cart-mobile-product-actions-qty-btns-container">
                <div className="shopping-cart-mobile-product-actions-qty-readout">
                  {juiceObj.qty}
                </div>
                <div className="shopping-cart-mobile-product-actions-qty-btns-plus">
                  <FontAwesome name="plus" />
                </div>
                <div className="shopping-cart-mobile-product-actions-qty-btns-minus">
                  <FontAwesome name="minus" />
                </div>
              </div>
            </div>
          </li>
          <li className="shopping-cart-mobile-product-actions-trash">
            <FontAwesome name="trash-o" />
          </li>
        </ul>
      </div>
    </div>
  );
}

ShoppingCartMobileProductCard.propTypes = propTypes;
export default ShoppingCartMobileProductCard;
