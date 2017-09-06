import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
  HomepageHeader,
  HomepageFastestDelivery,
  HomepageHowCarousel,
  HomepageReviewsCarousel,
  MasonryNews,
} from './components';

const { bool } = PropTypes;

class HomePage extends Component {
  static propTypes = {
    mobile: bool,
  };
  static defaultProps = {
    mobile: false,
  };

  calculateHeight = (header) => {
    const { mobile } = this.props;
    const height = window.innerHeight;

    if (!mobile) {
      if (window.innerWidth > 930) return (height - 120);
      return (height - 267);
    }
    if (header) {
      return (height - 267);
    }
    return (window.innerHeight - 60);
  }

  componentWillUpdate() {
    const msnry = new Masonry('.grid', { //eslint-disable-line
      itemSelector: '.checkout__grid',
      columnWidth: 340,
      gutter: 22,
    });
  }

  render() {
    return (
      <div className="homepage">
        <HomepageHeader
          height={this.calculateHeight(true)}
          mobile={this.props.mobile}
        />
        <HomepageFastestDelivery
          height={this.calculateHeight()}
          mobile={this.props.mobile}
        />
        <HomepageHowCarousel
          height={this.calculateHeight()}
          mobile={this.props.mobile}
        />
        <HomepageReviewsCarousel
          height={this.calculateHeight()}
          mobile={this.props.mobile}
        />

      </div>
    );
  }
}
const mapStateToProps = ({ mobile }) => ({
  mobile: !!mobile.mobileType,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
