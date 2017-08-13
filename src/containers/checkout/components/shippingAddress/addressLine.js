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
      title,
      disabled,
      required,
      shippingAddressLine,
    } = this.props;

    const validations = [];
    if (required) validations.push('required');

    return (
      <div className="input__row">
        <div className={`input__row--address-line-${lineNumber}`}>
          <p>{title} {'\u0020'}
            {required && <span className="required">*</span>}
          </p>
          <Validation.components.Input
            disabled={disabled}
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name={`shippingAddressLine${lineNumber}`}
            validations={[...validations]}
            onChange={this.handleOnChange}
            value={shippingAddressLine}
            placedholder={'Generated from Postal Code...'}
          />
        </div>
      </div>
    );
  }
}
const { bool, string, func } = PropTypes;
AddressLine.propTypes = {
  disabled: bool,
  required: bool.isRequired,
  title: string.isRequired,
  shippingAddressLine: string.isRequired,
  handleOnChange: func,
};
AddressLine.defaultProps = {
  disabled: false,
  handleOnChange: null,
  required: false,
};
export default AddressLine;
