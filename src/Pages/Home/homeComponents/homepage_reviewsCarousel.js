import React, { Component } from 'react';

import HomepageReviewsSlide from '../../../Components/CarouselTextSlide/carouselTextSlide';
import HomepageReviewsCarourselDots from '../../../Components/CarouselDots/carouselDots';

class HomepageReviewsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numSlides: 4,
      showIndex: -1,
      leftAdjust: {
        left: '',
      },
    };
  }

  componentDidMount() {
    const activeIndex = this.state.showIndex;
    setInterval(() => {
      if (activeIndex === 3) {
        this.setState({
          showIndex: 0,
          leftAdjust: {
            left: '0em',
          },
        });
      } else {
        this.setState({
          showIndex: activeIndex + 1,
          leftAdjust: {
            left: `${(-1000 * activeIndex) / 10}em`,
          },
        });
      }
    }, 3000);
  }

  handleClick = dotId => this.setState({ showIndex: dotId });

  render() {
    const { showIndex, leftAdjust } = this.state;
    return (
      <div className="homepage-reviews">
        <h1 className="homepage-reviews-title">Reviews</h1>
        <div className="homepage-reviews-carousel-parent">
          <div className="homepage-reviews-carousel-container">
            <div style={leftAdjust} className="homepage-reviews-carousel-slides">
              <HomepageReviewsSlide
                show={leftAdjust}
                className={'homepage-reviews-carousel'}
                name={'alpha'}
                review={'Well, NJ2JP wasn’t lying. 5 days to Fukuoka. Way faster than all of my previous online choices. I’m sold.'}
                author={'Matt Shipmen'}
              />
              <HomepageReviewsSlide
                show={leftAdjust}
                className={'homepage-reviews-carousel'}
                name={'beta'}
                review={'Wow! Fruity Bamm-Bamm = Delicious.  4 Day Delivery = Fast. My New Juice Source = NJ2JP.'}
                author={'Gene Smith, Okinawa'}
              />
              <HomepageReviewsSlide
                show={leftAdjust}
                className={'homepage-reviews-carousel'}
                name={'gamma'}
                review={'“NicJuice2Japan (NJ2JP) are killing it with these delivery speeds. Not to mention the juice line is delicious.  Looking forward to them carrying more juices flavors.”'}
                author={'Robert McNair, Sasebo'}
              />
              <HomepageReviewsSlide
                show={left}
                className={'homepage-reviews-carousel'}
                name={'delta'}
                review={'I placed my order on Monday, by Thursday morning, I was vaping Nicotine e-juice. Nj2jp is blazing fast!'}
                author={'Justin Arians, Yokosuka'}
              />
            </div>
          </div>
        </div>
        <HomepageReviewsCarourselDots
          show={showIndex}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default HomepageReviewsCarousel;
