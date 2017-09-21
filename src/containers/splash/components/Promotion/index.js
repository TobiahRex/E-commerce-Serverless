import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  render() {
    return (
      <div className="flyout__footer" data-ix="hide-on-load-2">
        <div className="footer__promotion-container">
          <div className="promotion-top">
            <div className="non-member__title">
              <div className="tittle--header">
                <IntlMsg id="home.promotion.desc1" />
              </div>
            </div>
            <div className="exit-btn__container" data-ix="close-popup">
              <div className="container__fa-text">
                <FontAwesome name="close" />
              </div>
            </div>
          </div>
          <div className="promotion-bottom">
            <div className="register-text">
              <IntlMsg id="home.promotion.desc2" />
            </div>&nbsp;
            <div className="discount-text">
              <IntlMsg id="home.promotion.desc3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
