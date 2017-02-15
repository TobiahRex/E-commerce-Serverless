import React, { Component } from 'react';

import HomepageReviewsSlide from '../../../Components/CarouselTextSlide/carouselTextSlide';
import HomepageReviewsCarourselDots from '../../../Components/CarouselDots/carouselDots';

let globalTimer;

class HomepageReviewsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      leftAdjust: {
        left: '0em',
      },
    };
  }

  componentDidMount() {
    this.startTimer(0);
  }

  returnNewSlide = index =>
  this.setState({
    slideIndex: index,
    leftAdjust: {
      left: `${(-1000 * index) / 10}em`,
    },
  })

  startTimer = (index) => {
    if (index === 4) {
      return this.startTimer(0);
    }
    this.returnNewSlide(index);
    globalTimer = setTimeout(() => this.startTimer(index += 1), 3000);
    return globalTimer;
  }

  stopTimer = (newIndex) => {
    clearTimeout(globalTimer);
    this.startTimer(newIndex);
  }

  handleClick = (e) => {
    e.preventDefault();
    switch (e.target.getAttribute('id')) {
      case 'alpha': this.stopTimer(0); break;
      case 'beta': this.stopTimer(1); break;
      case 'gamma': this.stopTimer(2); break;
      case 'delta': this.stopTimer(3); break;
      default: this.stopTimer(0);
    }
  }

  render() {
    const { slideIndex, leftAdjust } = this.state;
    console.log('slideIndex @ render: ', slideIndex);
    return (
      <div className="homepage-reviews">
        <h1 className="homepage-reviews-title">Reviews</h1>
        <div className="homepage-reviews-carousel-parent">
          <div className="homepage-reviews-carousel-container">
            <div style={leftAdjust} className="homepage-reviews-carousel-slides">
              <HomepageReviewsSlide
                className={'homepage-reviews-carousel'}
                name={'alpha'}
                review={'Well, NJ2JP wasn’t lying. 5 days to Fukuoka. Way faster than all of my previous online choices. I’m sold.'}
                author={'Matt Shipmen'}
              />
              <HomepageReviewsSlide
                className={'homepage-reviews-carousel'}
                name={'beta'}
                review={'Wow! Fruity Bamm-Bamm = Delicious.  4 Day Delivery = Fast. My New Juice Source = NJ2JP.'}
                author={'Gene Smith, Okinawa'}
              />
              <HomepageReviewsSlide
                className={'homepage-reviews-carousel'}
                name={'gamma'}
                review={'“NicJuice2Japan (NJ2JP) are killing it with these delivery speeds. Not to mention the juice line is delicious.  Looking forward to them carrying more juices flavors.”'}
                author={'Robert McNair, Sasebo'}
              />
              <HomepageReviewsSlide
                className={'homepage-reviews-carousel'}
                name={'delta'}
                review={'I placed my order on Monday, by Thursday morning, I was vaping Nicotine e-juice. Nj2jp is blazing fast!'}
                author={'Justin Arians, Yokosuka'}
              />
            </div>
          </div>
        </div>
        <HomepageReviewsCarourselDots
          show={slideIndex}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default HomepageReviewsCarousel;
