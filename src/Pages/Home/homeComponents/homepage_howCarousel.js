import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import CarouselImageSlide from '../../../Components/CarouselImageSlide/carouselImageSlide';
import CarouselNav from '../../../Components/carouselNav';

class HomepageHowCarousel extends Component {
  static propTypes = {
    screenSize: PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      screenSize: Number(this.props.screenSize),
      numSlides: 6,
      showIndex: 0,
      hasPrevious: false,
      hasNext: true,
    };
  }

  componentWillReceiveProps({ screenSize }) {
    const screen = Number(screenSize);
    console.log('new Screen: ', screen);
    this.setState({ screenSize: screen });
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

  renderCarouselSlides = () => {
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
    return slideDescs.map((slideObj, i) => (
      <CarouselImageSlide
        key={`homepage-how-carousel-${i}`}
        className="homepage-how-carousel"
        name={slideObj.name}
        description={slideObj.desc}
        alt={slideObj.alt}
      />
    ));
  }

  render() {
    const { showIndex, hasPrevious, hasNext, screenSize } = this.state;
    let screenAdjust = 0;

    if (screenSize > 1000) {
      screenAdjust = -941;
    } else {
      screenAdjust = (screenSize - 14) * -1;
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
    console.warn('stylesObj: ', stylesObj);
    return (
      <div className="homepage-how">
        <h1 className="homepage-how-title">How?</h1>
        <div className="homepage-how-carousel-container">
          <div
            style={stylesObj.slides}
            className="homepage-how-carousel-container-slides"
          >{this.renderCarouselSlides()}</div>

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
    );
  }
}
const mapStateToProps = ({ mobile }) => ({
  screenSize: mobile.screenSize,
});
export default connect(mapStateToProps, null)(HomepageHowCarousel);
