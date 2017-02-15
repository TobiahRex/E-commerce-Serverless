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
          <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <p className="homepage-juices-grid-card-desc-price-tax">+TAX</p>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
