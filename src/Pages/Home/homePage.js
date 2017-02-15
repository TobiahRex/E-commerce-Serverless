import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewsCarousel from './homeComponents/homepage_reviewsCarousel';

export default function HomePage() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageFastestDelivery />
      <HomepageHowCarousel />
      <HomepageReviewsCarousel />
    </div>
  );
}
