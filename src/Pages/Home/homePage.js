import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewsCarousel from './homeComponents/homepage_reviewsCarousel';
import HomepagePopJuices from './homeComponents/homepage_popJuices';

const propTypes = {
  mobile: PropTypes.bool.isRequired,
};

function HomePage({ mobile }) {
  function calcHeight() {
    if (!mobile) {
      if (window.innerWidth > 930) return (886);
      return (797);
    }
    return (window.screen.availHeight - 260);
  }
  const height = calcHeight();
  return (
    <div className="homepage">
      <HomepageHeader height={height} />
      <HomepageFastestDelivery height={height} />
      <HomepageHowCarousel height={height} />
      <HomepageReviewsCarousel height={height} />
      <HomepagePopJuices />
    </div>
  );
}

HomePage.propTypes = propTypes;

const mapStateToProps = ({ mobile }) => ({
  mobile: mobile.mobileType || false,
});

export default connect(mapStateToProps, null)(HomePage);
