import React, { PureComponent } from 'react';

class PhoneNumber extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
    };
  }

  handleChange = e => this.setState({ phone: e.target.value })

  render() {
    return (
      <div className="input__row">
        <div className="input__row--phone">
          <p>Phone / Cell <span className="required">*</span></p>
          <input
            name="phone"
            type="text"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </div>
      </div>
    );
  }
}
export default PhoneNumber;
