import React from 'react';

import HomepageAgeVerification from './homeComponents/homepage_ageVerification';
import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';

export default function HomePage() {
  return (
    <div className="homepage">
      {/* <HomepageAgeVerification /> */}
      <HomepageHeader />
      <HomepageFastestDelivery />
    </div>
  );
}
