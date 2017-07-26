import React, { PureComponent } from 'react';

class CreditCardNumber extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      creditCardNumber: '',
    };
  }

  handleInputChange = e => this.setState({ creditCardNumber: e.target.value })

  render() {
    return (
      <div className="input__row">
        <div className="input__row--cc-number">
          <p>Credit Card Number <span className="required">*</span></p>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.creditCardNumber}
          />
        </div>
      </div>
    );
  }
}
export default CreditCardNumber;
