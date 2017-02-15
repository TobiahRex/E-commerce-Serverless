import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomepageReviewsSlide from '../../../Components/CarouselTextSlide/carouselTextSlide';
import HomepageReviewsCarourselDots from '../../../Components/CarouselDots/carouselDots';

let globalTimer;

class HomepageReviewsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndex: 0,
      leftAdjust: {
        left: '0em',
      },
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showIndex: 1,
    //     leftAdjust: {
    //       left: `${-1000 / 10}em`,
    //     },
    //   });
    // }, 3000);
    startTimer(0);
  }

  // shouldComponentUpdate(nextProps, { userChange }) {
  //   if (userChange) {
  //     this.stopTimeout();
  //     return true;
  //   } else if (!userChange) {
  //     this.startTimeout();
  //     return true;
  //   }
  //   return false;
  // }
  // startTimeout = () => {
  //   if (!this.state.slideTimer) {
  //     this.setState({
  //       slideTimer: setTimeout(() => {
  //         if (this.state.showIndex === 3) {
  //           this.configSetState(0);
  //         } else {
  //           this.configSetState(this.state.showIndex + 1);
  //         }
  //       }, 3000),
  //     });
  //   }
  // }
  //
  // stopTimeout = () => this.setState({ slideTimer: '', userChange: false })

  configSetState = index =>  // 0
  this.setState({ showIndex: index, // 0
    leftAdjust: {
      left: `${(-1000 * index) / 10}em`, // 0em
    },
  })

  userSetSlide = (index) => {
    this.setState({
      userChange: true,
      showIndex: index,
      leftAdjust: {
        left: `${(-1000 * index) / 10}em`,
      },
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    switch (e.target.getAttribute('id')) {
      case 'alpha': stopTimer(0); break;
      case 'beta': stopTimer(1); break;
      case 'gamma': stopTimer(2); break;
      case 'delta': stopTimer(3); break;
      default: stopTimer(0);
    }
    // console.log('target: ', e.target.getAttribute('id'));
  }

  render() {
    const { showIndex, leftAdjust } = this.state;
    console.log('showIndex @ render: ', showIndex);
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
          show={showIndex}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

// function startTimer(index) {
//   console.dir(HomepageReviewsCarousel);
//   // globalTimer = setInterval(() => {
//   //   HomepageReviewsCarousel.setState({
//   //     showIndex: index,
//   //     leftAdjust: {
//   //       left: `${(-1000 * index) / 10}em`,
//   //     },
//   //   });
//   // }, 3000);
// }
//
// function stopTimer(index) {
//   globalTimer.clearInterval();
//   startTimer(index);
// }

const mapStateToProps = ({ homepage }) => ({
  slideIndex: homepage.reviews.carouselIndex,
});
const mapDispatchToProps = dispatch => ({
  startTimer: (index) => dispatch(HomepageActions.startReviewsTimer(index)),
  stopTimer: (index) => dispatch(HomepageActions.stopReviewsTimer(index)),
})

export default connect(mapStateToProps, mapDispatchTopProps)(HomepageReviewsCarousel);
