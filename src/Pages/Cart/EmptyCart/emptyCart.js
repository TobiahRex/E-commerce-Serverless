import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function EmptyCart() {
  return (
    <div className="empty-cart-main">
      <div className="empty-cart-main-title">
        <h1>Your Shopping Cart Is Empty</h1>
      </div>
      <div className="empty-cart-main-icon">
        <FontAwesome name="shopping-basket" size="5x" />
      </div>
      <div className="empty-cart-oops-msg">
        <h1>Oops :(</h1>
      </div>
      <div className="empty-cart-shopping-btn">
        <button className="sweep-right">Start Shopping</button>
      </div>
    </div>
  );
}
