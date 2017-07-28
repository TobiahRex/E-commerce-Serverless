import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class AddressLine extends React.PureComponent {
  static propTypes = {
    required: PropTypes.bool,
    lineNumber: PropTypes.number.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    shippingAddressLine: PropTypes.string.isRequired,
  }

  static defaultProps = {
    required: false,
  }

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
          <p>AddressLine {lineNumber} <span className="required">*</span></p>
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
export default AddressLine;
