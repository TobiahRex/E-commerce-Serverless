import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import HomepageReviewsSlide from '../../../Components/CarouselTextSlide/carouselTextSlide';
import HomepageReviewsCarourselDots from '../../../Components/CarouselDots/carouselDots';

let globalTimer;

class HomepageReviewsCarousel extends Component {
  static propTypes = {
    screenSize: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      screenSize: Number(this.props.screenSize || '360'),
      showIndex: 0,
      maxWidth: '346px',
      leftAdjust: {
        left: 0,
      },
    };
  }

  componentDidMount() {
    this.startTimer(0);
  }

  componentWillReceiveProps({ screenSize }) {
    const { maxWidth } = this.calcMaxWidth(screenSize, 0);
    console.log('new max width: ', maxWidth);
    this.setState({
      screenSize: Number(screenSize),
      maxWidth,
      // maxWidth: this.calcMaxWidth(screenSize, 0).maxWidth,
    });
  }

  componentWillUnmount() {
    this.unMountTimer();
  }

  calcMaxWidth = (screen, index = 0) => {
    const screenSize = screen;
    let screenAdjust = 0;
    let maxWidth = 0;
    if (screenSize > 1079) {
      screenAdjust = -941;
    } else if (screenSize < 1080 && screenSize > 359) {
      screenAdjust = -346;
      maxWidth = '346px';
    } else if (screenSize < 360) {
      screenAdjust = (screenSize - 14) * -1;
      maxWidth = `${screenAdjust * -1}px`;
    }
    return { maxWidth, screenAdjust, index };
  }

  returnNewSlide = (inputIndex) => {
    const { screenSize } = this.state;
    const { maxWidth, screenAdjust, index } = this.calcMaxWidth(screenSize, inputIndex);
    this.setState({
      maxWidth,
      showIndex: index,
      leftAdjust: {
        left: `${(screenAdjust * index) / 10}em`,
      },
    });
  }

  startTimer = (index) => {
    if (index === 4) {
      return this.startTimer(0);
    }
    if (index !== this.state.index) {
      this.returnNewSlide(index);
    }
    globalTimer = setTimeout(() => this.startTimer(index += 1), 10000);
    return globalTimer;
  }

  stopTimer = (newIndex) => {
    clearTimeout(globalTimer);
    this.startTimer(newIndex);
  }

  unMountTimer = () => clearTimeout(globalTimer);

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
    const { showIndex, leftAdjust, maxWidth } = this.state;
    console.log('maxWidth: ', maxWidth);
    return (
      <div className="homepage-reviews">
        <h1 className="homepage-reviews-title">Reviews</h1>
        <div className="homepage-reviews-carousel-parent">
          <div className="homepage-reviews-carousel-container">
            <div style={leftAdjust} className="homepage-reviews-carousel-slides">
              <HomepageReviewsSlide
                maxWidth={maxWidth}
                className={'homepage-reviews-carousel'}
                name={'alpha'}
                review={'Well, NJ2JP wasn’t lying. 5 days to Fukuoka. Way faster than all of my previous online choices. I’m sold.'}
                author={'Matt Shipmen'}
              />
              <HomepageReviewsSlide
                maxWidth={maxWidth}
                className={'homepage-reviews-carousel'}
                name={'beta'}
                review={'Wow! Fruity Bamm-Bamm = Delicious.  4 Day Delivery = Fast. My New Juice Source = NJ2JP.'}
                author={'Gene Smith, Okinawa'}
              />
              <HomepageReviewsSlide
                maxWidth={maxWidth}
                className={'homepage-reviews-carousel'}
                name={'gamma'}
                review={'“NicJuice2Japan (NJ2JP) are killing it with these delivery speeds. Not to mention the juice line is delicious.  Looking forward to them carrying more juices flavors.”'}
                author={'Robert McNair, Sasebo'}
              />
              <HomepageReviewsSlide
                maxWidth={maxWidth}
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
const mapStateToProps = ({ mobile }) => ({
  screenSize: mobile.screenSize,
});
export default connect(mapStateToProps, null)(HomepageReviewsCarousel);
