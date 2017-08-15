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
      type,
      line,
      title,
      disabled,
      required,
      addressLine,
      placeHolder,
    } = this.props;

    const validations = [];
    if (required) validations.push('required');

    return (
      <div className="input__row">
        <div className={`input__row--address-line${disabled ? '-disabled' : ''}`}>
          <p>{title} {'\u0020'}
            {required && <span className="required">*</span>}
          </p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            placeholder={placeHolder}
            disabled={disabled}
            containerClassName=""
            type="text"
            name={`${type}AddressLine${line}`}
            validations={[...validations]}
            onChange={this.handleOnChange}
            value={addressLine}
          />
        </div>
      </div>
    );
  }
}
const { bool, string, func, number } = PropTypes;
AddressLine.propTypes = {
  line: number.isRequired,
  type: string.isRequired,
  title: string.isRequired,
  disabled: bool,
  required: bool.isRequired,
  addressLine: string.isRequired,
  placeHolder: string,
  handleOnChange: func,
};
AddressLine.defaultProps = {
  disabled: false,
  placeHolder: '',
  handleOnChange: null,
};
export default AddressLine;
