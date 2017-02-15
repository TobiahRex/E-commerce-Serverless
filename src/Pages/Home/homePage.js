import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewSlide from '../../Components/reviewSlide';
import HomepageReviewsCarourselDots from '../../Components/CarouselDots/carouselDots';

export default function HomePage() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageFastestDelivery />
      <HomepageHowCarousel />
      
    </div>
  );
}
