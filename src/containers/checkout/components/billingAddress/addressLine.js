import React from 'react';
import PropTypes from 'prop-types';

class AddressLine extends React.PureComponent {
  static propTypes = {
    lineNumber: PropTypes.number.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    billingAddressLine: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingAddressLine: props.billingAddressLine,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    const {
      lineNumber,
      billingAddressLine,
    } = this.props;

    return (
      <div className="input__row">
        <div className={`input__row--address-line-${lineNumber}`}>
          <p>AddressLine {lineNumber} <span className="required">*</span></p>
          <input
            name={`billingAddressLine${lineNumber}`}
            type="text"
            onChange={this.handleOnChange}
            value={billingAddressLine}
          />
        </div>
      </div>
    );
  }
}
export default AddressLine;
