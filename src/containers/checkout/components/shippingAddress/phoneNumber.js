import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class PhoneNumber extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: props.phoneNumber,
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
            name={`${this.props.type}PhoneNumber`}
            validations={['required', 'numeric', 'phone-startWithZero', 'phone-japanLength']}
            onChange={this.handleOnChange}
            value={this.props.phoneNumber}
          />
        </div>
      </div>
    );
  }
}
const { string, func } = PropTypes;
PhoneNumber.propTypes = {
  type: string.isRequired,
  phoneNumber: string.isRequired,
  handleOnChange: func.isRequired,
};
export default PhoneNumber;
