import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const { bool, func } = PropTypes;

class CvnModal extends PureComponent {
  static propTypes = {
    showModal: bool.isRequired,
    toggleModal: func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      na: '',
    };
  }

  getModalStyle = (show) => {
    if (show) {
      return ({
        display: 'flex',
        opacity: 1,
        height: '100%',
        width: '100%',
      });
    }
    return ({
      display: 'none',
      opacity: 0,
      height: 0,
      width: 0,
    });
  }

  toggleModal = e => this.props.toggleModal(e)

  render() {
    return (
      <div style={this.getModalStyle(this.props.showModal)} className="checkout__cvn-modal">
        <div className="cvn-modal__dialogue">
          <div className="dialogue__exit--container">

            <button
              data-parent="exit__btn"
              data-modal="showCvnModal"
              className="exit-btn"
              onClick={this.toggleModal}
            ><FontAwesome name="plus" />
            </button>

          </div>
          <div className="dialogue__cvn-blurb">
            <h1 className="cvn-blurb__title">
              {'What\'s'} A CVN / CVV?
            </h1>
            <br />
            <p className="cvn-blurb__sub-title">
              {'\"CVN\"'} / {'\"CVV\"'} is a <i>{'\"Card Verification Number\"'}</i>
            </p>
            <br />
            <p className="cvn-blurb__description">
              It is a 3 digit number, usually located on the back of your credit card.
            </p>
            <br />
            <img
              className="cvn-blurb__image-src"
              src="/images/cvn-example.jpg"
              alt="CVN Example"
            />
          </div>
          <div className="dialogue__action-btns">

            <button
              data-parent="promotion-register"
              data-modal="showCvnModal"
              className="action-btn__close primary-button sweep-right"
              onClick={this.toggleModal}
            >Close
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default CvnModal;
