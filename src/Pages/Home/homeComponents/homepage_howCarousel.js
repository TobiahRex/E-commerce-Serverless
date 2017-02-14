import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import CarouselSlide from './homepage_howCarousel_slide';

export default class HomepageHowCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numSlides: 6,
    };
  }

  handlePreviousClick = () => {

  }

  handleNextClick = () => {

  }

  renderNav = () => {

  }

  render() {
    const slideDescs = {
      couple: 'Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.',

      distro: 'Moments later, we receive your order at our Distribution Center in California.',

      warehouse: 'Our distribution warehouse then quickly prepares your Nictoine Juice parcel per your order invoice.',

      flights: 'Shortly thereafter, your parcel is put on the soonest direct flight from California to Japan.',

      truck: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',

      delivery: 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.',
    };

    return (
      <div className="homepage-how">
        <h1 className="homepage-how-title">How?</h1>
        <div className="homepage-how-carousel-container">

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
          
          <div className="homepage-how-carousel-left-arrow" >
            <FontAwesome name="chevron-left" size="3x" />
          </div>
          <div className="homepage-how-carousel-right-arrow" >
            <FontAwesome name="chevron-right" size="3x" />
          </div>
        </div>
      </div>
    );
  }
}
