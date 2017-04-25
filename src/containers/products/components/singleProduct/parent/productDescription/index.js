import React from 'react';
import FontAwesome from 'react-fontawesome';
import Price from './price';
import Blurb from './blurb';
import Promotion from './promotion';
import Nicotine from './nicotine';
import ProductActions from './productActions';

export default function ProductDescription() {
  return (
    <div className="main__info--desc">
      <div className="desc__title">
        <h1>Fruity Bamm-Bamm</h1>
      </div>
      <Price />
      <Blurb />
      <Promotion />
      <Nicotine />
      <ProductActions />
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
