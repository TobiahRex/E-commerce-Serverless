import React from 'react';

export default function PromotionBanner() {
  return (
    <div className="main__info--image">
      <img className="image__src" alt="Switch Juice" />
      <button className="image__promotion sweep-right-red">
        <p>Buy 4 Bottles</p>
        <br />
        <p>Get 25% Off Your Order</p>
      </button>
    </div>
  );
}
