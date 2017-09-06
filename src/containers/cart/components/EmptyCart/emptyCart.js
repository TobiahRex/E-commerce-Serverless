import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];

export default function EmptyCart() {
  return (
    <div className="empty-cart-main">
      <div className="empty-cart-main-title">
        <h2>Your Shopping Cart Is Empty 😕 </h2>
      </div>
      <div className="empty-cart-main-icon">
        <FontAwesome name="shopping-basket" size="5x" />
      </div>
      <div className="empty-cart-oops-msg" />
      <div className="empty-cart-shopping-btn">
        <button className="sweep-right" onClick={() => browserHistory.push(`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`)}>Start Shopping</button>
      </div>
    </div>
  );
}
