import React from 'react';
import PropTypes from 'prop-types';

class PhoneNumber extends React.PureComponent {
  static propTypes = {
    billingPhoneNumber: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      phone: props.billingPhoneNumber,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--phone">
          <p>Phone / Cell <span className="required">*</span></p>
          <input
            name="billingPhoneNumber"
            type="text"
            onChange={this.handleOnChange}
            value={this.props.billingPhoneNumber}
          />
        </div>
      </div>
    );
  }
}
export default PhoneNumber;
