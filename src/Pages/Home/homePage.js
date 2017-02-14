import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';

export default function HomePage() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageFastestDelivery />
    </div>
  );
}
