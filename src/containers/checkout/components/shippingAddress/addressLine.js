import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class AddressLine extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shippingAddressLine: props.shippingAddressLine,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    const {
      required,
      lineNumber,
      shippingAddressLine,
    } = this.props;

    const validations = [];
    if (required) validations.push('required');

    return (
      <div className="input__row">
        <div className={`input__row--address-line-${lineNumber}`}>
          <p>Address Line {lineNumber}{'\u0020'}
            {required && <span className="required">*</span>}
          </p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name={`shippingAddressLine${lineNumber}`}
            validations={[...validations]}
            onChange={this.handleOnChange}
            value={shippingAddressLine}
          />
        </div>
      </div>
    );
  }
}
const { bool, number, string, func } = PropTypes;
const AddressLine.propTypes = {
  disabled: bool,
  required: bool,
  lineNumber: number.isRequired,
  shippingAddressLine: string.isRequired,
  handleOnChange: func,
};
const AddressLine.defaultProps = {
  disabled: false,
  handleOnChange: null,
  required: false,
};
export default AddressLine;
