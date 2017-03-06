import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';

export default function SingleProduct() {
  return (
    <div className="single-product-main">
      <div className="single-product-breadcrumb-container">
        <ul className="single-product-breadcrumb-list">
          <li className="single-product-breadcrumb-path">
            Home
            <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
          </li>
          <li className="single-product-breadcrumb-path">
            Fruity Bamm-Bamm
          </li>
        </ul>
      </div>
      <div className="single-product-main-title">
        <h1>Switch Juice</h1>
      </div>
      <div className="single-product-info-parent">
        <div className="single-product-info-image">
          <img
            alt="Switch Juice"
            className="single-product-info-image-src"
          />
          <div className="single-product-info-image-promotion">
            <p>Buy 4 Bottles</p>
            <br />
            <p>Get 25% Off Your Order</p>
          </div>
        </div>
        <div className="single-product-info-desc-parent">
          <div className="single-product-info-desc-title">
            <h1>Fruity Bamm-Bamm</h1>
          </div>
          <div className="single-product-info-desc-price-row">
            <ul className="single-product-info-desc-price-row-list">
              <li className="single-product-info-desc-price-item">
                <h1>
                  <FontAwesome name="usd" className="single-product-price-sign" /> 30.00
                </h1>
              </li>
              <li className="single-product-info-desc-taxbox-item">
                <div className="single-product-info-desc-taxbox-item-msg-tax">
                  <p>+ Tax</p>
                </div>
                <div className="single-product-info-desc-taxbox-item-msg-shipping">
                  <p>
                    Free Shipping
                  </p>
                </div>
              </li>
              <li className="single-product-info-desc-stockbox-item">
                <div className="single-product-info-desc-stockbox-item-msg-sku">
                  <p>SKU: 123123123</p>
                </div>
                <div className="single-product-info-desc-stockbox-item-msg-instock">
                  <h3>IN STOCK</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="single-product-info-desc-blurb">
            <p>
              A delicious Fruity Pebbles Cereal flavor.
              One of our most popular flavors.
            </p>
          </div>
          <div className="single-product-info-desc-promotion">
            <button className="sweep-right" onClick={() => browserHistory.push('/register')}>
              New members get 10% off their first order
            </button>
          </div>
          <div className="single-product-info-desc-nicotine">
            <h3>Nicotine Strength</h3>
            <ul className="single-product-info-desc-nicotine-list">
              <li className="single-product-info-desc-nicotine-strength">2mg</li>
              <li className="single-product-info-desc-nicotine-strength">4mg</li>
              <li className="single-product-info-desc-nicotine-strength">6mg</li>
              <li className="single-product-info-desc-nicotine-strength">8mg</li>
            </ul>
          </div>
          <div className="single-product-info-desc-actions">
            <div className="single-product-info-desc-actions-btn-container">
              <div className="single-product-info-desc-actions-btn-qty">
                <ul className="single-product-info-desc-actions-btn-qty-items">
                  <li className="single-product-info-desc-actions-btn-qty-title">
                    <p>Quantity</p>
                  </li>
                  <li className="single-product-info-desc-actions-btn-qty-readout">
                    <p>4</p>
                  </li>
                  <li className="single-product-info-desc-actions-btn-qty-btns">
                    <button className="single-product-info-desc-actions-btn-qty-plus sweep-right">
                      <FontAwesome name="plus" />
                    </button>
                    <button className="single-product-info-desc-actions-btn-qty-minus sweep-right">
                      <FontAwesome name="minus" />
                    </button>
                  </li>
                </ul>
              </div>
              <button className="single-product-info-desc-actions-btn-add sweep-right">
                <span className="btn-flex-parent">
                  <FontAwesome className="sp-cart-icon" name="shopping-cart" />
                  Add To Cart
                </span>
              </button>
            </div>
            <div className="single-product-info-desc-actions-warning-msg">
              <p>
                Maximum of 4 bottles per customer per address. More info {'\u00A0'}
                <Link
                  to={'/shipping_policy'}
                  className="single-product-info-desc-actions-warning-msg-infolnk"
                >here.
                </Link>
              </p>
              <p>Japanese Statute # 123123123.</p>
            </div>
          </div>
          <div className="single-product-info-desc-smedia-btns-container">
            <ul className="single-product-info-desc-smedia-btns-list">
              <li className="single-product-info-desc-smedia-btn-like hvr-bob">
                <FontAwesome name="thumbs-o-up" />
                <p>Like</p>
                <p className="single-product-info-desc-smedia-btn-like-readout">99</p>
              </li>
              <li className="single-product-info-desc-smedia-btn-share hvr-bob">
                <FontAwesome name="facebook" />
                <p>Share</p>
              </li>
              <li className="single-product-info-desc-smedia-btn-tweet hvr-bob">
                <FontAwesome name="twitter" />
                <p>tweet</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="single-product-back-btn-container">
        <button
          className="single-product-back-btn sweep-right"
          onClick={() => browserHistory.goBack()}
        >
          <span className="flex-btn-parent">
            <FontAwesome name="angle-double-left" />
            {'\u00A0'}Back
          </span>
        </button>
        <button
          className="single-product-juices-btn sweep-right"
          onClick={() => browserHistory.push('/juices')}
        >Shop All Juices
        </button>
      </div>
      <div
        style={{ display: '' }} className="single-product-add-success-modal"
      >
        <div className="single-product-add-success-modal-dialogue">
          <div className="single-product-add-success-modal-dialogue-exit-container">
            <button className="single-product-add-success-modal-dialogue-exit-btn">
              <FontAwesome name="plus" />
            </button>
          </div>
          <div className="single-product-add-success-modal-dialogue-msg-product">
            <p>{'<Product Title>'}</p>
            <br />
            <p>has been successfully added to your cart.</p>
          </div>
          <div className="single-product-add-success-modal-action-btns">
            <button className="single-product-add-success-modal-cart sweep-right" onClick={() => browserHistory.push('/cart')}>View Cart</button>
            <button className="single-product-add-success-modal-continue sweep-right" onClick={() => browserHistory.push('/juices')}>
              Continue Shopping
            </button>
            <button className="single-product-add-success-modal-checkout sweep-right" onClick={() => browserHistory.push('/express_checkout')}>
              Express Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* TODO make sure you add the success modal styles dynamically.

Must control the display property from the JSX NOT the style sheet.

See the style sheet for detials.
*/
