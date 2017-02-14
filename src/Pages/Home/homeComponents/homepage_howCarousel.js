import React, { Component } from 'react';

import CarouselSlide from './homepage_howCarousel_slide';
import CarouselNav from './homepage_howCarousel_nav';

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
    const hasPrevious = showIndex === 0 ? false : true;
    const hasNext = showIndex === 6 ? false : true;
    this.setState({ showIndex,  });
  }

  handleNextClick = () =>
  this.setState({ showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1) });

  render() {
    const { showIndex } = this.state;
    const styleObj = {
      left: `${(-941 * showIndex) / 10}em`,
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
            style={styleObj}
            className="homepage-how-carousel-container-slides"
          >
            <CarouselSlide
              className="homepage-how-carousel"
              name="couple"
              description={slideDescs.couple}
              alt="Buy NJ2JP Juices"
            />
            <CarouselSlide
              className="homepage-how-carousel"
              name="distro"
              description={slideDescs.distro}
              alt="Distribution Center"
            />
            <CarouselSlide
              className="homepage-how-carousel"
              name="warehouse"
              description={slideDescs.warehouse}
              alt="Warehouse"
            />
            <CarouselSlide
              className="homepage-how-carousel"
              name="flight"
              description={slideDescs.flight}
              alt="Shipping Flight"
            />
            <CarouselSlide
              className="homepage-how-carousel"
              name="truck"
              description={slideDescs.truck}
              alt="Delivery Truck"
            />
            <CarouselSlide
              className="homepage-how-carousel"
              name="delivery"
              description={slideDescs.delivery}
              alt="Delivery Man"
            />
          </div>
          {/* NAVS */}
          <CarouselNav
            className="homepage-how-carousel"
            name="left"
            onNext={null}
            onPrevious={this.handlePreviousClick} hasPrevious={this.state.showIndex > 0} hasNext={this.state.showIndex < this.state.numSlides - 1}
          />

          <CarouselNav
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
