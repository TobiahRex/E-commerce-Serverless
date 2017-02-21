import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function SingleProduct() {
  return (
    <div className="single-product-main">
      <div className="single-product-breadcrumb-container">
        <ul className="single-product-breadcrumb-list">
          <li className="single-product-breadcrumb-path">
            Home
            <FontAwesome className="breadcrumb-chevron-right" name="chevron-right" />
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
              <li className="single-product-info-desc-price-item">$30.00</li>
              <li className="single-product-info-desc-tax-item">
                <div className="single-product-info-desc-tax-item-msg">
                  <p>+ Tax</p>
                </div>
                <div className="single-product-info-desc-tax-item-msg">
                  <p>
                    Free Shipping
                  </p>
                </div>
              </li>
              <li className="single-product-info-desc-instock-item">
                <div className="single-product-info-desc-price-sku">
                  <p>SKU: 123123123</p>
                </div>
                <div className="single-product-info-desc-price-instock">
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
            <h3>
              BUY 4 Bottles Get 25% Off Your Order
            </h3>
          </div>
          <div className="single-product-info-desc-nicotine">
            <h3>Nicotine Strength</h3>
            <ul className="single-product-info-desc-nictoine-list">
              <li className="single-product-info-desc-nictoine-strength">2mg</li>
              <li className="single-product-info-desc-nictoine-strength">4mg</li>
              <li className="single-product-info-desc-nictoine-strength">6mg</li>
              <li className="single-product-info-desc-nictoine-strength">8mg</li>
            </ul>
          </div>
          <div className="single-product-info-desc-actions">
            <div className="single-product-info-desc-actions-btn-container">
              <div className="single-product-info-desc-actions-btn-qty">
                <ul className="single-product-info-desc-actions-btn-qty-items">
                  <li className="single-product-info-desc-actions-btn-qty-title">
                    <p>QTY</p>
                  </li>
                  <li className="single-product-info-desc-actions-btn-qty-readout">
                    <p>4</p>
                  </li>
                  <li className="single-product-info-desc-actions-btn-qty-btns">
                    <button className="single-product-info-desc-actions-btn-qty-plus">
                      <FontAwesome name="plus" />
                    </button>
                    <button className="single-product-info-desc-actions-btn-qty-minus">
                      <FontAwesome name="minus" />
                    </button>
                  </li>
                </ul>
              </div>
              <button className="single-product-info-desc-actions-btn-add">
                Add To Cart
              </button>
            </div>
            <div className="single-product-info-desc-actions-warning-msg">
              <p>
                Maximum of 4 bottles per customer per address. More info
                <span className="single-product-info-desc-actions-warning-msg-infolnk">
                  here.
                </span>
              </p>
            </div>
          </div>
          <div className="single-product-info-desc-smedia-btns-container">
            <ul className="single-product-info-desc-smedia-btns-list">
              <li className="single-product-info-desc-smedia-btn-like">
                <FontAwesome name="thumbs-o-up" />
                <p>Like</p>
                <p>99</p>
              </li>
              <li className="single-product-info-desc-smedia-btn-share">
                <FontAwesome name="facebook" />
                <p>Share</p>
              </li>
              <li className="single-product-info-desc-smedia-btn-tweet">
                <FontAwesome name="twitter" />
                <p>Tweet</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="single-product-back-btn-container">
        <button className="single-product-back-btn">
          Back to Homepage
        </button>
      </div>
    </div>
  );
}
