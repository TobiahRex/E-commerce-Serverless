import React from 'react';
import FontAwesome from 'react-fontawesome';
import history from '../../../Services/history';

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
        <h1>Oops </h1>{'\u00A0'}<img className="confused_emoji" alt="Confused Face" />
      </div>
      <div className="empty-cart-shopping-btn">
        <button className="sweep-right" onClick={() => history.push('/juices')}>Start Shopping</button>
      </div>
    </div>
  );
}
