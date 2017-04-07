import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewsCarousel from './homeComponents/homepage_reviewsCarousel';
import HomepagePopJuices from './homeComponents/homepage_popJuices';

export default function HomePage() {
  const minHeight = `${window.screen.availHeight - 100}px` || '946px';
  return (
    <div className="homepage">
      <HomepageHeader minHeight={minHeight} />
      <HomepageFastestDelivery />
      <HomepageHowCarousel />
      <HomepageReviewsCarousel />
      <HomepagePopJuices />
    </div>
  );
}
