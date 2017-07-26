import React, { PureComponent } from 'react';

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
            className="button--cvn-modal"
            onClick={() => console.info('Show CVN modal')}
          >Whats this ?</button>
        </div>
      </div>
    );
  }
}
export default CreditCardCvn;
