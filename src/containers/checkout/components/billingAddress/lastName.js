import React from 'react';
import PropTypes from 'prop-types';

class LastName extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingLastName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      billingLastName: props.billingLastName,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row--last-name">
        <p>Last Name <span className="required">*</span></p>
        <input
          name="billingLastName"
          type="text"
          onChange={this.handleOnChange}
          value={this.props.billingLastName}
          required
        />
      </div>
    );
  }
}
export default LastName;
