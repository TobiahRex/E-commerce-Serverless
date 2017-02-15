import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewSlide from '../../Components/reviewSlide';

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
            <HomepageReviewSlide
              className={'homepage-reviews-carousel'}
              name={'alpha'}
              review={''}
              author={'Matt Shipmen'}
            />

          </div>
          <div className="homepage-reviews-carousel-dots">
            <ul className="homepage-reviews-carousel-dots-list">
              <li
                onClick={() => console.log('alpha')} className="homepage-reviews-carousel-dots-list-each" />
              <li

                onClick={() => console.log('beta')} className="homepage-reviews-carousel-dots-list-each" />
              <li

                onClick={() => console.log('gamma')} className="homepage-reviews-carousel-dots-list-each" />
              <li

                onClick={() => console.log('delta')} className="homepage-reviews-carousel-dots-list-each" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
