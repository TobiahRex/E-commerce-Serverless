import React from 'react';
import FontAwesome from 'react-fontawesome';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewsCarousel from './homeComponents/homepage_reviewsCarousel';

export default function HomePage() {
  const price = null;
  const juiceName = null;

  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageFastestDelivery />
      <HomepageHowCarousel />
      <HomepageReviewsCarousel />
      <div className="homepage-juices">
        <h1 className="homepage-juices-title">Popular Juices</h1>
        <div className="homepage-juices-grid-parent">
          <div className="homepage-juices-grid-card">
            <div className="homepage-juices-grid-card-parent">
              <img alt="" className="homepage-juices-grid-card-image" />
              <div className="homepage-juices-grid-card-desc-parent">
                <h4 className="homepage-juices-grid-card-desc-title">
                  {juiceName || 'Strawberries N\' Cream'}
                </h4>
                <div className="homepage-juices-grid-card-desc-price">
                  <h2>
                    <FontAwesome name="usd" size="3x" />&nbsp
                    {price || '30.00'}
                    <p>+TAX</p>
                  </h2>
                </div>
                <div className="homepage-juices-grid-card-desc-shipping">
                  <p>Free Shipping</p>
                </div>
                <div className="homepage-juices-grid-card-desc-nicotine-title">
                  <p>Nicotine Strengths</p>
                </div>
                <div className="homepage-juices-grid-card-desc-nicotine-options">
                  <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                    <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                      <p>2mg</p>
                    </li>
                    <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                      <p>4mg</p>
                    </li>
                    <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                      <p>6mg</p>
                    </li>
                    <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                      <p>8mg</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
