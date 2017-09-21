import React from 'react';
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
                Not a member?
              </div>
            </div>
            <div className="exit-btn__container" data-ix="close-popup">
              <div className="container__fa-text">
                
              </div>
            </div>
          </div>
          <div className="promotion-bottom">
            <div className="register-text">
              Register & Save
            </div>&nbsp;
            <div className="discount-text">
              10%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
