import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CreditCardCvn extends PureComponent {
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
            type="text"
            onChange={this.handleInputChange}
            value={this.state.creditCardCvn}
          />
          <button
            data-modal="cvnModal"
            className="button--cvn-modal"
            onClick={this.props.toggleModal}
          >Whats this ?</button>
        </div>
      </div>
    );
  }
}
CreditCardCvn.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default CreditCardCvn;
