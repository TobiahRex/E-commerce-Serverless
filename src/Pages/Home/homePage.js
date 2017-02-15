import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';

export default function HomePage() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageFastestDelivery />
      <HomepageHowCarousel />
      <div className="homepage-reviews">
        <h1 className="homepage-reviews-title">Reviews</h1>
        <div className="homepage-reviews-carousel-container">
          <div className="homepage-reviews-carousel-slides">
            {/* SLIDES */}
          </div>
          <div className="homepage-reviews-carousel-dots">
            <ul className="hompage-reviews-carousel-dots-list">
              <li className="homepage-reviews-carousel-dots-list-each" />
              <li className="homepage-reviews-carousel-dots-list-each" />
              <li className="homepage-reviews-carousel-dots-list-each" />
              <li className="homepage-reviews-carousel-dots-list-each" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
