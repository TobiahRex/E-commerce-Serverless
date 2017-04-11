import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import NavBob from './navBob';

import CarouselImageSlide from '../../../components/CarouselImageSlide/carouselImageSlide';
import CarouselNav from '../../../components/carouselNav';

class HomepageHowCarousel extends Component {
  static defaultProps = {
    screenSize: window.screen.availWidth,
  }
  static propTypes = {
    screenSize: PropTypes.number,
    height: PropTypes.number.isRequired,
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
      desc: 'Our distribution warehouse then quickly prepares your Nicotine Juice parcel per your order invoice.',
      alt: 'Warehouse',
    }, {
      name: 'flight',
      desc: 'Shortly thereafter, your parcel is put on the soonest direct flight from California to Japan.',
      alt: 'Overnight Flight',
    }, {
      name: 'truck',
      desc: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',
      alt: 'Delivery Truck',
    }, {
      name: 'delivery',
      desc: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',
      alt: 'Delivered',
    }];
    return slideDescs.map(({ name, desc, alt }) => (
      <CarouselImageSlide
        maxWidth={maxWidth}
        key={`homepage-how-carousel-${name}-${Date.now()}`}
        className="homepage-how-carousel"
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
      <div className="homepage-how" style={{ height }}>
        <div className="how__content--container">
          <h1 className="homepage-how-title">How?</h1>
          <div className="homepage-how-carousel-container">
            <div
              style={stylesObj.slides}
              className="homepage-how-carousel-container-slides"
            >{this.renderCarouselSlides(maxWidth)}</div>

            {/* NAVS */}
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
