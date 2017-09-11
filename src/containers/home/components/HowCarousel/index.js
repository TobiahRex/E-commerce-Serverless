import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBob from '../NavBob';

import CarouselImageSlide from '../../../../components/CarouselImageSlide/carouselImageSlide';
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
      desc: 'Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.',
      alt: 'Buy NJ2JP Juices',
    }, {
      name: 'distro',
      desc: 'Moments later, we receive your order at our Distribution Center in California.',
      alt: 'Distribution Center',
    }, {
      name: 'warehouse',
      desc: 'Our distribution center then quickly prepares your package.',
      alt: 'Warehouse',
    }, {
      name: 'flight',
      desc: 'A few hours later, your package is put on a direct flight from California to Japan.',
      alt: 'Overnight Flight',
    }, {
      name: 'truck',
      desc: 'Soon after landing, your package is on a delivery truck, on its way to your Japanese address.',
      alt: 'Delivery Truck',
    }, {
      name: 'delivery',
      desc: 'A few days later, you receive your package from Nic Juice 2 Japan. 😁 ',
      alt: 'Delivered',
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
          <h1 className="content__title">How?</h1>
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
