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

  renderCarouselSlide = () => {
    const slideDescs = [{
      couple: 'Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.',
      couple_alt: 'Buy NJ2JP Juices',
    }, {
      distro: 'Moments later, we receive your order at our Distribution Center in California.',
      distro_alt: 'Distribution Center',
    }, {
      warehouse: 'Our distribution warehouse then quickly prepares your Nicotine Juice parcel per your order invoice.',
      warehouse_alt: 'Warehouse',
    }, {
      flight: 'Shortly thereafter, your parcel is put on the soonest direct flight from California to Japan.',
      flight_alt: 'Overnight Flight',
    }, {
      truck: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',
      truck_alt: 'Delivery Truck',
    }, {
      delivery: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',
      delivery_alt: 'Delivered',
    }];
    slideDesc.map((slideObj) => (
      <CarouselImageSlide
        className="homepage-how-carousel"
        name="couple"
        description={slideDescs.couple}
        alt="Buy NJ2JP Juices"
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

  return (
    <div className="homepage-how">
      <h1 className="homepage-how-title">How?</h1>
      <div className="homepage-how-carousel-container">
        <div
          style={stylesObj.slides}
          className="homepage-how-carousel-container-slides"
          >
            {this.renderCarouselSlides()}
          </div>

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
const mapStateToProps = ({ geo }) => ({
  screenSize: geo.screen_size,
});
export default connect(mapStateToProps, null)(HomepageHowCarousel);
