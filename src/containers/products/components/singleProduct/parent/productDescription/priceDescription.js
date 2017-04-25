import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function PriceDescription() {
  return (
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
  );
}
