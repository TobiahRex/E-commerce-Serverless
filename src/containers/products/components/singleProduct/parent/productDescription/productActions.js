import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function ProductActions() {
  return (
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
  );
}
