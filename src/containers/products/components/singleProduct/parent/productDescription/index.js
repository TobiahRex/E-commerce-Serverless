import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';
import Price from './priceDescription';
import Blurb from './blurbDescription';

export default function ProductDescription() {
  return (
    <div className="main__info--desc">
      <div className="desc__title">
        <h1>Fruity Bamm-Bamm</h1>
      </div>
      <Price />
      <Blurb />
      <Promotion />
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
            <Link to={'/shipping_policy'}>here.</Link>
          </p>
          <p>Japanese Statute # 123123123.</p>
        </div>
      </div>
      <div className="desc__smedia">
        <ul className="smedia__btn--list">
          <li className="list__like-btn hover-bob">
            <FontAwesome name="thumbs-o-up" />
            <p>Like</p>
            <p className="like-btn__qty">99</p>
          </li>
          <li className="list__share-btn hover-bob">
            <FontAwesome name="facebook" />
            <p>Share</p>
          </li>
          <li className="list__tweet-btn hover-bob">
            <FontAwesome name="twitter" />
            <p>tweet</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
