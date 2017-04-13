import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewsCarousel from './homeComponents/homepage_reviewsCarousel';
import HomepagePopJuices from './homeComponents/homepage_popJuices';

const defaultProps = {
  mobile: false,
  preLoginUrl: '',
};

const propTypes = {
  mobile: PropTypes.bool,
  preLoginUrl: PropTypes.string,
};

function HomePage({ mobile, preLoginUrl }) {
  const height = window.innerHeight;
  const calcHeight = (header) => {
    if (!mobile) {
      if (window.innerWidth > 930) return (height - 120);
      return (height - 267);
    }
    if (header) {
      return (height - 267);
    }
    return (window.innerHeight - 60);
  };

  const sectionHeight = calcHeight();

  if (preLoginUrl !== '/') this.props.push(preLoginUrl);

  return (
    <div className="homepage">
      <HomepageHeader
        height={calcHeight(true)}
        mobile={mobile}
      />
      <HomepageFastestDelivery
        height={sectionHeight}
        mobile={mobile}
      />
      <HomepageHowCarousel
        height={sectionHeight}
        mobile={mobile}
      />
      <HomepageReviewsCarousel
        height={sectionHeight}
        mobile={mobile}
      />
      <HomepagePopJuices />
    </div>
  );
}

HomePage.defaultProps = defaultProps;
HomePage.propTypes = propTypes;

const mapStateToProps = ({ mobile, session }) => ({
  mobile: mobile.mobileType && true,
  preLoginUrl: session.preLoginUrl,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...routerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
