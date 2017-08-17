import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ErrorMsg from './errorMsgCart';
import {
  nicotineStrengthConverter as NicotineStrengthConverter,
} from '../utilities.imports';


function ShoppingCartMobileProductCard({
  productObj,
  routerPush,
  qtyHandler,
  deleteFromCart,
  emptyCart,
}) {
  return (
    <tr
      data-id={productObj._id}
      key={`shopping-cart-mobile-row-${productObj._id}`}
      className="shopping-cart-mobile-row"
    >
      <td className="shopping-cart-mobile-product-parent">
        <div className="shopping-cart-mobile-product-img">
          <img
            src={productObj.product.images[0].url}
            alt={productObj.product.title}
            className="shopping-cart-mobile-product-img-src"
          />
        </div>
        <div className="shopping-cart-mobile-product-infobox">
          <div className="shopping-cart-mobile-product-infobox-title">
            <h3>{productObj.product.title}</h3>
          </div>
          <div className="shopping-cart-mobile-product-infobox-nicotine">
            <p>Nicotine Strength:{'\u00A0'}</p>
            <i>{NicotineStrengthConverter(productObj.product.nicotineStrength)}</i>
          </div>
          <div className="shopping-cart-mobile-product-infobox-sku">
            <p>SKU:{'\u00A0'}</p>
            <p>{productObj.product.sku}</p>
          </div>
        </div>
        <ul className="shopping-cart-mobile-product-actions-list">
          <li className="shopping-cart-mobile-product-actions-price">
            <div className="shopping-cart-mobile-product-actions-price-title">
              <p>Price</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-price-amt">
              <FontAwesome name="usd" />
              <p>{'\u00A0'}{Number(productObj.product.price).toFixed(2)}</p>
            </div>
          </li>
          <li className="shopping-cart-mobile-product-actions-quantity">
            <div className="shopping-cart-mobile-product-actions-qty-title">
              <p>Quantity</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-qty-btns">
              <div className="shopping-cart-mobile-product-actions-qty-btns-container">
                <div className="shopping-cart-mobile-product-actions-qty-readout">
                  <p>{productObj.qty}</p>
                </div>
                <div className="shopping-cart-mobile-product-actions-qty-btns">
                  <div className="shopping-cart-mobile-product-actions-qty-btn-plus">
                    <button
                      data-id={productObj._id}
                      data-tag="qty-plus"
                      className="sweep-right"
                      onClick={qtyHandler}
                    >
                      <FontAwesome name="plus" />
                    </button>
                  </div>
                  <div className="shopping-cart-mobile-product-actions-qty-btn-minus">
                    <button
                      data-id={productObj._id}
                      data-tag="qty-minus"
                      className="sweep-right"
                      onClick={qtyHandler}
                    >
                      <FontAwesome name="minus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ErrorMsg error={productObj.error} errorMsg={productObj.error.message} />
          </li>
          <li className="shopping-cart-mobile-product-actions-subtotal">
            <div className="shopping-cart-mobile-product-actions-subtotal-title">
              <p>Subtotal</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-subtotal-qty">
              <FontAwesome name="usd" />
              <p>{'\u00A0'}{`${productObj.subTotal}.00`}</p>
            </div>
          </li>
          <li className="shopping-cart-mobile-product-actions-trash">
            <div className="shopping-cart-mobile-product-actions-trash-title">
              <p>Actions</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-trash-btn-container">
              <button
                data-id={productObj._id}
                className="shopping-cart-mobile-product-actions-trash-btn sweep-right"
                onClick={deleteFromCart}
              >
                <FontAwesome name="trash-o" />
              </button>
            </div>
          </li>
        </ul>
        <div className="shopping-cart-mobile-user-actions-btns">
          <button
            className="shopping-cart-mobile-user-actions-btns-clear sweep-right"
            onClick={emptyCart}
          >
            Empty Shopping Cart
          </button>
          <button
            data-slug="express_checkout"
            className="shopping-cart-mobile-user-actions-btns-checkout sweep-right"
            onClick={routerPush}
          >
            <span className="btn-flex-parent">
              <FontAwesome name="credit-card-alt" />
              {'\u0020'}Express Checkout
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}

const { objectOf, any, number, func } = PropTypes;

ShoppingCartMobileProductCard.propTypes = {
  taxes: number.isRequired,
  productObj: objectOf(any).isRequired,
  grandTotal: number.isRequired,
  emptyCart: func.isRequired,
  routerPush: func.isRequired,
  qtyHandler: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default ShoppingCartMobileProductCard;
