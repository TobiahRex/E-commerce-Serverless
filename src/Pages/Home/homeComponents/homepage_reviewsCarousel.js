import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import HomepageReviewsSlide from '../../../Components/CarouselTextSlide/carouselTextSlide';
import HomepageReviewsCarourselDots from '../../../Components/CarouselDots/carouselDots';

class HomepageReviewsCarousel extends Component {
  static defaultProps = {
    slideIndex: 0,
    slideAdjust: '0em',
  }

  static propTypes = {
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    slideIndex: PropTypes.number,
    slideAdjust: PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: this.props.slideIndex,
      leftAdjust: {
        left: this.props.slideAdjust,
      },
    };
  }

  componentDidMount() {
    this.props.startTimer(0);
  }

  handleClick = (e) => {
    e.preventDefault();
    switch (e.target.getAttribute('id')) {
      case 'alpha': this.props.stopTimer(0); break;
      case 'beta': this.props.stopTimer(1); break;
      case 'gamma': this.props.stopTimer(2); break;
      case 'delta': this.props.stopTimer(3); break;
      default: this.props.stopTimer(0);
    }
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
  slideIndex: homepage.reviews.slideIndex,
  slideAdjust: homepage.reviews.slideAdjust,
});
const mapDispatchToProps = dispatch => ({
  startTimer: index => dispatch(HomepageActions.startReviewsTimer(index)),
  stopTimer: () => dispatch(HomepageActions.stopReviewsTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageReviewsCarousel);
