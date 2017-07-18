import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function EmptyCart() {
  return (
    <div className="empty-cart-main">
      <div className="empty-cart-main-title">
        <h2>Your Shopping Cart Is Empty</h2>
      </div>
      <div className="empty-cart-main-icon">
        <FontAwesome name="shopping-basket" size="5x" />
      </div>
      <div className="empty-cart-oops-msg">
        <img className="confused_emoji" alt="Confused Face" />
      </div>
      <div className="empty-cart-shopping-btn">
        <button className="sweep-right" onClick={() => browserHistory.push('/juices')}>Start Shopping</button>
      </div>
    </div>
  );
}
