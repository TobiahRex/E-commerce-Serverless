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
    return (
      <div className="homepage-how">
        <h1 className="homepage-how-title">How?</h1>
        <div className="homepage-how-carousel-container">
          <CarouselSlide className="homepage-how-carousel" name="couple" description={coupleSlideDesc} alt="Buy NJ2JP Juices" />
          <div className="homepage-how-carousel-distro">
            <img alt="Distribution Center" className="homepage-how-carousel-distro-image" />
            <div className="homepage-how-carousel-distro-description-container">
              <p>
                Moments later, we receive your order at our
                Distribution Center in California.
              </p>
            </div>
          </div>
          <div className="homepage-how-carousel-warehouse">
            <img alt="Warehouse" className="homepage-how-carousel-warehouse-image" />
            <div className="homepage-how-carousel-warehouse-description-container">
              <p>
                Our distribution warehouse then quickly prepares your
                Nictoine Juice parcel per your order invoice.
              </p>
            </div>
          </div>
          <div className="homepage-how-carousel-flight">
            <img alt="Shipping Plane" className="homepage-how-carousel-flight-image" />
            <div className="homepage-how-carousel-flight-description-container">
              <p>
                Shortly thereafter, your parcel is put on the soonest
                direct flight from California to Japan.
              </p>
            </div>
          </div>
          <div className="homepage-how-carousel-truck">
            <img alt="Shipping Plane" className="homepage-how-carousel-truck-image" />
            <div className="homepage-how-carousel-truck-description-container">
              <p>
                Soon after landing, your parcel is placed on a delivery truck and on its way to your address in Japan.
              </p>
            </div>
          </div>
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
