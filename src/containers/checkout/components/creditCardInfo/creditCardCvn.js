import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { bool, func } = PropTypes;

class CreditCardCvn extends PureComponent {
  static propTypes = {
    showCvnModal: bool.isRequired,
    toggleModal: func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      creditCardCvn: '',
    };
  }

  handleInputChange = e => this.setState({ creditCardCvn: e.target.value })

  render() {
    return (
      <div className="input__row cvn">
        <div className="input__row--cvn-number">
          <p>Card Verification Number (CVN) <span className="required">*</span></p>

          <input
            name="creditCardCvn"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.creditCardCvn}
          />

          <button
            type="button"
            data-modal="showCvnModal"
            className="button--cvn-modal"
            onClick={this.props.toggleModal}
          >
            Whats this ?
          </button>

        </div>
      </div>
    );
  }
}
export default CreditCardCvn;
