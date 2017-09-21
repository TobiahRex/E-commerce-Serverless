import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  render() {
    return (
      <div className="splash-img__background">
        <div className="splash-img">
          <div className="splash-img__header-container">
            <div className="header-container__box" data-ix="fade-in-on-load">
              <div className="box__img--container">
                <img
                  alt="NJ2JP"
                  className="box__img"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 350px, 500px"
                  src="images/nj2jp_oneLine_2-1.png"
                  srcSet="images/nj2jp_oneLine_2-1-p-500.png 500w, images/nj2jp_oneLine_2-1-p-800.png 800w, images/nj2jp_oneLine_2-1-p-1080.png 1080w, images/nj2jp_oneLine_2-1-p-1600.png 1600w, images/nj2jp_oneLine_2-1-p-2000.png 2000w, images/nj2jp_oneLine_2-1-p-2600.png 2600w, images/nj2jp_oneLine_2-1-p-3200.png 3200w, images/nj2jp_oneLine_2-1.png 6200w"
                  width="514"
                />
              </div>
              <div className="box__header-container">
                <h1 className="header-container__header" data-ix="staggered-load">
                  Fastest Nicotine e-Juice Delivery in Japan
                </h1>
                <h1 className="header--2 header-container__header" data-ix="staggered-load-2">
                  Guaranteed!
                </h1>
              </div>
              <div className="box__button-container">
                <a
                  className="box__button w-inline-block"
                  data-ix="button-load-hover"
                  href="http://www.google.com"
                >
                  <div className="box__button--alt" data-ix="button-load-hover" />
                  <div className="box__button--alt-2" data-ix="button-load-hover" />
                  <p className="box__button--text" data-ix="button-load-hover">
                    Buy Now
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="nav-button">
            <div className="nav-button__container">
              <div className="container__nav-button">
                <div className="nav-button__fa-chevron">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
