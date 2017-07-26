import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddressLine extends PureComponent {
  static propTypes = {
    lineNumber: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      addressLine: '',
    };
  }

  handleChange = e => this.setState({ addressLine: e.target.value })

  render() {
    const { lineNumber } = this.props;

    return (
      <div className="input__row">
        <div className={`input__row--address-line-${lineNumber}`}>
          <p>AddressLine {lineNumber} <span className="required">*</span></p>
          <input
            name={`addressLine${lineNumber}`}
            type="text"
            onChange={this.handleChange}
            value={this.state.addressLine}
          />
        </div>
      </div>
    );
  }
}
export default AddressLine;
