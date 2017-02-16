import React, { Component } from 'react';

import CarouselImageSlide from '../../../Components/CarouselImageSlide/carouselImageSlide';
import CarouselNav from '../../../Components/carouselNav';

export default class HomepageHowCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numSlides: 6,
      showIndex: 0,
      hasPrevious: false,
      hasNext: true,
    };
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

  render() {
    const { showIndex, hasPrevious, hasNext } = this.state;
    const stylesObj = {
      slides: {
        left: `${(-346 * showIndex) / 10}em`,
      },
      leftNav: {
        display: hasPrevious ? 'inline' : 'none',
      },
      rightNav: {
        display: hasNext ? 'inline' : 'none',
      },
    };

    const slideDescs = {
      couple: 'Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.',

      distro: 'Moments later, we receive your order at our Distribution Center in California.',

      warehouse: 'Our distribution warehouse then quickly prepares your Nicotine Juice parcel per your order invoice.',

      flight: 'Shortly thereafter, your parcel is put on the soonest direct flight from California to Japan.',

      truck: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',

      delivery: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',
    };
    return (
      <div className="homepage-how">
        <h1 className="homepage-how-title">How?</h1>
        <div className="homepage-how-carousel-container">
          <div
            style={stylesObj.slides}
            className="homepage-how-carousel-container-slides"
          >
            <CarouselImageSlide
              className="homepage-how-carousel"
              name="couple"
              description={slideDescs.couple}
              alt="Buy NJ2JP Juices"
            />
            <CarouselImageSlide
              className="homepage-how-carousel"
              name="distro"
              description={slideDescs.distro}
              alt="Distribution Center"
            />
            <CarouselImageSlide
              className="homepage-how-carousel"
              name="warehouse"
              description={slideDescs.warehouse}
              alt="Warehouse"
            />
            <CarouselImageSlide
              className="homepage-how-carousel"
              name="flight"
              description={slideDescs.flight}
              alt="Shipping Flight"
            />
            <CarouselImageSlide
              className="homepage-how-carousel"
              name="truck"
              description={slideDescs.truck}
              alt="Delivery Truck"
            />
            <CarouselImageSlide
              className="homepage-how-carousel"
              name="delivery"
              description={slideDescs.delivery}
              alt="Delivery Man"
            />
          </div>
          {/* NAVS */}
          <CarouselNav
            show={stylesObj.leftNav}
            className="homepage-how-carousel"
            name="left"
            onNext={null}
            onPrevious={this.handlePreviousClick} hasPrevious={this.state.showIndex > 0} hasNext={this.state.showIndex < this.state.numSlides - 1}
          />

          <CarouselNav
            show={stylesObj.rightNav}
            className="homepage-how-carousel"
            name="right"
            onNext={this.handleNextClick}
            onPrevious={null}
            hasPrevious={this.state.showIndex > 0} hasNext={this.state.showIndex < this.state.numSlides - 1}
          />
        </div>
      </div>
    );
  }
}
