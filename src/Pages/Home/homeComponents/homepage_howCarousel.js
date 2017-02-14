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

  render() {
    const coupleSlideDesc = 'Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.';
    const distroSlideDesc = 'Moments later, we receive your order at our Distribution Center in California.';
    const warehouseSlideDesc = 'Our distribution warehouse then quickly prepares your Nictoine Juice parcel per your order invoice.';
    const flightSlideDesc = 'Shortly thereafter, your parcel is put on the soonest direct flight from California to Japan.';
    const truckSlideDesc = 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.';
    const deliverySlideDesc = 'Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.';

    return (
      <div className="homepage-how">
        <h1 className="homepage-how-title">How?</h1>
        <div className="homepage-how-carousel-container">
          <CarouselSlide className="homepage-how-carousel" name="couple" description={coupleSlideDesc} alt="Buy NJ2JP Juices" />
          <CarouselSlide className="homepage-how-carousel" name="distro" description={distroSlideDesc} alt="Distribution Center" />
          <CarouselSlide className="homepage-how-carousel" name="warehouse" description={warehouseSlideDesc} alt="Warehouse" />
          <CarouselSlide className="homepage-how-carousel" name="flight" description={flightSlideDesc} alt="Shipping Flight" />
          <CarouselSlide className="homepage-how-carousel" name="truck" description={truckSlideDesc} alt="Delivery Truck" />
          <CarouselSlide className="homepage-how-carousel" name="delivery" description={deliverySlideDesc} alt="Delivery Man" />

          <div className="homepage-how-carousel-delivery">
            <img alt="Shipping Plane" className="homepage-how-carousel-delivery-image" />
            <div className="homepage-how-carousel-delivery-description-container">
              <p>
                Finally, you receive your Nicotine Juice from NicJuice2Japan faster than ever before.  Don’t believe us?
              </p>
              <br />
              <Link className="homepage-how-carousel-delivery-buy-btn" to="/products">
                Buy Now
              </Link>
            </div>
          </div>
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
