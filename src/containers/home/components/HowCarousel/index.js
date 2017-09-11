import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage as IntlMsg } from 'react-intl';
import NavBob from '../NavBob';

import CarouselImageSlide from '../';
import CarouselNav from '../../../../components/carouselNav';

const { number } = PropTypes;
class HomepageHowCarousel extends Component {
  static defaultProps = {
    screenSize: window.screen.availWidth,
  }
  static propTypes = {
    screenSize: number,
    height: number.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      screenSize: props.screenSize,
      numSlides: 6,
      showIndex: 0,
      hasPrevious: false,
      hasNext: true,
      maxWidth: '346px',
    };
  }

  componentWillReceiveProps({ screenSize }) {
    this.setState({ screenSize });
  }

  handlePreviousClick = () => {
    const showIndex = Math.max(this.state.showIndex - 1, 0);
    const hasPrevious = showIndex !== 0;
    const hasNext = showIndex !== 6;
    this.setState({ showIndex, hasPrevious, hasNext });
  }

  handleNextClick = () => {
    const showIndex = Math.min(this.state.showIndex + 1, this.state.numSlides - 1);
    const hasPrevious = showIndex !== 0;
    const hasNext = showIndex !== 5;
    this.setState({ showIndex, hasPrevious, hasNext });
  }

  renderCarouselSlides = (maxWidth) => {
    const slideDescs = [{
      name: 'couple',
      desc: 'home.how.buying.desc',
      alt: 'Buy NJ2JP Juices',
    }, {
      name: 'distro',
      desc: 'home.how.distro.desc',
      alt: 'home.how.distro.desc.alt',
    }, {
      name: 'warehouse',
      desc: 'home.how.warehouse.desc',
      alt: 'home.how.warehouse.desc.alt',
    }, {
      name: 'flight',
      desc: 'home.how.flight.desc',
      alt: 'home.how.flight.desc.alt',
    }, {
      name: 'truck',
      desc: 'home.how.truck.desc',
      alt: 'home.how.truck.desc.alt',
    }, {
      name: 'delivery',
      desc: 'home.how.delivery.desc',
      alt: 'home.how.delivery.desc.alt',
    }];
    return slideDescs.map(({ name, desc, alt }) => (
      <CarouselImageSlide
        maxWidth={maxWidth}
        key={`homepage-how-carousel-${name}`}
        className="carousel__slides--slide"
        name={name}
        description={desc}
        alt={alt}
      />
    ));
  }

  render() {
    const { showIndex, hasPrevious, hasNext, screenSize } = this.state;
    let screenAdjust = 0;
    let maxWidth = 0;
    if (screenSize > 1079) {
      screenAdjust = -941;
      maxWidth = '941px';
    } else if (screenSize < 1080 && screenSize > 359) {
      screenAdjust = -346;
      maxWidth = '346px';
    } else if (screenSize < 360) {
      screenAdjust = (screenSize - 14) * -1;
      maxWidth = `${screenAdjust * -1}px`;
    }

    const stylesObj = {
      slides: {
        left: `${(screenAdjust * showIndex) / 10}em`,
      },
      leftNav: {
        display: hasPrevious ? 'inline' : 'none',
      },
      rightNav: {
        display: hasNext ? 'inline' : 'none',
      },
    };
    const { height } = this.props;
    return (
      <div className="homepage__how" style={{ height }}>
        <div className="how__content--container">
          <h1 className="content__title">
            <IntlMsg id="home.how.title" />
          </h1>
          <div className="content__carousel--container">
            <div
              style={stylesObj.slides}
              className="carousel__slides"
            >{this.renderCarouselSlides(maxWidth)}</div>
            <CarouselNav
              show={stylesObj.leftNav}
              className="homepage-how-carousel"
              name="left"
              onNext={null}
              onPrevious={this.handlePreviousClick}
              hasPrevious={this.state.showIndex > 0}
              hasNext={this.state.showIndex < this.state.numSlides - 1}
            />

            <CarouselNav
              show={stylesObj.rightNav}
              className="homepage-how-carousel"
              name="right"
              onNext={this.handleNextClick}
              onPrevious={null}
              hasPrevious={this.state.showIndex > 0}
              hasNext={this.state.showIndex < this.state.numSlides - 1}
            />
          </div>
        </div>
        <NavBob
          className={'how__navBob'}
          height={height * 3}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ mobile }) => ({
  screenSize: Number(mobile.screenWidth),
});
export default connect(mapStateToProps, null)(HomepageHowCarousel);
