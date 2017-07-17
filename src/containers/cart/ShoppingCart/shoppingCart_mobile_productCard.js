import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

function ShoppingCartMobileProductCard({
  keyNum,
  taxes,
  grandTotal,
  juiceObj,
  qtyHandler,
  deleteFromCart,
}) {
  return (
    <tr
      data-id={juiceObj._id}
      key={`shopping-cart-mobile-row-${juiceObj._id}`}
      keyNum={keyNum}
      className="shopping-cart-mobile-row"
    >
      <td className="shopping-cart-mobile-product-parent">
        <div className="shopping-cart-mobile-product-img">
          <img
            src={juiceObj.images[0].url}
            alt={juiceObj.title}
            className="shopping-cart-mobile-product-img-src"
          />
        </div>
        <div className="shopping-cart-mobile-product-infobox">
          <div className="shopping-cart-mobile-product-infobox-title">
            <h3>{juiceObj.title}</h3>
          </div>
          <div className="shopping-cart-mobile-product-infobox-nicotine">
            <p>Nicotine Strength:{'\u00A0'}</p>
            <i>{juiceObj.nicotineStrength}</i>
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
              <FontAwesome name="usd" />
              <p>{'\u00A0'}{`${juiceObj.price}.00`}</p>
            </div>
          </li>
          <li className="shopping-cart-mobile-product-actions-quantity">
            <div className="shopping-cart-mobile-product-actions-qty-title">
              <p>Quantity</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-qty-btns">
              <div className="shopping-cart-mobile-product-actions-qty-btns-container">
                <div className="shopping-cart-mobile-product-actions-qty-readout">
                  <p>{juiceObj.qty}</p>
                </div>
                <div className="shopping-cart-mobile-product-actions-qty-btns">
                  <div className="shopping-cart-mobile-product-actions-qty-btn-plus">
                    <button
                      data-id={juiceObj._id}
                      data-tag="qty-plus"
                      className="sweep-right"
                      onClick={qtyHandler}
                    >
                      <FontAwesome name="plus" />
                    </button>
                  </div>
                  <div className="shopping-cart-mobile-product-actions-qty-btn-minus">
                    <button
                      data-id={juiceObj._id}
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
          </li>
          <li className="shopping-cart-mobile-product-actions-subtotal">
            <div className="shopping-cart-mobile-product-actions-subtotal-title">
              <p>Subtotal</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-subtotal-qty">
              <FontAwesome name="usd" />
              <p>{'\u00A0'}{`${juiceObj.subTotal}.00`}</p>
            </div>
          </li>
          <li className="shopping-cart-mobile-product-actions-trash">
            <div className="shopping-cart-mobile-product-actions-trash-title">
              <p>Actions</p>
            </div>
            <div className="shopping-cart-mobile-product-actions-trash-btn-container">
              <button className="shopping-cart-mobile-product-actions-trash-btn sweep-right">
                <FontAwesome name="trash-o" />
              </button>
            </div>
          </li>
        </ul>
        <div className="shopping-cart-mobile-user-actions-btns">
          <button className="shopping-cart-mobile-user-actions-btns-clear sweep-right">
            Clear Shopping Cart
          </button>
          <button className="shopping-cart-mobile-user-actions-btns-checkout sweep-right" onClick={() => browserHistory.push('/express_checkout')}>
            <span className="btn-flex-parent">
              <FontAwesome name="credit-card-alt" />
              {'\u0020'}Express Checkout
            </span>
          </button>
        </div>
        <div className="shopping-cart-mobile-analysis-main">
          <div className="shopping-cart-mobile-analysis-taxes">
            <div className="shopping-cart-mobile-analysis-taxes-title">
              <h3 className="title">Taxes</h3>
            </div>
            <div className="shopping-cart-mobile-analysis-taxes-cost">
              <FontAwesome name="usd" />
              <h3>
                {'\u00A0'}{taxes}
              </h3>
            </div>
          </div>
          <div className="shopping-cart-mobile-analysis-grand-total">
            <div className="shopping-cart-mobile-analysis-grand-total-title">
              <h3 className="title">Grand Total</h3>
            </div>
            <div className="shopping-cart-mobile-analysis-grand-total-cost">
              <FontAwesome name="usd" />
              <h3>{'\u00A0'}{`${grandTotal}`}</h3>
            </div>
          </div>
          <div className="shopping-cart-mobile-continue-shopping">
            <button
              data-tag='juices'
              className="shopping-cart-mobile-continue-shopping-btn sweep-right"
              onClick={routerPush}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

const { objectOf, any, number, func } = PropTypes;

ShoppingCartMobileProductCard.propTypes = {
  juiceObj: objectOf(any).isRequired,
  keyNum: number.isRequired,
  taxes: number.isRequired,
  grandTotal: number.isRequired,
  qtyHandler: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default ShoppingCartMobileProductCard;
