import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';
import BreadCrumb from '../../../components/breadcrumbs';

export default function SingleProduct() {
  return (
    <div className="juice-page__main">
      <BreadCrumb
        paths={['Home']}
        classes={['home']}
        destination={['']}
        lastCrumb="Juice Page"
      />
      <div className="main__title">
        <h1>Switch Juice</h1>
      </div>
      <div className="main--parent">
        <div className="main__info--image">
          <img className="image__src" alt="Switch Juice" />
          <div className="image__promotion">
            <p>Buy 4 Bottles</p>
            <br />
            <p>Get 25% Off Your Order</p>
          </div>
        </div>
        <div className="main__info--desc">
          <div className="desc__title">
            <h1>Fruity Bamm-Bamm</h1>
          </div>
          <div className="desc__price-row">
            <ul className="price-row__list">
              <li className="list--price">
                <h1>
                  <FontAwesome name="usd" className="price__fa" /> 30.00
                </h1>
              </li>
              <li className="list--tax">
                <div className="tax__tax--title">
                  <p>+ Tax</p>
                </div>
                <div className="tax__shipping--title">
                  <p>
                    Free Shipping
                  </p>
                </div>
              </li>
              <li className="list--stock">
                <div className="stock__sku--title">
                  <p>SKU: 123123123</p>
                </div>
                <div className="stock__stock--title">
                  <h3>IN STOCK</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="desc__blurb">
            <p>
              A delicious Fruity Pebbles Cereal flavor.
              One of our most popular flavors.
            </p>
          </div>
          <div className="desc__promotion">
            <button
              className="sweep-right"
              onClick={() => browserHistory.push('/register')}
            >New members get 10% off their first order</button>
          </div>
          <div className="desc__nicotine">
            <h3>Nicotine Strength</h3>
            <ul className="nicotine__list">
              <li className="list--strength">2mg</li>
              <li className="list--strength">4mg</li>
              <li className="list--strength">6mg</li>
              <li className="list--strength">8mg</li>
            </ul>
          </div>
          <div className="desc__actions">
            <div className="actions__btn-container">
              <div className="btn-container__qty--container">
                <ul className="qty__list">
                  <li className="list--qty-title">
                    <p>Quantity</p>
                  </li>
                  <li className="list--qty-readout">
                    <p>4</p>
                  </li>
                  <li className="list--qty-adjust">
                    <button className="qty-adjust__plus sweep-right">
                      <FontAwesome name="plus" />
                    </button>
                    <button className="qty-adjust__minus sweep-right">
                      <FontAwesome name="minus" />
                    </button>
                  </li>
                </ul>
              </div>
              <button className="btn-container__add-to-cart sweep-right">
                <span className="btn-flex-parent">
                  <FontAwesome
                    className="sp-cart-icon" name="shopping-cart"
                  />
                  Add To Cart
                </span>
              </button>
            </div>
            <div className="actions__warning-msg">
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
          <div className="desc__smedia">
            <ul className="smedia__btn--list">
              <li className="single-product-info-desc-smedia-btn-like hover-bob">
                <FontAwesome name="thumbs-o-up" />
                <p>Like</p>
                <p className="single-product-info-desc-smedia-btn-like-readout">99</p>
              </li>
              <li className="single-product-info-desc-smedia-btn-share hover-bob">
                <FontAwesome name="facebook" />
                <p>Share</p>
              </li>
              <li className="single-product-info-desc-smedia-btn-tweet hover-bob">
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
        style={{ display: 'none' }} className="single-product-add-success-modal"
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
