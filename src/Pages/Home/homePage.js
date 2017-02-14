import React from 'react';

import HomepageHeader from './homeComponents/header';

export default function HomePage() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <div className="homepage-fastest-delivery">
        <h1 className="homepage-fastest-delivery-title">
          Fastest Delivery
        </h1>
        <div className="homepage-fastest-delivery-description-container">
          <img alt="Fastest Delivery" className="homepage-fastest-delivery-description-image" />
          <div className="homepage-fastest-delivery-description-message-container">
            <h3>Nobody Is Faster In Japan</h3>
            <div className="homepage-fastest-delivery-description-message-body">
              {/* <p>
                No one can deliver Nicotine E-Juice to Japan
                faster than us.
                </p>
                <p>
                Once you shop with us and see how fast we are,
                we’re confident you won’t want to buy Nicotine
                vape juice from anywhere else.
                </p>
                <p>Hard to believe? Try us now!</p>
              <p>You’ll be happy you did.</p> */}
              <p>
                No one can deliver Nicotine E-Juice to Japan
                faster than us.  
                <br/>
                <br/>
                Once you shop with us and see how fast we are,
                we’re confident you won’t want to buy Nicotine
                vape juice from anywhere else.
                <br/>
                <br/>
                Hard to believe? Try us now!
                <br/>
                <br/>
                You’ll be happy you did.
              </p>
            </div>
            <button className="homepage-fastest-delivery-description-message-buy-btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
