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
      placeHolder,
      shippingAddressLine,
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
            name={`shippingAddressLine${title}`}
            validations={[...validations]}
            onChange={this.handleOnChange}
            value={shippingAddressLine}
          />
        </div>
      </div>
    );
  }
}
const { bool, string, func } = PropTypes;
AddressLine.propTypes = {
  title: string.isRequired,
  disabled: bool,
  required: bool.isRequired,
  placeHolder: string,
  handleOnChange: func,
  shippingAddressLine: string.isRequired,
};
AddressLine.defaultProps = {
  disabled: false,
  required: false,
  placeHolder: '',
  handleOnChange: null,
};
export default AddressLine;
