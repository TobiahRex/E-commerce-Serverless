import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  render() {
    return (
      <div className="splash-reviews">
        <div className="splash-reviews__header">
          <h2 className="splash-reviews__header--text">
            Reviews
          </h2>
        </div>
        <div
          className="splash-reviews__slide--portrait splash-reviews__slider w-slider"
          data-animation="slide"
          data-autoplay="1"
          data-delay="4000"
          data-duration="600"
          data-easing="ease-in-out"
          data-infinite="1"
          data-nav-spacing="5"
        >
          <div className="slider__mask w-slider-mask">
            <div className="mask__slide-1 w-slide">
              <p className="slide__blurb slide__blurb--portrait">
                <em className="blurb--fa-text review-special-text">
                  
                </em>&nbsp;&nbsp;
                NicJuice2Japan (NJ2JP) are killing it with these delivery speeds.
                <br />
                Not to mention the juice line is delicious. Looking forward to more juices flavors.
                <em className="blurb--fa-text">
                  
                </em>
                <br />
                <br />
                <em className="blurb--fa-text fa-text--signature-dash">
                  
                </em>&nbsp;
                Robert McNair, Sasebo
              </p>
            </div>
            <div className="mask-slide__2 w-slide">
              <p className="slide__blurb">
                <em className="blurb--fa-text review-special-text">
                  
                </em>&nbsp;&nbsp;
                Wow! Fruity Bamm-Bamm = Delicious.
                <br />
                4 Day Delivery = Fast.
                <br />
                My New Juice Source = NJ2JP.
                <em className="blurb--fa-text">
                  
                </em>
                <br />
                <br />
                <em className="blurb--fa-text fa-text--signature-dash">
                  
                </em>&nbsp;
                Gene Smith, Okinawa
              </p>
            </div>
            <div className="mask-slide__3 w-slide">
              <p className="slide__blurb">
                <em className="blurb--fa-text review-special-text">
                  
                </em>&nbsp;
                Well, NJ2JP wasn’t lying. 5 days to Fukuoka.
                <br />
                Way faster than all of my previous online choices. I’m sold.
                <em className="blurb--fa-text">
                  
                </em>
                <br />
                <br />
                <em className="blurb--fa-text fa-text--signature-dash">
                  
                </em>&nbsp;
                Matt Shipmen, Okinawa
              </p>
            </div>
            <div className="mask-slide__4 w-slide">
              <p className="slide__blurb">
                <em className="blurb--fa-text review-special-text">
                  
                </em>&nbsp;
                I placed my order on Monday, by Thursday morning,
                <br />
                I was vaping Nicotine e-juice. Nj2jp is blazing fast!
                <em className="blurb--fa-text">
                  
                </em>
                <br />
                <br />
                <em className="blurb--fa-text fa-text--signature-dash">
                  
                </em>&nbsp;
                Justin Arians, Yokosuka
              </p>
            </div>
          </div>
          <div className="slider__nav w-round w-shadow w-slider-nav" />
        </div>
      </div>
    );
  }
}

export default Reviews;
