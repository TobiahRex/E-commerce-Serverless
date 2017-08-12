import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class PhoneNumber extends React.PureComponent {
  static propTypes = {
    shippingPhoneNumber: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      shippingPhoneNumber: props.shippingPhoneNumber,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--phone">
          <p>Phone Number (Japanese) <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="string"
            containerClassName=""
            name="shippingPhoneNumber"
            validations={['required', 'numeric', 'phone-startWithZero', 'phone-japanLength']}
            onChange={this.handleOnChange}
            value={this.props.shippingPhoneNumber}
          />
        </div>
      </div>
    );
  }
}
export default PhoneNumber;
